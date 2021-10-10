import EditActivityForm from './EditActivityForm';
import './EditActivity.css'


function EditActivity (props) {
    return (
        <div className="edit-activity">
            <EditActivityForm presentActivityData={props.presentActivityData}/>
            Please Enter New Values
        </div>
    )
}

export default EditActivity;
