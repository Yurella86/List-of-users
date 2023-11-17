import React, { useState } from 'react';
import { userLogo } from '../../index'

const User = ({ name, userName, email, phone }) => {
    const [phoneHref, setPhoneHref] = useState('')
    const [formattedNumber, setFormattedNumber] = useState('')


    useState(() => {
        let regExPhone = phone.match(/^.*(?=x)/g)
        let phoneNumber = !regExPhone ? phone : String(regExPhone);
        let numericOnly = phoneNumber.replace(/\D/g, '');
        setPhoneHref(numericOnly)
        let formatNumber = numericOnly.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');
        setFormattedNumber(formatNumber)
    }, phone)


    return (
        <div className="item">
            <div className="wrap-item">
                <div className='logo'>
                    <img src={userLogo} alt="user logo" />
                </div>
                <div className='item-name'>{name}
                    <span>{`(${userName})`}</span>
                </div>
                <div className='email'>{email}</div>
                {/* <div className='phone'>{regExPhone ? regExPhone : phone}</div> */}
                <div className='phone'>
                    <a href={`tel:+1${phoneHref}`}>{formattedNumber}</a>
                </div>
            </div>
        </div>
    );
};

export default User;