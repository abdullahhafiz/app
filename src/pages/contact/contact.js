import React, { Fragment } from 'react';
import { Address } from "./Components/Address";
import { ContactForm } from "./Components/ContactForm";
import { Map } from "./Components/Map";
import { SocialMedia } from "../Shared/SocialMedia";

export function Contact() {
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
                        <Address />
                        <ContactForm />
                        <Map />
                    </div>
                </div>
            </section>
            <SocialMedia />
        </main>
    </Fragment>
}