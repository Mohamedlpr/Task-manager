import { useState } from "react";
import Modal from "./Modal";

function CreateTask({ onCreatingTask }) {
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
    } else {
      setError(null);
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
      setTaskName("");
      setDescription("");
      setPriority("");
      setError(null);
      setShowModal(false);
      onCreatingTask();
    } catch (err) {
      setError(err.message);
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
        <Modal onClose={() => setShowModal(false)}>
          <div
            className="modalOverlay"
            onClick={() => {
              setShowModal(false);
              setError(null);
              setTaskName("");
              setDescription("");
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
              <div>
                <p>Priority</p>
                <div className="priority">
                  <input
                    type="radio"
                    name="priority"
                    id="lowPriority"
                    value="low"
                    checked={priority === "low"}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                  <label htmlFor="lowPriority">Low</label>
                  <input
                    type="radio"
                    name="priority"
                    id="mediumPriority"
                    value="medium"
                    checked={priority === "medium"}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                  <label htmlFor="mediumPriority">Medium</label>
                  <input
                    type="radio"
                    name="priority"
                    id="highPriority"
                    value="high"
                    checked={priority === "high"}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                  <label htmlFor="highPriority">High</label>
                  <div className="glider"></div>
                </div>
              </div>
              <button type="submit">Create</button>
              {error && <span className="error">{error}</span>}
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default CreateTask;
