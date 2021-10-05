import ActivityItem from "./ActivityItem";
import "./ActivityList.css";

function ActivityList(props) {
  if (props.filteredActivities.length === 0) {
    return (
      <h2 className="fitness-list__fallback">
        No Activity in this Week yet...
      </h2>
    );
  }

  return (
    <div>
      {props.filteredActivities.map((activity) => (
        <ActivityItem
          key={activity.id}
          date={activity.date}
          activityTitle={activity.title}
          activityDuration={activity.duration}
        />
      ))}
    </div>
  );
}

export default ActivityList;
