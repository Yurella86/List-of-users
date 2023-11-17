import React, { useState } from 'react';

const SearchBar = ({ sortUsers, searchUsers, callbackSort, callbackSearch }) => {
    const [sort, setSort] = useState(sortUsers)
    const [inputValue, setInputValue] = useState(searchUsers)

    function handleSortChange(event) {
        const newSortOrder = event.target.value;
        setSort(newSortOrder)
        callbackSort(newSortOrder)
    }

    function handleSearch(event) {
        const newSearch = event.target.value;
        setInputValue(newSearch)
        callbackSearch(newSearch)
    }

    function handleClear() {
        setSort('asc')
        setInputValue('')
        callbackSort('asc')
        callbackSearch('')
    }

    return (
        <div className='search-container'>
            <div className='flex-hr'>
                <div className='title'>Search by:</div>
                <div className='name'>
                    <label htmlFor="username">Name</label>
                    <input id='username' type="text" placeholder='name' value={inputValue} onChange={handleSearch} />
                </div>
                <div className='select-filter'>
                    <label htmlFor="sort">Sort:</label>
                    <select id='sort' value={sort} onChange={handleSortChange}>
                        <option value="asc" >A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                </div>

                <button onClick={handleClear}>Clear All</button>

            </div>
        </div>
    );
};

export default SearchBar;