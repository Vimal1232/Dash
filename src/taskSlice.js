import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  tasks: [],
  filter: "All",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: intialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        ...action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },

    editTask: (state, action) => {
      const { id, title, disc, date } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.disc = disc;
        task.date = date;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleComplete, setFilter } =
  taskSlice.actions;
export default taskSlice.reducer;
