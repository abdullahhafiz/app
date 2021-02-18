import React, { Fragment } from 'react';
import { Team } from './components/Team';
import { WhatWeDo } from './components/WhatWeDo';

export function AboutUs(){
    return <Fragment>
        <section id = 'aboutInenr'>
            <div className = 'aboutInnerContent'>
                <h2><span>About Us</span></h2>
            </div>
        </section>
        <main id = 'aboutMain'>
            <Team />
            <WhatWeDo />

        </main>
    </Fragment>
}