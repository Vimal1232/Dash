import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask, deleteTask, toggleComplete } from "./taskSlice";
const Showing = () => {
  const [modal, setModal] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [title, setTitle] = useState("");
  const [disc, setDisc] = useState("");
  const [date, setDate] = useState("");
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handlemodal = () => {
    setModal(!modal);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTaskId) {
      dispatch(editTask({ id: editingTaskId, title, disc, date }));
    }
    setModal(false);
    setTitle("");
    setDisc("");
    setDate("");
  };

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setTitle(task.title);
    setDisc(task.disc);
    setDate(task.date);
    setModal(true);
  };
  const handleDelete = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(taskId));
    }
  };
  const handleToggleComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    if (filter === "overdue")
      return new Date(task.date) < new Date() && !task.completed;
    return true;
  });
  return (
    <div className="bg-gray-900 rounded-lg p-5 w-full h-full overflow-y-auto">
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-green-500"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {task.title}
              </h3>
              <p className="text-sm text-gray-500">{task.date}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleToggleComplete(task.id)}
                className={`text-sm px-3 py-1 rounded ${
                  task.completed
                    ? "bg-gray-400 text-white"
                    : "bg-green-500 text-white"
                } hover:bg-green-600 transition`}
              >
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button
                onClick={() => handleEdit(task)}
                className="text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
          <p className="text-gray-600 mt-2">{task.disc}</p>
        </div>
      ))}
      {modal && (
        <div className="bg-white rounded-xl shadow-lg fixed inset-0 m-auto w-96 h-auto p-5 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            {"Edit Task"}
          </h2>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <input
              className="p-3 rounded border border-gray-300"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              className="p-3 rounded border border-gray-300"
              placeholder="Description"
              value={disc}
              onChange={(e) => setDisc(e.target.value)}
            />
            <input
              className="p-3 rounded border border-gray-300"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
            >
              {"Save Changes"}
            </button>
          </form>
          <button className="text-red-500 mt-3" onClick={handlemodal}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Showing;
