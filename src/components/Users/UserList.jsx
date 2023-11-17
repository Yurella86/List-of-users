import React, { useContext } from 'react';
import UsersContext from '../../Store/UsersApi/UsersContext';
import { User } from '../index'
import '../../style/extend.scss'
import { ThreeDots } from 'react-loader-spinner';

const UserList = ({ sortUsers, searchUsers }) => {

    const usersCtx = useContext(UsersContext)

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

    const sortedUsers = usersCtx.sort((a, b) => {
        if (sortUsers === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    const itemsOfUsers = sortedUsers.map((user, index) =>
        <User
            key={index + 1}
            id={user.id}
            name={`${user.name}`}
            userName={`${user.userName}`}
            email={`${user.email}`}
            phone={`${user.phone}`} />)


    if (searchUsers) {
        const filteredData = itemsOfUsers.filter(item =>
            item.props.name.toLowerCase().includes(searchUsers.toLowerCase()) ||
            item.props.userName.toLowerCase().includes(searchUsers.toLowerCase())
        );

        return (
            <div className='flex-hr'>
                {filteredData}
            </div>
        )
    }

    return (
        <div className='flex-hr'>
            {itemsOfUsers}
        </div>
    );
};

export default UserList;