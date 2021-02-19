import React, { Fragment , useState} from 'react';

import { Address } from "./components/Address";
import { ContactForm } from "./components/Contactform";
import { Map } from "./components/Map";
import { SocialMedia } from "../shared/SocialMedia";

export function Contact() {
        const [formData , setFormData] = useState({FullName:'', Email:'', Details: ''}) 
        // const[FullName , setFullName]= useState('');
        // const[Email , setEmail]= useState('');
        // const[Details , setDetails]= useState('');
        

    const onChange= (e)=> setFormData({
        ...formData, [e.target.name]:[e.target.value]
    });

const {
    FullName,
    Email,
    Details,
} = formData

    // function onChangeFullName(name){
    //     console.log(',,,,,,,,,,,,,,, pressed........', name);
    //     setFullName(name)
    // }
    // function onChangeEmail(email){
    //     setEmail(email)
    // }
    // function onChangeDetail(detail){
    //     setDetails(detail)
    // }
    const onSending = e => {
        e.preventDefault();
        setFormData({
            FullName: '',
            Email: '',
            Details: ''
        })
        console.log('......... on submit clicked ...........', formData);
    }
    return <Fragment>
        <section id="innerBanner">
            <div className="inner-content">
                <h2><span>Contact</span></h2>
                <div>
                </div>
            </div>
        </section>

        <main id="main">
            <section id="contact" className="wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                    </div>
                    <div className="row contact-info">
                        <Address formData={formData}
                        Email={Email}
                        FullName={FullName}
                        Details={Details}
                        />
                        <ContactForm 
                        onChange={onChange} 
                        FullName={FullName}
                        // onChangeFullName={onChangeFullName}
                         Email={Email} 
                        //  onChangeEmail={onChangeEmail}
                         Details={Details}
                        //  onChangeDetail={onChangeDetail}
                          onSending={onSending}/>
                        <Map />
                    </div>
                </div>
            </section>
            <SocialMedia />
        </main>
    </Fragment>
}