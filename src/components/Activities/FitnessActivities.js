import ActivityItem from './ActivityItem';
import FilterActivities from './FilterActivities';
import weekOfTheMonth from '../Utils/getWeekDay'
import Card from '../UI/Card';
import './FitnessActivities.css'
import { useState } from 'react';


function FitnessActivities(props) {

      const [week, setWeek] = useState('1')

      const weekFilterHandler = (selectedWeek) => {
        setWeek(selectedWeek)
      }

      const filteredActivities = props.allActivities.filter(activity => {
        return weekOfTheMonth(activity.date) === week
      })

    return (
          
        <Card className="fitness">

          <FilterActivities selectedWeek={week} onWeekFilter={weekFilterHandler} />

          {props.allActivities.map(activity => 
            <ActivityItem 
            key = {activity.id}
            date = {activity.date}
            activityTitle ={activity.title}
            activityDuration = {activity.duration} />
            )
          }

        </Card>
    )
}

export default FitnessActivities;