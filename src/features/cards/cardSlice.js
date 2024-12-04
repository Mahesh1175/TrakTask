import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "R&D for AI Integration",
    date: "14 Jan 2025", 
    priority: "High",
    status: "On Hold",
  },
  {
    id: 2,
    title: "Konom web application",
    date: "25 Jan 2025", 
    priority: "Low",
    status: "To Do",
  },
  {
    id: 3,
    title: "AI Research Project",
    date: "10 Feb 2025", 
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Event booking application",
    date: "01 Dec 2024",
    priority: "Medium",
    status: "Completed",
  },
];


const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    cardAdded(state, action) {
      state.push(action.payload);
    },
    cardUpdated(state, action) {
      const index = state.findIndex((card) => card.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    cardDeleted(state, action) {
      return state.filter((card) => card.id !== action.payload);
    },
    cardsCleared() {
      return []; 
    },
  },
});

export const { cardAdded, cardUpdated, cardDeleted , cardsCleared} = cardSlice.actions;

export default cardSlice.reducer;
