import React from 'react';

const Posts = ({ userId, title, body }) => {
    return (
        <div className='post-container'>
            <h3 className='title'>
                {title}
            </h3>
            <p className='post-description'>
                {body}
            </p>
        </div>
    );
};

export default Posts;