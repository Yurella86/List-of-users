import React from 'react';

const SearchBar = ({ callbackSort, callbackSearch }) => {

    function handleSortChange(event) {
        const newSortOrder = event.target.value;
        callbackSort(newSortOrder)
    }

    function handleSearch(event) {
        const newSearch = event.target.value;
        callbackSearch(newSearch)
    }

    return (
        <div className='search-container'>
            <div className='flex-hr'>
                <div className='title'>Search by:</div>
                <div className='name'>
                    <label htmlFor="username">Name</label>
                    <input id='username' type="text" placeholder='name' onChange={handleSearch} />
                </div>
                <div className='select-filter'>
                    <label htmlFor="sort">Sort:</label>
                    <select id='sort' onChange={handleSortChange}>
                        <option value="asc" >A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default SearchBar;