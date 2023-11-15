import React from 'react';
import '../../style/extend.scss'
import { UserItem } from '../index'

const HomePage = () => {
    return (
        <div>
            <header>
                <div className='hd-wrapper'>
                    <div className="title">
                        <span>List of users</span>
                    </div>
                </div>
            </header>
            <main>
                <section className='filters'>search</section>
                <section className='content'>
                    <div className="wrap-content">
                        <div className='flex-container'>
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;