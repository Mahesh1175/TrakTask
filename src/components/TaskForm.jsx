import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, onClose, task }) => {
  const [title, setTitle] = useState('');
  const [rowDate, setdate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('To Do');

  useEffect(() => {
    if (task) {
      setTitle(task.title || '');
      setdate(task.rowDate || getDefaultDate());
      setPriority(task.priority || 'Low');
      setStatus(task.status || 'To Do');
    } else {
      setTitle('');
      setdate(getDefaultDate());
      setPriority('Low');
      setStatus('To Do');
    }
  }, [task]);

  const getDefaultDate = () => {
    const today = new Date().toISOString().split('T')[0]; // Format: yyyy-mm-dd
    return today;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date(rowDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    });

    const newTask = {
      id: task?.id || new Date().getTime().toString(),
      title,
      date,
      priority,
      status,
    };
    onSubmit(newTask);
  };

  return (
    <div className="overlay fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-20">
      <div className="bg-[#1E201E] p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute px-2 top-0 right-0 rounded-lg text-3xl font-bold text-red-400 hover:text-gray-700 hover:bg-red-300"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit} className="task-form mr-1 text-[#ECDFCC]">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-[#697565] rounded-md mb-4 bg-[#3C3D37] text-[#ECDFCC] outline-none focus:ring-2 focus:ring-[#ECDFCC]"
          />
          <input
            type="date"
            value={rowDate}
            onChange={(e) => setdate(e.target.value)}
            className="w-full p-2 border border-[#697565] rounded-md mb-4 bg-[#3C3D37] text-[#ECDFCC] outline-none focus:ring-2 focus:ring-[#ECDFCC]"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full p-2 border border-[#697565] rounded-md mb-4 bg-[#3C3D37] text-[#ECDFCC] outline-none focus:ring-2 focus:ring-[#ECDFCC]"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-[#697565] rounded-md mb-4 bg-[#3C3D37] text-[#ECDFCC] outline-none focus:ring-2 focus:ring-[#ECDFCC]"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="On Hold">On Hold</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            type="submit"
            className="w-full bg-[#ECDFCC] text-[#1E201E] p-2 rounded-md hover:bg-[#D0C8B6] outline-none focus:ring-2 focus:ring-[#D0C8B6]"
          >
            Save Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
