import React from 'react';

export function Address(){
    return <div className='address'>
                <div className='home-address'>
            <i className='outline'></i>
            <h3>Address</h3>
            <address>Plot # 11 Line 25-B Model Town Phase 2 Wah Cantt, Pakistan</address>
        </div>
        <div className='phone-number'>
            <i className='ion-ios-telephone-outline'></i>
            <h3>Phone Number</h3>
            <p><a href="tel:+92-306-0812120">+92-306-0812120</a></p>
        </div>
        <div className='email-address'>
            <i className='ion-ios-email-outline'></i>
            <h3>Email</h3>
            <p><a href='abdullahhafiz1997@gmail.com'>abdullahhafiz1997@gmail.com</a></p>
        </div>
    </div>

}