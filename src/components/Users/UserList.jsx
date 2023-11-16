import React, { useContext } from 'react';
import UsersContext from '../../Store/UsersApi/UsersContext';
import { User } from '../index'
import '../../style/extend.scss'
import { ThreeDots } from 'react-loader-spinner';

const UserList = () => {

    const usersCtx = useContext(UsersContext)
    console.log(usersCtx);

    if (!usersCtx) {
        return (
            <div className='loading-users'><span>loading <ThreeDots
                height="10"
                width="50"
                radius="9"
                color="#0051ad"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ display: 'inline' }}
                wrapperClassName="loader"
                visible={true}
            /></span></div>
        )
    }

    const itemsOfUsers = usersCtx.map((user, index) =>
        <User
            key={index + 1}
            id={user.id}
            name={`${user.name}`}
            userName={`${user.userName}`}
            email={`${user.email}`}
            phone={`${user.phone}`} />)

    return (
        <div className='flex-container'>
            {itemsOfUsers}
        </div>
    );
};

export default UserList;