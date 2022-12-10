import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
    done: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].done = !state.tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      for (const task in tasks) 
      {
        tasks[task].done = true;
      }
    },
    removeTask: (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    }
  },
});

export const { addTask, toggleHideDone, toggleTaskDone, setAllDone, removeTask } =
  tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
