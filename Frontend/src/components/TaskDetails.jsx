import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TaskDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [task, setTask] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, [id]);

  const fetchItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to load this item");
      }
      const data = await res.json();
      setTask(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading)
    return (
      <div className="loaderContainer">
        <div className="loader"></div>
      </div>
    );

  if (error)
    return (
      <div className="errorContainer">
        <p className="error">{error}</p>
      </div>
    );

  return (
    <div className="taskDetails">
      <div className="taskDetailsHeader">
        {task.priority === "high" ? (
          <span className="taskCardHighPriority">High</span>
        ) : task.priority === "medium" ? (
          <span className="taskCardMediumPriority">Medium</span>
        ) : task.priority === "low" ? (
          <span className="taskCardLowPriority">Low</span>
        ) : undefined}
        {task.status === "pending" ? (
          <span className="taskCardPending">Pending</span>
        ) : task.status === "in-progress" ? (
          <span className="taskCardInProgress">In Progress</span>
        ) : task.status === "done" ? (
          <span className="taskCardDone">Done</span>
        ) : undefined}
        <div className="taskDetailsButtons">
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <h1>{task.name}</h1>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskDetails;
