import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./taskSlice";

const FilterSelector = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.tasks);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="mb-4">
      <select
        value={filter}
        onChange={handleFilterChange}
        className="bg-green-500 text-white rounded p-2"
      >
        <option value="all">All Tasks</option>
        <option value="completed">Completed Tasks</option>
        <option value="pending">Pending Tasks</option>
        <option value="overdue">Overdue Tasks</option>
      </select>
    </div>
  );
};

export default FilterSelector;
