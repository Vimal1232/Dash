import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [disc, setDisc] = useState("");
  const [date, setDate] = useState("");
  const [modal, setmodal] = useState("");

  const dispatch = useDispatch();

  const handlemodal = () => {
    setmodal(!modal);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addTask({ title, disc, date }));
    setTitle("");
    setDisc("");
    setDate("");
    setmodal(!modal);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-xl font-bold text-green-600">Task Master</h1>
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition-all"
          onClick={handlemodal}
        >
          Add Task
        </button>
      </div>

      {modal && (
        <div className="bg-white rounded-lg shadow-lg text-gray-800 fixed w-[500px] h-[500px] flex items-center justify-center p-8 left-[50%] bottom-[50%] transform -translate-x-1/2 translate-y-1/2 max-md:w-[250px]">
          <form
            className="flex flex-col items-center gap-6 w-full"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold text-green-600">
              Add a New Task
            </h2>
            <input
              className="bg-gray-100 text-gray-800 rounded-md p-3 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              className="bg-gray-100 text-gray-800 rounded-md p-3 border border-gray-300 w-full h-24 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Task Description"
              value={disc}
              onChange={(e) => setDisc(e.target.value)}
            />
            <input
              className="bg-gray-100 text-gray-800 rounded-md p-3 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md p-3 w-full hover:bg-green-600 transition-all"
            >
              Add Task
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
