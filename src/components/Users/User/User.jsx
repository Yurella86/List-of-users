import React from 'react';
import { userLogo } from '../../index'

const User = ({ name, userName, email, phone }) => {



    function formatPhoneNumber(number) {
        let regExPhone = number.match(/^.*(?=x)/g)

        let phoneNumber = !regExPhone ? number : String(regExPhone);
        let numericOnly = phoneNumber.replace(/\D/g, '');
        var formattedNumber = numericOnly.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');
        return formattedNumber;
    }

    var formattedPhoneNumbers = formatPhoneNumber(phone);


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
                <div className='phone'>{formattedPhoneNumbers}</div>
            </div>
        </div>
    );
};

export default User;