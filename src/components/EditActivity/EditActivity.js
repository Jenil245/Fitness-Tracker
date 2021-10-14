import { Fragment } from 'react';
import EditActivityForm from './EditActivityForm';
import './EditActivity.css'


function EditActivity (props) {
    return (
        <Fragment>
        <div className="edit-activity">
           <div className="header"> Please Edit the values & hit the Update Activity button</div>
            <EditActivityForm presentActivityData={props.presentActivityData} onEditActivity={props.onEditActivity} onChangeStatus={props.onChangeStatus} />
        </div>
        </Fragment>
    )
}

export default EditActivity;
