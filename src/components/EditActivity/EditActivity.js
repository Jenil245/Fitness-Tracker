import EditActivityForm from '../EditActivity/EditActivityForm';
import '../EditActivity/EditActivityForm.css'


function EditActivity (props) {
    return (
        <div>
            <EditActivityForm presentActivityData={props.presentActivityData}/>
            Please Enter New Values
        </div>
    )
}

export default EditActivity;
