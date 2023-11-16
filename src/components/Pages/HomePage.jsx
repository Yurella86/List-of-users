import React, { Fragment } from 'react';
import '../../style/extend.scss'
import { UserList, SearchBar } from '../index';

const HomePage = () => {

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
                    <SearchBar />
                </section>
                <section className='content'>
                    <div className="wrap-content">
                        <UserList />
                    </div>
                </section>
            </main>
        </Fragment>
    );
};

export default HomePage;