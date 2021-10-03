import FitnessItem from "./FitnessItem";
import Card from "./Card";
import './FitnessActivities.css'

function FitnessActivities() {
    const activities = [
        {
          id: "e1",
          title: "Yoga",
          minutes: 94.12,
          date: new Date(2020, 7, 14),
        },
        {
          id: "e2",
          title: "Yoga",
          minutes: 799.49,
          date: new Date(2021, 2, 12),
        },
        {
          id: "e3",
          title: "Weight Exercise",
          minutes: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: "e4",
          title: "Meditation",
          minutes: 450,
          date: new Date(2021, 5, 12),
        },
      ];


    return (
        <Card className="fitness">
        <FitnessItem
          date={activities[0].date}
          activityTitle={activities[0].title}
          activityMinutes={activities[0].minutes}
        />
        </Card>
    )
}

export default FitnessActivities;