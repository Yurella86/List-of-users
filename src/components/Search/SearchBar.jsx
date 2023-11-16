import React from 'react';

const SearchBar = () => {
    return (
        <div className='search-container'>
            <div className='flex-container'>
                <div className='title'>Search by:</div>
                <div className='name'>
                    <label htmlFor="username">Name</label>
                    <input id='username' type="text" placeholder='name' />
                </div>
                <div className='select-filter'>
                    <label htmlFor="">Sort:</label>
                    <select name="select">
                        <option value="value1" selected>asc</option>
                        <option value="value2">desc</option>
                    </select>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default SearchBar;