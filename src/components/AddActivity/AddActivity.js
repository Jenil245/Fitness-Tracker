import { useState } from 'react';
import ActivityForm from './ActivityForm'
import './AddActivity.css';

function AddActivity(props) {

    const [addActivityStatus, setAddActivityStatus] = useState(false)

    const trueActivityStatusHandler = () => setAddActivityStatus(true)
    const falseActivityStatusHandler = () => setAddActivityStatus(false)

    if (!addActivityStatus) {
        return (
            <div className="new-activity">
                <button onClick={trueActivityStatusHandler}>New Activity</button>
            </div>
        )
    }

    const saveNewActivityHandler = (activityItem) => {
        const newActivityItem = {
            ...activityItem,
            id: Math.random().toString(),
        }
        props.onAddNewActivity(newActivityItem)
    }

    return (
        <div className="new-activity">
            <ActivityForm onSaveNewActivity={saveNewActivityHandler}  onChangeStatus={falseActivityStatusHandler} />
        </div>
    )
};

export default AddActivity;