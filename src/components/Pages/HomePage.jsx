import React, { Fragment, useState } from 'react';
import '../../style/extend.scss'
import { UserList, SearchBar } from '../index';

const HomePage = () => {
    const [sortUsers, setSortUsers] = useState('asc')
    const [searchUsers, setSearchUsers] = useState('')

    return (
        <Fragment>
            <header>
                <div className='hd-wrapper'>
                    <div className="title">
                        <span>List of users</span>
                    </div>
                </div>
            </header>
            <main>
                <section className='filters'>
                    <SearchBar
                        sortUsers={sortUsers}
                        searchUsers={searchUsers}
                        callbackSort={(d) => setSortUsers(d)}
                        callbackSearch={(w) => setSearchUsers(w)} />
                </section>
                <section className='content'>
                    <div className="wrap-content">
                        <UserList sortUsers={sortUsers} searchUsers={searchUsers} />
                    </div>
                </section>
            </main>
        </Fragment>
    );
};

export default HomePage;