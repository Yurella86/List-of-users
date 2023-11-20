import React, { useContext } from 'react';
import { Loading, UserItem } from '../index'
import '../../style/extend.scss'
import { ApiContext } from '../../Store/Api/ApiContext';

const UserList = ({ sortUsers, searchUsers }) => {

    const { userData } = useContext(ApiContext);

    if (!userData) {
        return <Loading />
    }

    const sortedUsers = userData.sort((a, b) => {
        if (sortUsers === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    const itemsOfUsers = sortedUsers.map((user, index) =>
        <UserItem
            key={index + 1}
            id={user.id}
            name={`${user.name}`}
            userName={`${user.username}`}
            email={`${user.email}`}
            phone={`${user.phone}`} />)


    if (!searchUsers) {
        return (
            <div className='flex-hr'>
                {itemsOfUsers}
            </div>
        )
    }

    const filteredData = itemsOfUsers.filter(item =>
        item.props.name.toLowerCase().includes(searchUsers.toLowerCase()) ||
        item.props.userName.toLowerCase().includes(searchUsers.toLowerCase())
    );


    return (
        <div className='flex-hr'>
            {filteredData.length === 0 ? <div className='empty'>No Results...</div> : filteredData}
        </div>
    );
};

export default UserList;