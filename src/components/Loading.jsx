import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='loading-users'>
            <span>loading <ThreeDots
                height="10"
                width="50"
                radius="9"
                color="#0051ad"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ display: 'inline' }}
                wrapperClassName="loader"
                visible={true}
            /></span>
        </div>
    );
};

export default Loading;