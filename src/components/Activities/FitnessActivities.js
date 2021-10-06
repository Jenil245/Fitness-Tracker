import ActivityList from "./ActivityList";
import FilterActivities from "./FilterActivities";
import ActivitiesChart from "./ActivitiesChart";
import Card from "../UI/Card";
import { weekOfTheMonth } from "../Utils/getWeekFromDate";
import { useState } from "react";
import "./FitnessActivities.css";


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

      <ActivitiesChart activities={filteredActivities} />

      <ActivityList filteredActivities={filteredActivities} />
    </Card>
  );
}

export default FitnessActivities;
