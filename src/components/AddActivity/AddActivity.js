import './AddActivity.css';
import ActivityForm from './ActivityForm'

function AddActivity(props) {

    const saveNewActivityHandler = (activityItem) => {
        const newActivityItem = {
            ...activityItem,
            id: Math.random().toString(),
        }
        props.onAddNewActivity(newActivityItem)
    }

    return (
        <div className="new-activity">
            <ActivityForm onSaveNewActivity={saveNewActivityHandler} />
        </div>
    )
};

export default AddActivity;