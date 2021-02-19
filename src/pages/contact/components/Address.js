import React from 'react';

export function Address() {
    return <div className="col-lg-5">
        <div className="contact-address">
            <i className="ion-ios-location-outline"></i>
            <h3>Address</h3>
            <address>Plot # 11 Line 25-B Model Town Phase 2 Wah Cantt, Pakistan</address>
        </div>
        <div className="contact-phone">
            <i className="ion-ios-telephone-outline"></i>
            <h3>Phone Number</h3>
            <p><a href="tel:+92-342-0011719">+92-342-0011719</a></p>
            <p><a href="tel:+92-51-4916360">+92-51-4916360</a></p>
        </div>
        <div className="contact-email">
            <i className="ion-ios-email-outline"></i>
            <h3>Email</h3>
            <p><a href="info@capregsoft.com">info@capregsoft.com</a></p>
        </div>
    </div>

}