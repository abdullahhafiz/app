import React, {useEffect, useState} from 'react';

export function Address(props) {

    const [address, setAddress] = useState('')
    useEffect(()=> {
    },[props.formData])

    return <div className="col-lg-5">
        <div className="contact-address">
            <i className="ion-ios-location-outline"></i>
            <h3>{props.FullName}</h3>
                
        </div>
        <div className="contact-phone">
            <i className="ion-ios-telephone-outline"></i>
            <h3>{props.Email}</h3>

        </div>
        <div className="contact-email">
            <i className="ion-ios-email-outline"></i>
            <h3>{props.Details}</h3>

        </div>
    </div>

}