import React from 'react';

const Header = ({ toggleOverlay }) => {
  return (
    <div className="flex justify-between p-3 z-20 fixed top-0 w-full text-center border-b-2 border-[#697565]"
      style={{ backgroundColor: '#1E201E', color: '#ECDFCC' }}>
      {/* Title */}
      <h1 className="text-left pl-2 text-2xl font-bold p-1 font-outfit">
        TrakTask
      </h1>

      {/* Add Task Button */}
      <button
        onClick={toggleOverlay} 
        className="search-btn text-md py-1 px-3 rounded-lg 
                  hover:bg-[#3C3D37] transform hover:scale-105 
                  hover:text-white transition-transform duration-300
                  bg-[#697565] text-[#ECDFCC] "
      >
        <i className="fas fa-plus"></i> Add Task
      </button>
    </div>
  );
}

export default Header;
