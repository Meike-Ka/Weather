import PropTypes from "prop-types";

const List = ({ activities }) => {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.name} -{" "}
          {activity.isForGoodWeather ? "Good Weather" : "Bad Weather"}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isForGoodWeather: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default List;
