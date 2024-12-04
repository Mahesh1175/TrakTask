import React, { useState } from "react";

const priorityClasses = {
  Low: "bg-green-100 text-green-500",
  Medium: "bg-orange-100 text-orange-500",
  High: " bg-red-50 text-red-500",
};

const statusClasses = {
  "To Do": "bg-blue-100 text-blue-500",
  "In Progress": "bg-yellow-100 text-yellow-600",
  "On Hold": "bg-gray-100 text-gray-600",
  "Completed": "bg-green-100 text-green-600",
};


const TaskItem = ({ id, title, date, priority, status, onEdit, onDelete, onCompleteTask }) => {

  const [isClicked, setIsClicked] = useState(false);
  const cardClass = priorityClasses[priority] || "bg-gray-100 text-gray-500";
  const statusClass = statusClasses[status] || "bg-gray-100 text-gray-600";


  const checkCompleted = () => {
    if (isClicked || status === "Completed") {

      alert("Can't edit Task it already completed !")
    }
    else {
      onEdit(id);
    }
  }
  const handleClick = () => {
    setIsClicked(true);
    onCompleteTask(id);


  };



  return (
    <div className="relative bg-[#ECDFCC] p-4 border border-gray-300 rounded-lg shadow-sm text-center duration-300 ease-in-out hover:shadow-2xl  mx-auto w-full max-w-[320px]"
    >
      <div className="task-header mb-1 mr-10 p-2 w-full text-left">
        <h3 className="w-[90%] text-md text-[#1E201E] font-semibold  truncate duration-300 transition-all hover:overflow-visible hover:whitespace-normal hover:break-words">
          {title}
        </h3>
        <div className="absolute top-0 right-0 flex flex-col gap-1">
          <button onClick={() => onDelete(id)} className="px-3 py-2 rounded-full bg-[#ECDFCC] text-gray-700 hover:bg-red-200">
            <i className="fas fa-trash-alt"></i>
          </button>
          <button onClick={checkCompleted} className="px-3 py-2 rounded-full bg-[#ECDFCC] text-gray-700 hover:bg-orange-200">
            <i className="fas fa-pen"></i>
          </button>
        </div>
      </div>
      <div className="task-info flex justify-start gap-1 items-center my-4">
        <button className={`px-2 py-0 rounded-full border ${cardClass} text-sm font-semibold `}>
          {priority}
        </button>
        <button className={`px-2 py-0 rounded-full border ${statusClass} text-sm font-semibold `}>
          {status}
        </button>
      </div>
      <div className="relative bottom-0 task-footer flex justify-between align-bottom items-center text-sm text-gray-600">
        <button
          onClick={handleClick}
          className={`px-2 py-1 rounded-full border border-green-500 
     ${status === "Completed" || isClicked ? 'bg-green-500 text-white' : 'bg-[#ECDFCC] hover:bg-green-500 hover:text-gray-100'} 
    active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500`}
        >
          <i className="fas fa-check"></i>
        </button>


        <div className="flex items-center gap-1 text-sm ">
          <i className="fas fa-calendar-alt "></i>
          <span >{date}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
