import React, { Fragment } from 'react';

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
                            <li><i className="icon ion-ios-checkmark-outline"></i> Fresh graduates</li>
                            <li><i className="icon ion-ios-checkmark-outline"></i> Passionate for learning</li>
                            <li><i className="icon ion-ios-checkmark-outline"></i> Complete tasks on given time</li>
                            <li><i className="icon ion-ios-checkmark-outline"></i> Adjust easily in working environment</li>
                            <li><i className="icon ion-ios-checkmark-outline"></i> Disciplined, be punctual in attendance </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
}