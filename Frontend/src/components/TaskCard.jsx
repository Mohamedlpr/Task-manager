import { Link } from "react-router-dom";

function TaskCard({ title, description, priority, status, page }) {
  return (
    <Link className="taskCard" to={`/tasks/${page}`}>
      {priority === "high" ? (
        <span className="taskCardHighPriority">High</span>
      ) : priority === "medium" ? (
        <span className="taskCardMediumPriority">Medium</span>
      ) : priority === "low" ? (
        <span className="taskCardLowPriority">Low</span>
      ) : undefined}
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="statusContainer">
        {status === "pending" ? (
          <span className="taskCardPending">Pending</span>
        ) : status === "in-progress" ? (
          <span className="taskCardInProgress">In Progress</span>
        ) : status === "done" ? (
          <span className="taskCardDone">Done</span>
        ) : undefined}
      </div>
    </Link>
  );
}

export default TaskCard;
