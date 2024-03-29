import { useState } from 'react'
import './ActivityForm.css'

function ActivityForm(props) {
    const [titleChange, setTitleChange] = useState("")
    const [durationChange, setDurationChange] = useState("")
    const [dateChange, setDateChange] = useState("")
    
    const formSubmitHandler = (event) => {
        event.preventDefault()

        const activityItem = {
            title: titleChange,
            duration: durationChange,
            date: new Date(dateChange)
        }

        props.onSaveNewActivity(activityItem)

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
            <div className="new-activity__controls">
                <div className="new-activity__control">
                    <label>Title</label>
                    <input type="text" value={titleChange} onChange={titleChangeHandler} />
                </div>
                <div className="new-activity__control">
                    <label>Duration</label>
                    <input type="number" value={durationChange} min='1' max='120' onChange={durationChangeHandler} />
                </div>
                <div className="new-activity__control">
                    <label>Date</label>
                    <input type="date" value={dateChange} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-activity__actions">
                <button onClick={formStatusHandler}>Cancel</button>
                <button type="submit">Add Activity</button>
            </div>
        </form>
    )
};

export default ActivityForm;