import React, { createContext, useState, useEffect } from 'react';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const [postData, setPostData] = useState([]);
    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        const baseUrl = 'https://jsonplaceholder.typicode.com/'
        const fetchData = async (endpoint, setData) => {
            try {
                const loadedUsers = []
                const loadedPosts = []
                const loadedAlbums = []
                const response = await fetch(`${baseUrl}${endpoint}`);

                if (!response.ok) {
                    setData([])
                    throw new Error('Something wrong with AlbumsApi')
                }

                const data = await response.json();

                if (setData === 'users') {
                    for (const key in data) {
                        loadedUsers.push({
                            id: data[key].id,
                            name: data[key].name,
                            userName: data[key].username,
                            email: data[key].email,
                            phone: data[key].phone,
                            company: data[key].company.name,
                            website: data[key].website.name,
                        })
                    }
                    setTimeout(() => setUserData(loadedUsers), 1000)
                }

                if (setData === 'posts') {
                    for (const key in data) {
                        loadedPosts.push({
                            id: data[key].id,
                            userId: data[key].userId,
                            title: data[key].title,
                            body: data[key].body
                        })
                    }
                    setPostData(loadedPosts)
                }

                if (setData === 'albums') {
                    for (const key in data) {
                        loadedAlbums.push({
                            id: data[key].id,
                            userId: data[key].userId,
                            title: data[key].title,
                        })
                    }
                    setAlbumData(loadedAlbums)
                }



                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData('users', setUserData);
        fetchData('posts', setPostData);
        fetchData('albums', setAlbumData);
    }, []);

    return (
        <ApiContext.Provider value={{ userData, postData, albumData }}>
            {children}
        </ApiContext.Provider>
    );
};

export { ApiContext, ApiProvider };