import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Albums, Loading, Posts, userLogo } from '../index';
import RegExpPhone from '../RegExPhone';
import { ApiContext } from '../../Store/Api/ApiContext';

const UserPage = () => {

    const { userData, postData, albumData } = useContext(ApiContext);
    const [tab, setTab] = useState('post')
    const params = useParams();

    if (!userData) {
        return <Loading />
    }

    const filteredUser = userData.filter((item =>
        `${item.id}` === params.id
    ))

    let numericOnlyPhone = RegExpPhone(filteredUser[0].phone)
    let formatNumberPhone = numericOnlyPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');

    const userPosts = postData.filter(item =>
        item.userId === filteredUser[0].id)

    const userAlbums = albumData.filter(item =>
        item.userId === filteredUser[0].id)

    const handleClick = (event) => {
        setTab(event.target.value)
    }

    return (
        <div>
            {!userData ? <Loading /> : (
                <div className='us-page'>
                    <div className="wrapper">
                        <div className='flex-hr'>
                            <div className='logo'>
                                <img src={userLogo} alt="user logo" />
                            </div>
                            <div className='description'>
                                <div className='flex-vr'>
                                    <div className='name'>{filteredUser[0].name}
                                        <span>{`(${filteredUser[0].username})`}</span>
                                    </div>
                                    <div className='company'>
                                        <strong>Company:</strong><span>{filteredUser[0].company.name}</span>
                                    </div>
                                    <div className='email'>
                                        <strong>Email:</strong><span>{filteredUser[0].email}</span>
                                    </div>
                                    <div className='phone'>
                                        <strong>Phone:</strong><a href={`tel:+1${numericOnlyPhone}`}>{formatNumberPhone}</a>
                                    </div>
                                    <div className='website'>
                                        <strong>Website:</strong><span>{filteredUser[0].website}</span>
                                    </div>
                                    <div className='previous-page'>
                                        <button>
                                            <Link to='..'>Back Users</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='tabs flex-hr'>
                            <button value='post' onClick={handleClick} className={tab === 'post' ? 'active' : undefined}>Posts</button>
                            <button value='albums' onClick={handleClick} className={tab === 'albums' ? 'active' : undefined}>Albums</button>
                        </div>
                        <hr />
                        <div>
                            {tab === 'post' && userPosts.map((post) =>
                                <Posts
                                    key={post.id + 1}
                                    userId={post.userId}
                                    title={post.title}
                                    body={post.body}
                                />)}
                            <div className='flex-hr'>
                                {tab === 'albums' && userAlbums.map((post, index) =>
                                    <Albums
                                        key={index + 1}
                                        userId={post.userId}
                                        title={post.title}
                                    />)}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default UserPage;