import ActivityDate from './ActivityDate';
import Card from '../UI/Card';
import './ActivityItem.css';

function ActivityItem(props) {
  
  const deleteActivityHandler = () => {
    props.onDelete(props.id)
  }

  const editActivityHandler = () => {
    props.onEdit({
      id:props.id,
      date:props.date,
      title:props.activityTitle,
      duration:props.activityDuration
    })
  }

  return (
    <Card className="activity-item">
      <ActivityDate date={props.date} />
      <div className="activity-item__description">
        <h2> {props.activityTitle} </h2>
        <div className="activity-item__minutes">
          {props.activityDuration} Minutes
        </div>
      </div>
      <button onClick={editActivityHandler}>Edit</button>
      <button onClick={deleteActivityHandler}>Delete</button>
    </Card>
  );
}

export default ActivityItem;
