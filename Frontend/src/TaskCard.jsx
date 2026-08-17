function TaskCard(props) {
  return (
    <div className="tasks">
      <h2>Title: {props.title}</h2>
      <p>Priority: {props.priority}</p>
    </div>
  );
}

export default TaskCard;
