import React, { Fragment } from 'react';
import { Apply } from './components/Apply';
import { Internship } from './components/internship';
import { KeyRequirements } from './components/keyRequirements';
import { Requirement } from './components/Requirements';
import { Vacancies } from './components/Vacancies';

export function Career(){
    return <Fragment>
                <section id="innerBanner">
            <div className="inner-content">
                <h2><span>Career</span></h2>
                <div>
                </div>
            </div>
        </section>
        <main>
        <Apply />
        <Internship />
        <KeyRequirements />
        <Requirement />
        <Vacancies />
        </main>
        
    </Fragment>
}