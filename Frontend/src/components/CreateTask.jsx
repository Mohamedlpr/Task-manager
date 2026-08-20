import { useState } from "react";

function CreateTask() {
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
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
        body: JSON.stringify(inputs)
      });
      if(!res.ok){
        throw new Error(JSON.parse(res.message))
      }
    } catch (err) {
      setError(err.message);
    }finally{

    }
  };

  if(error){
    console.log(error)
  }

  return (
    <>
      <div className="createContainer">
        <button onClick={() => setShowModal(true)}>
          <span class="plus-icon">+</span> New Task
        </button>
      </div>
      {showModal && (
        <div className="modalOverlay" onClick={() => setShowModal(false)}>
          <form className="modalContent" onClick={(e) => e.stopPropagation()} onSubmit={submitHandler}>
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
            <select
              name="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">-- Select Task priority --</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <button type="submit">Create</button>
          </form>
        </div>
      )}
    </>
  );
}

export default CreateTask;
