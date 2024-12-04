import React from "react";
import TaskForm from "./TaskForm";
import Showing from "./Showing";
import FilterSelector from "./filter";

const App = () => {
  return (
    <div className="grid grid-cols-6 max-md:grid-cols-3 grid-rows-6 gap-6 bg-gray-100 p-10 max-md:p-5 rounded-lg shadow-lg">
      <div className="col-span-3 ">
        <TaskForm />
      </div>
      <div className="col-span-3 row-span-6 ">
        <Showing />
      </div>
      <div className=" ">
        <FilterSelector />
      </div>
    </div>
  );
};

export default App;
