import React, { Fragment } from 'react';

import { WhatWeDo } from "./Componets/WhatWeDo";
import { Client } from "../Shared/Client";
import { Testimonials } from "../Shared/Testimonials";
import { Team } from "./Componets/Team";
import { SocialMedia } from "../Shared/SocialMedia";

export function AboutUs() {
    return <Fragment>
        <section id="innerBanner">
            <div className="inner-content">
                <h2><span>About Us</span></h2>
            </div>
        </section>

        <main id="main">
            <WhatWeDo />
            <Client />
            <Testimonials />
            <Team />
            <SocialMedia />
        </main>
    </Fragment>
}