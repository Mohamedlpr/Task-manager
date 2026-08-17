import TaskCard from "./TaskCard.jsx";

function App() {
  const tasks = [
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
      title={task.title}
      description={task.description}
      priority={task.priority}
    />
  ));
  return (
    <>
      {taskCards}
    </>
  );
}

export default App;
