import Chart from "../Chart/Chart"

function ActivitiesChart(props) {

    const chartData = [
        {label:'Sunday', value:0},
        {label:'Monday', value:0},
        {label:'Tuesday', value:0},
        {label:'Wednesday', value:0},
        {label:'Thursday', value:0},
        {label:'Friday', value:0},
        {label:'Saturday', value:0}
    ]

    for(const activity of props.activities){
        const activityDay = activity.date.getDay()
        chartData[activityDay].value += activity.duration
    }

    return <Chart data={chartData}/>
}

export default ActivitiesChart