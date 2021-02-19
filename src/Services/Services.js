import React, { Fragment } from 'react';
import { ServiceImage } from "./components/ServiceImage";
import { Client } from '../pages/shared/Client';
import { SocialMedia } from '../pages/shared/SocialMedia';
import { Service } from '../pages/Home/components/Service';

export function Services() {
    return <Fragment>
        <section id="innerBanner">
            <div className="inner-content">
                <h2><span>Services</span></h2>
                <div>
                </div>
            </div>
        </section>
        <main id="main">
            <Service />
            <Client />
            <ServiceImage />
            <SocialMedia />
        </main>
    </Fragment>
}