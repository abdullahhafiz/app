import React, { Fragment } from 'react';
import { Requirement } from "./components/Requirements";
import { KeyRequirement } from "./components/keyRequirements";
import { Vacancies } from "./components/Vacancies";
import { Internship } from "./components/internship";
import { Apply } from "./components/Apply";
import { SocialMedia } from "../shared/SocialMedia";

export function Career() {
    return <Fragment>
        <section id="innerBanner">
            <div className="inner-content">
                <h2><span>Career's</span></h2>
                <div>
                </div>
            </div>
        </section>

        <Requirement />
        <KeyRequirement />
        <Vacancies />
        <Internship />
        <Apply />
        <SocialMedia />

    </Fragment>
}