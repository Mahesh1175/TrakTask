import React, { useState } from "react";
import Footer from "./components/Footer.jsx";
import "./components/style.css";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Filter from "./components/Filter.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { cardAdded, cardUpdated, cardDeleted, cardsCleared } from "./features/cards/cardSlice.js";
import Chart from "./components/Chart.jsx";
import DateComponent from "./components/DateCompoent.jsx";

function App() {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ status: '', priority: '', overdue: false }); // Updated filters with 'overdue'

  const editTask = (id) => {
    setEditingCard(cards.find((card) => card.id === id));
    setIsOverlayVisible(true);
    console.log(`Editing the task ${id}`);
  };

  const handleComplete = (id) => {

    const taskToUpdate = cards.find((card) => card.id === id);
    if (taskToUpdate) {
      dispatch(
        cardUpdated({
          ...taskToUpdate,
          status: "Completed", // Set status to 'Completed'
        })
      );
    }
  };

  const addOrEditTask = (newTask) => {
    if (editingCard) {
      dispatch(cardUpdated(newTask)); // Update the card if editing
    } else {
      dispatch(cardAdded(newTask)); // Add a new card if not editing
    }
    setIsOverlayVisible(false);
    setEditingCard(null);
  };

  const deleteTask = (id) => {
    dispatch(cardDeleted(id));
    console.log(`Deleted the task ${id}`);
  };

  const deleteAllTask = () => {
    dispatch(cardsCleared());
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query);

  };

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
    if (isOverlayVisible) setEditingCard(null);
  };

  const filterTask = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
      overdue: newFilters.overdue || false,
    }));
  };

  // Apply search query and filters
  const filteredCards = cards.filter((card) => {
    // Check overdue condition
    const isOverdue = filters.overdue
      ? new Date(card.date) < new Date() && card.status !== "Done"
      : true;

    return (
      (!filters.status || card.status === filters.status) &&
      (!filters.priority || card.priority === filters.priority) &&
      (!searchQuery || card.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
      isOverdue // Apply overdue condition
    );
  });


  return (
    <>

      <div className="flex justify-between bg-[#1E201E] text-[#ECDFCC] font-semibold pl-2 p-8 px-12 mx-2 rounded-lg my-1">
        <h2 className="pl-2 font-outfit text-4xl text-[#ECDFCC]">
          Track It, Crush It!
        </h2>
        <DateComponent />
      </div>

      <Header toggleOverlay={toggleOverlay} />

      {isOverlayVisible && (
        <TaskForm onSubmit={addOrEditTask} onClose={toggleOverlay} task={editingCard} />
      )}

      <SearchBar searchTask={handleSearchChange} />
      <Chart cards={filteredCards} />
      <Filter filterTask={filterTask} />

      <TaskList
        cards={filteredCards}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        onComplete={handleComplete}
        onClearTask={deleteAllTask}
      />

      <Footer />

    </>
  );
}

export default App;
