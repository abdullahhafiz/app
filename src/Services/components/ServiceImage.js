import React from 'react';

export function ServiceImage() {
    return <section id="about" className="wow fadeInUp">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 about-img">
                    <img src="./assets/img/web-app-img.svg" alt="Web App" />
                </div>
                <div className="col-lg-6 about-img">
                    <img src="./assets/img/mobileapp.svg" alt="Mobile App" />
                </div>
            </div>
        </div>
    </section>
}