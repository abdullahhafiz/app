import React, { Fragment } from 'react';
import { About } from "./components/About";
import { Service } from "./components/Service";
import { Client } from "../shared/Client";
import { Testimonials } from "../shared/Testimonials";
import { SocialMedia } from "../shared/SocialMedia";
import { Hero } from './components/Hero';

export function Index() {
    return <Fragment>
        <Hero />
        <About />
        <Service />
        <Client />
        <Testimonials />
        <SocialMedia />
    </Fragment>
}