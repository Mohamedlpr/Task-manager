import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard.jsx";
import CreateTask from "../components/CreateTask.jsx";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to load tasks");
      const data = await res.json();
      setTasks(data);
      console.log(tasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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

  const taskCards = tasks.map((task) => (
    <TaskCard
      key={task._id}
      page={task._id}
      title={task.name}
      description={task.description}
      priority={task.priority}
      status={task.status}
    />
  ));

  return (
    <>
      <CreateTask onCreatingTask={fetchTasks} />
      <div className="taskContainer">
        {tasks.length === 0 ? <p>No Tasks Yet</p> : taskCards}
      </div>
    </>
  );
}

export default Dashboard;
