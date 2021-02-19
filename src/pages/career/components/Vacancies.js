import React, { Fragment } from 'react';

export function Vacancies() {
    return <Fragment>
        <section id="services">
            <div className="container">
                <div className="section-header">
                    <h2>Vacancies</h2>
                    <p> We want to hire React Developers</p>
                </div>
            </div>
        </section>
        <section id="about" className="wow fadeInUp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 about-img">
                        <img src="./assets/img/joboffer.svg" alt="Job" />
                    </div>
                    <div className="col-lg-6 content">
                        <ul>
                            <h1>Key Requirements</h1>
                            <li><i className="icon ion-ios-checkmark-outline"></i> Experince of 1 to 2 years </li>
                            <li><i className="icon ion-ios-checkmark-outline"></i> Team player</li>
                            <li><i className="icon ion-ios-checkmark-outline"></i> Develop a flexible and well-structured
                        front-end architecture</li>
                            <li><i className="icon ion-ios-checkmark-outline"></i> Good time-management skills</li>
                            <li><i className="icon ion-ios-checkmark-outline"></i> Responsible for development of new
                        highly-responsive, web-based user interface</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
}