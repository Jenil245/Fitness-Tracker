import ChartBar from "./ChartBar"
import './Chart.css'

function Chart(props) {

    const dataPoints = props.data.map(item => item.value)
    const maxDataPoint = Math.max(...dataPoints)

    return (
        <div className='chart'>
            {props.data.map(item => (
                <ChartBar 
                key = {item.label}
                value = {item.value}
                maxValue = {maxDataPoint}
                label = {item.label}
                />
            ))}
        </div>
    )
}

export default Chart