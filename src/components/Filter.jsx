import React, { useState, useEffect } from 'react';

const Filter = ({ filterTask }) => {
   
    const filterRow = ['Status', 'Priority']; 
    const priorityValues = ['Low', 'Medium', 'High'];
    const statusValues = ['In Progress', 'To Do', 'On Hold', 'Completed'];

   
    const [activeFilter, setActiveFilter] = useState('');
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (e, type) => {
        const { value } = e.target;
        setActiveFilter(type);
        setFilterValue(value);
    };

 
    const resetFilter = () => {
        setActiveFilter('');
        setFilterValue('');
        filterTask({ status: '', priority: '', overdue: false }); 
    };

    // Apply the filter whenever the filter value or active filter changes
    useEffect(() => {
        if (filterValue !== '') {
            filterTask({ [activeFilter.toLowerCase()]: filterValue });
        }
    }, [filterValue, activeFilter]);

    return (
        <div className="filter-row flex gap-4  sticky ml-3 m-2 mb-3 p-1 overflow-x-auto whitespace-nowrap bg-[#1E201E] rounded-xl shadow-lg">
            {/* Reset filter*/}
            <button 
                onClick={resetFilter} 
                className="reset-btn bg-[#ECDFCC] text-[#1E201E] px-4 py-2 rounded-md font-semibold hover:bg-[#697565] transition-colors"
            >
                All Task
            </button>

            {/* filter dropdowns for Status & Priority */}
            {filterRow.map((filter) => (
                <select
                    key={filter}
                    value={filter === activeFilter ? filterValue : ''}
                    onChange={(e) => handleFilterChange(e, filter)}
                    className="bg-[#3C3D37] text-[#ECDFCC] rounded-md px-3 py-2 outline-none shadow-md focus:ring-2 focus:ring-[#697565] focus:outline-none"
                >
                    <option value="">{filter}</option>
                    {filter === 'Status' &&
                        statusValues.map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    {filter === 'Priority' &&
                        priorityValues.map((priorityValue) => (
                            <option key={priorityValue} value={priorityValue}>
                                {priorityValue}
                            </option>
                        ))}
                </select>
            ))}

            {/* Button to filter overdue tasks */}
            <button
                onClick={() => filterTask({ overdue: true })}
                className="reset-btn bg-[#ECDFCC] text-[#1E201E] px-4 py-2 rounded-md font-semibold hover:bg-[#697565] transition-colors"
            >
                Overdue
            </button>
        </div>
    );
};

export default Filter;
