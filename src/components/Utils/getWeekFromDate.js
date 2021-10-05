function weekOfTheMonth(date) {
    const day = date.getDate()
    let week = Math.ceil(day / 7)
    
    return week.toString()
    
    // const ordinal = ['first', 'second', 'third', 'fourth', 'fifth']
    // Check the next day of the week and if it' on the same month, if not, respond with "Last"
    // const nextWeekDay = new Date(date.getTime() + (1000 * 60 * 60 * 24 * 7))
    // if (nextWeekDay.getMonth() !== date.getMonth()) {
    //   week = 5
    // }
    // return `${ordinal[week - 1]} ${weekDays[weekDay]}`
  }

function weekDay(date) {
  const weekDay = date.getDay()
  const weekDays  = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday']

  return `${weekDays[weekDay]}`
}

module.exports = {weekOfTheMonth, weekDay};