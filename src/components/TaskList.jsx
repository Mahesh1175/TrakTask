import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ cards, onEditTask, onDeleteTask, onComplete, onClearTask }) => {
  return (
    <div className="cards bg--[#1E201E] flex justify-center">
      <div className="container mx-2 px-2  ">
        <div className="flex justify-between bg-[#ECDFCC] text-[#1E201E] font-semibold text-md p-2 rounded-lg mx-[auto] max-w-[1200px]">
          <div className="flex ">
            <img src="/completed.png" alt="task" className="h-5  " />

            <h2 className="pl-2">{`My Tasks (${cards.length})`}</h2>
          </div>
          <button
            className="px-2 text-red-400 border border-red-300 rounded-lg hover:bg-red-500 hover:text-[#ECDFCC] transition-all"
            onClick={onClearTask}
          >
            Clear All
          </button>
        </div>
        {cards && (
          <div className="bg-[#1E201E] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 py-6 my-3 border-2 border-[#697565] rounded-lg mx-[auto] max-w-[1200px]  ">
            {cards.map((card) => (
              <TaskItem
                key={card.id}
                {...card}
                onEdit={() => onEditTask(card.id)}
                onDelete={onDeleteTask}
                onCompleteTask={onComplete}
              />
            ))}
          </div>
        )}
      </div>
     </div>
  );
};

export default TaskList;
