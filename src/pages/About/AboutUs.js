import React, { Fragment } from 'react';

import { WhatWeDo } from "./componets/WhatWeDo";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";
import { Team } from "./componets/Team";
// import { SocialMedia } from "../Shared/SocialMedia";

export function AboutUs() {
    return <Fragment>
        <section id="innerBanner">
            <div className="inner-content">
                <h2><span>About Us</span></h2>
            </div>
        </section>

        <main id="main">
            <WhatWeDo />
            <Header />
            <Footer />
            <Team />
            {/* <SocialMedia /> */}
        </main>
    </Fragment>
}