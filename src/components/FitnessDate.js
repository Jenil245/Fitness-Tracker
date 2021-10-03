import './FitnessDate.css'

function FitnessDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="fitness-date">
      <div className="fitness-date__month">{month}</div>
      <div className="fitness-date__year">{year}</div>
      <div className="fitness-date__day">{day}</div>
    </div>
  );
}

export default FitnessDate;
