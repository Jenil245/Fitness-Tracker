import "./FitnessItem.css";
import FitnessDate from "./FitnessDate";
import Card from './Card';

function FitnessItem(props) {
  return (
    <Card className="fitness-item">
      <FitnessDate date={props.date} />
      <div className="fitness-item__description">
        <h2> {props.activityTitle} </h2>
        <div className="fitness-item__minutes">
          {props.activityMinutes} Minutes
        </div>
      </div>
    </Card>
  );
}

export default FitnessItem;
