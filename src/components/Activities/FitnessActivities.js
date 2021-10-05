import ActivityList from "./ActivityList";
import FilterActivities from "./FilterActivities";
import { weekOfTheMonth } from "../Utils/getWeekFromDate";
import Card from "../UI/Card";
import "./FitnessActivities.css";
import { useState } from "react";

function FitnessActivities(props) {
  const [week, setWeek] = useState("1");

  const weekFilterHandler = (selectedWeek) => {
    setWeek(selectedWeek);
  };

  const filteredActivities = props.allActivities.filter(
    (activity) => weekOfTheMonth(activity.date) === week
  );

  return (
    <Card className="fitness">
      <FilterActivities selectedWeek={week} onWeekFilter={weekFilterHandler} />

      <ActivityList filteredActivities={filteredActivities} />
    </Card>
  );
}

export default FitnessActivities;
