import React, { useEffect, useState } from 'react';
import UsersContext from './UsersContext';

const UsersProvider = (props) => {
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const loadedUsers = []
            const response = await fetch('https://jsonplaceholder.typicode.com/users')


            if (!response.ok) {
                setUsers([])
                throw new Error('something wrong with Api')
            }

            const data = await response.json();

            for (const key in data) {
                loadedUsers.push({
                    id: data[key].id,
                    name: data[key].name,
                    userName: data[key].username,
                    email: data[key].email,
                    phone: data[key].phone
                })
            }

            setTimeout(() => setUsers(loadedUsers), 1000)
        }

        fetchUsers().catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <UsersContext.Provider value={users}>
            {props.children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;