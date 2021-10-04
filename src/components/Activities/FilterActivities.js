import "./FilterActivities.css";

function FilterActivities(props) {
  const weekOptionChangeHandler = (event) => {
      props.onWeekFilter(event.target.value)
  };

  return (
    <div className="fitness-filter">
      <div className="fitness-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedWeek} onChange={weekOptionChangeHandler}>
          <option value="first">Week 1</option>
          <option value="second">Week 2</option>
          <option value="third">Week 3</option>
          <option value="fourth">Week 4</option>
        </select>
      </div>
    </div>
  );
}

export default FilterActivities;
