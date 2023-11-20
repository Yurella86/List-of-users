import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userLogo } from '../../index'
import RegExpPhone from '../../RegExPhone';

const User = ({ id, name, userName, email, phone }) => {
    const [phoneHref, setPhoneHref] = useState('')
    const [formattedNumber, setFormattedNumber] = useState('')


    useState(() => {
        let numericOnly = RegExpPhone(phone)
        setPhoneHref(numericOnly)
        let formatNumber = numericOnly.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');
        setFormattedNumber(formatNumber)
    }, phone)


    return (
        <div className="item">
            <Link to={`user/${id}`}>
                <div className="wrap-item">
                    <div className='logo'>
                        <img src={userLogo} alt="user logo" />
                    </div>
                    <div className='item-name'>{name}
                        <span>{`(${userName})`}</span>
                    </div>
                    <div className='email'>{email}</div>
                    <div className='phone'>
                        <a href={`tel:+1${phoneHref}`}>{formattedNumber}</a>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default User;