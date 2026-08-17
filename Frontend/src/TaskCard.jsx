function TaskCard({ title, description, priority }) {
  return (
    <div className="tasks">
      <h2>{title}</h2>
      <p>{description}</p>
      {priority === "high" ? <span style={{color: "red"}}>{priority}</span> : <span>{priority}</span>}
    </div>
  );
}

export default TaskCard;
