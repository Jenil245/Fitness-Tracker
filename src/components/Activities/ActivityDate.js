import './ActivityDate.css'

function ActivityDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="activity-date">
      <div className="activity-date__month">{month}</div>
      <div className="activity-date__year">{year}</div>
      <div className="activity-date__day">{day}</div>
    </div>
  );
}

export default ActivityDate;
