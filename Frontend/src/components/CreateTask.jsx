import { useState } from "react";

function CreateTask() {
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (taskName.length < 3) {
      setError("Task name must be at least 3 characters");
      return;
    } else if (description.length < 10) {
      setError("Task description must be at least 10 characters");
      return;
    } else if (priority.trim() === "") {
      setError("Task priority is required");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const inputs = {
        name: taskName,
        description: description,
        priority: priority,
      };
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setTaskName("");
      setDescription("");
      setPriority("");
    }
  };

  return (
    <>
      <div className="createContainer">
        <button onClick={() => setShowModal(true)}>
          <span class="plus-icon">+</span> New Task
        </button>
      </div>
      {showModal && (
        <div
          className="modalOverlay"
          onClick={() => {
            setShowModal(false);
            setError(null);
            setPriority("");
          }}
        >
          <form
            className="modalContent"
            onClick={(e) => e.stopPropagation()}
            onSubmit={submitHandler}
          >
            <h1>Create Task</h1>
            <input
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
              type="text"
              placeholder="Task Name"
            />
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              type="text"
              placeholder="Task description"
            />
            <div className="priorityContainer">
              <p>Priority:</p>
              <div
                class="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <input
                  type="radio"
                  name="priority"
                  id="lowPriority"
                  value="low"
                />
                <label for="lowPriority">Low</label>

                <input
                  type="radio"
                  name="priority"
                  id="mediumPriority"
                  value="medium"
                />
                <label for="mediumPriority">Medium</label>

                <input
                  type="radio"
                  name="priority"
                  id="highPriority"
                  value="high"
                />
                <label for="highPriority">High</label>

                <div class="glider"></div>
              </div>
            </div>

            <button type="submit">Create</button>
            {error && <span className="error">{error}</span>}
          </form>
        </div>
      )}
    </>
  );
}

export default CreateTask;
