import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard.jsx";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading)
    return (
      <div className="loaderContainer">
        <div class="loader"></div>
      </div>
    );

  if (error) return <p>error</p>;

  const taskCards = tasks.map((task) => (
    <TaskCard
      key={task._id}
      title={task.name}
      description={task.description}
      priority={task.priority}
    />
  ));

  return <div className="taskContainer">{taskCards}</div>;
}

export default Dashboard;
