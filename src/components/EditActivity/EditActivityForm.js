import { useState } from 'react'
import './EditActivityForm.css'

function EditActivityForm(props) {

    const [titleChange, setTitleChange] = useState(props.presentActivityData.activityTitle)
    const [durationChange, setDurationChange] = useState(props.presentActivityData.activityDuration)
    const [dateChange, setDateChange] = useState((props.presentActivityData.date).toISOString().split('T')[0])
    
    const formSubmitHandler = (event) => {
        event.preventDefault()

        const activityItem = {
            title: titleChange,
            duration: durationChange,
            date: new Date(dateChange)
        }

        props.onEditActivity(activityItem)

        formStatusHandler()
    }

    const formStatusHandler = () => {
        props.onChangeStatus()
    }

    const titleChangeHandler = (event) => {
        setTitleChange(event.target.value)
    }

    const durationChangeHandler = (event) => {
        setDurationChange(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDateChange(event.target.value)
    }



    return (
        <form onSubmit={formSubmitHandler}>
            <div className="edit-activity__controls">
                <div className="edit-activity__control">
                    <label>Title</label>
                    <input type="text" value={titleChange} onChange={titleChangeHandler} />
                </div>
                <div className="edit-activity__control">
                    <label>Duration</label>
                    <input type="number" value={durationChange} min='1' max='120' onChange={durationChangeHandler} />
                </div>
                <div className="edit-activity__control">
                    <label>Date</label>
                    <input type="date" value={dateChange} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="edit-activity__actions">
                <button onClick={formStatusHandler}>Cancel</button>
                <button type="submit">Update Activity</button>
            </div>
        </form>
    )
};

export default EditActivityForm;