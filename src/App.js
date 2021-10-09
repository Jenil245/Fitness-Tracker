import { useState } from 'react';
import FitnessActivities from './components/Activities/FitnessActivities';
import AddActivity from './components/AddActivity/AddActivity';


function App() {

  const activities = [
    {
      id: "e1",
      title: "Yoga",
      duration: 30,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Yoga",
      duration: 38,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e7",
      title: "Weight Lifting",
      duration: 10,
      date: new Date(2020, 7, 3),
    },
    {
      id: "e8",
      title: "Weight Lifting",
      duration: 15,
      date: new Date(2021, 2, 6),
    },
    {
      id: "e3",
      title: "Weight Exercise",
      duration: 60,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Meditation",
      duration: 12,
      date: new Date(2021, 5, 12),
    },
  ];

  const [allActivities, setAllActivities] = useState(activities)

  const addNewActivityHandler = (newActivity) => {
    setAllActivities(prevActivities => [newActivity,...prevActivities])
  }

  const deleteActivityHandler = (activityId) => {
    setAllActivities(prevActivities => prevActivities.filter((activity) => activity.id!==activityId))
  }

  const changeActivityHandler = (activityData) => {

    //   i = allActivities.findIndex(activity => activity.id === activityId)
    //   for( key in allActivities[i]){


    //   }

    // })

    editedActivity = allActivities.filter(activity => activity.id === activityData.id)
    for (key in editedActivity) {
      editedActivity.key = activityData.key
    }

    setAllActivities(prevActivities => [...prevActivities,editedActivity])
  }

  return (
    <div>
        <AddActivity onAddNewActivity={addNewActivityHandler} />
        <FitnessActivities allActivities={allActivities} onDelete={deleteActivityHandler} onEdit={changeActivityHandler} />
    </div>
  );
}

export default App;
