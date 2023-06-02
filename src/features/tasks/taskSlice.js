import { createSlice } from "@reduxjs/toolkit";

const inicialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  inicialState,
  reducers: {
    addTask: (state, action) => {
        state.push(action.payload);
    },
    
    editTasks: (state, action) => { 
      const {id, title, description} = action.payload
      const foundTtask = state.find(task => task.id === id)
      if (foundTtask) {
        foundTtask.title = title
        foundTtask.description = description
      }
    },
    
    deleteTask: (state, action) => {
        const tasksFound = state.Find(tasks => tasks.id === action.payload);
        if (tasksFound) {
            state.splice(state.indexOf(tasksFound), 1);
        }
  },
}})

export const {addTask, deleteTask, editTasks} = taskSlice.actions;

export default taskSlice.reducer;

