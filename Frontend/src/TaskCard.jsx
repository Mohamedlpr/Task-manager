function TaskCard({ title, description, priority }) {
  return (
    <div className="taskCard">
      {priority === "high" ? (
        <span className="taskCardHighPriority">High</span>
      ) : priority === "medium" ? (
        <span className="taskCardMediumPriority">Medium</span>
      ) : priority === "low" ? (
        <span className="taskCardLowPriority">Low</span>
      ) : undefined}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default TaskCard;
