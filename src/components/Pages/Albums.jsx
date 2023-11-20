import React from 'react';

const Albums = ({ title }) => {
    return (
        <div className='albums-container'>
            <h3 className='title'>
                {title}
            </h3>
        </div>
    );
};

export default Albums;