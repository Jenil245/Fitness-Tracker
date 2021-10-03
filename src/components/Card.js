import "./Card.css";

function Card(props) {
    console.log(props.className)
    console.log(props.children)
    const classes = 'card ' + props.className;

    return (
        <div className={classes}>{props.children}</div>
    )

}

export default Card;