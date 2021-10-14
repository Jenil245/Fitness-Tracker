import EditActivityForm from './EditActivityForm';
import './EditActivity.css'


function EditActivity (props) {
    return (
        <div className="edit-activity">
           <div className="header"> Please Enter New Values</div>
            <EditActivityForm presentActivityData={props.presentActivityData} onEditActivity={props.onEditActivity} onChangeStatus={props.onChangeStatus} />
        </div>
    )
}

export default EditActivity;
