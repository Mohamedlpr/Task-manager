import { useEffect } from "react";
import TaskCard from "../components/TaskCard.jsx";

function Dashboard() {
  useEffect(() => {
    const token = async () => await localStorage.getItem("token");
    const res = fetch("http://localhost:3000/api/tasks", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
  });

  let tasks = [
    {
      id: 1,
      title: "Laundry",
      description: "Do the laundry",
      priority: "high",
    },
    {
      id: 2,
      title: "Groceries",
      description: "Get the Groceries",
      priority: "low",
    },
    {
      id: 3,
      title: "Code review",
      description: "Review your code",
      priority: "medium",
    },
  ];

  const taskCards = tasks.map((task) => (
    <TaskCard
      key={task.id}
      title={task.title}
      description={task.description}
      priority={task.priority}
    />
  ));

  return <div className="taskContainer">{taskCards}</div>;
}

export default Dashboard;
