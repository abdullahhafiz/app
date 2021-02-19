import React, { Fragment } from 'react';

import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";
import { SocialMedia } from "../shared/SocialMedia";
import { Team } from './components/Team';
import { WhatWeDo } from './components/WhatWeDo';

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
            <Team/>
            <SocialMedia />
        </main>
    </Fragment>
}