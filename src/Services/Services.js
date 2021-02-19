import React, { Fragment } from 'react';
import { Service } from "./Components/Service";
import { Client } from "../Shared/Client";
import { ServiceImage } from "./Components/ServiceImage";
import { SocialMedia } from "../Shared/SocialMedia";

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