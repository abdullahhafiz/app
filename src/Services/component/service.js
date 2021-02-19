import React from 'react';

export function Service() {
    return <section id="services">
        <div className="container">
            <div className="section-header">
                <h2>Our Services</h2>
                <p>Capreg Soft provides a vast range of IT services to meet the needs of different clients that
                competes with different rivals in this digital era where technology is progressing day by day
            </p>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="box wow fadeInLeft">
                        <div className="icon svgImg"><img src="./assets/img/web-development.svg" alt="Web-Development" height="90px"
                            width="100px" /></div>
                        <h4 className="title"><a href="/#">Web Development</a></h4>
                        <p className="description">Web Development is our strength.In case you’re looking for
                        overhauling of your existing website and for creating a new website our team of
                        skillfull web developers will assured you that we deliver a unique, powerful, dynamic
                        and efficient looking website on time.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box wow fadeInRight">
                        <div className="icon svgImg"><img src="./assets/img/app-development.svg" alt="Development" height="90px"
                            width="100px" /></div>
                        <h4 className="title"><a href="/#">Mobile Applications</a></h4>
                        <p className="description">Mobile application development in Pakistan has grasping exceptional
                        growth in the recent years. CapregSoft company develop mobile applications in
                        WahCantt,Pakistan. We cooperate with our clients from the abstract stage to final
                        development.
                    </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="icon svgImg"><img src="./assets/img/desktop-apps.svg" alt="Desktop-App" height="90px" width="100px" />
                        </div>
                        <h4 className="title"><a href="/#">Desktop Applications</a></h4>
                        <p className="description">Our developers have broad vision of present-day technologies as well
                        as provides complex systems and solutions for problems.Our desktop application
                        development services provides an efficient,user-friendly desktop applications
                        that can run offline as well.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}