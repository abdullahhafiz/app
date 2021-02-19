import React, { Fragment } from 'react';
import classNames from '../career.json';

export function Internship() {
    return <Fragment> <section id="services">
        <div className="container">
            <div className="section-header">
                <h2>Internship</h2>
            </div>
        </div>
    </section>
        <section id="about" className="wow fadeInUp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 about-img">
                        <img src="./assets/img/career-resume.svg" alt="" />
                    </div>
                    <div className="col-lg-6 content">
                        <ul>
                            <h1>Key Requirements</h1>
                            {classNames.map((item, i)=>{
                                return <li key ={i}>{item.oppurtunity} </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
}