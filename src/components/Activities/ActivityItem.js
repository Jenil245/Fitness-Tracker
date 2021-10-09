import ActivityDate from './ActivityDate';
import EditActivity from './EditActivity'
import Card from '../UI/Card';
import { useState, Fragment } from 'react';
import './ActivityItem.css';

function ActivityItem(props) {

  const [editFlag, setEditFlag] = useState(false)
  
  const deleteActivityHandler = () => {
    props.onDelete(props.id)
  }

  console.log(editFlag)

  const editActivityHandler = () => {

    setEditFlag(true)
    // props.onEdit({
    //   id:props.id,
    //   date:props.date,
    //   title:props.activityTitle,
    //   duration:props.activityDuration
    // })

    console.log("inside handler",editFlag)
  }

  return (
    <Fragment>
      {editFlag && (
      <EditActivity activityData={props} editFlag={editFlag}/>
      )}

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
    </Fragment>
  );
}

export default ActivityItem;
