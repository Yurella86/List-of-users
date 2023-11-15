import React from 'react';
import { userLogo } from '../index'

const UserItem = () => {
    return (
        <div className="item">
            <div className="wrap-item">
                <div className='logo'>
                    <img src={userLogo} alt="user logo" />
                </div>
                <div className='item-name'>Leanne Graham</div>
                <div className='username'>{`(Bret)`}</div>
                <div className='email'>Sincere@april.biz</div>
                <div className='phone'>1-770-736-8031</div>
            </div>
        </div>
    );
};

export default UserItem;