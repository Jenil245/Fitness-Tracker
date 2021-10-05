import "./FilterActivities.css";

function FilterActivities(props) {
  const weekOptionChangeHandler = (event) => {
      props.onWeekFilter(event.target.value)
  };

  return (
    <div className="fitness-filter">
      <div className="fitness-filter__control">
        <label>Filter by Week</label>
        <select value={props.selectedWeek} onChange={weekOptionChangeHandler}>
          <option value="1">Week 1</option>
          <option value="2">Week 2</option>
          <option value="3">Week 3</option>
          <option value="4">Week 4</option>
          <option value="5">Week 5</option>
        </select>
      </div>
    </div>
  );
}

export default FilterActivities;
