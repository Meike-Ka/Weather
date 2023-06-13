import { useState, useEffect } from "react";
import List from "./List";

const App = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = e.target.elements.name;
    const isForGoodWeatherInput = e.target.elements.isForGoodWeather;

    const newActivity = {
      id: Date.now().toString(),
      name: nameInput.value,
      isForGoodWeather: isForGoodWeatherInput.checked,
    };

    setActivities((prevActivities) => [...prevActivities, newActivity]);
    localStorage.setItem("activities", JSON.stringify(activities));

    nameInput.value = "";
    isForGoodWeatherInput.checked = false;
    nameInput.focus();
  };

  return (
    <div>
      <h1>Weather & Activities App</h1>
      <List activities={activities} />
      <form onSubmit={handleSubmit}>
        <h2>Add Activity</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
        <label htmlFor="isForGoodWeather">
          Is it a good weather activity?
          <input type="checkbox" id="isForGoodWeather" />
        </label>
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default App;
