import FitnessItem from "./FitnessItem";
import Card from "./Card";
import './FitnessActivities.css'

function FitnessActivities() {
    const activities = [
        {
          id: "e1",
          title: "Yoga",
          minutes: 30,
          date: new Date(2020, 7, 14),
        },
        {
          id: "e2",
          title: "Yoga",
          minutes: 38,
          date: new Date(2021, 2, 12),
        },
        {
          id: "e3",
          title: "Weight Exercise",
          minutes: 60,
          date: new Date(2021, 2, 28),
        },
        {
          id: "e4",
          title: "Meditation",
          minutes: 12,
          date: new Date(2021, 5, 12),
        },
      ];


    return (
        <Card className="fitness">
          {activities.map(activity => 
            <FitnessItem 
            date = {activity.date}
            activityTitle ={activity.title}
            activityMinutes = {activity.minutes} />
            )
          }
        </Card>
    )
}

export default FitnessActivities;