import React from 'react';

export function Hero() {
    return <section id="hero" className="clearfix">
        <div className="container">
            <div className="hero-banner">
                <img src="./assets/img/8.svg" alt="" className="img-fluid" />
            </div>
            <div className="hero-content">
                <h4 className="wordC1">
                    <div>
                        <ul className="flp4">
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>Angular</li>
                            <li>Golang</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </h4>
                <div style={{ position: 'absolute' }} id="particles-js"></div>
            </div>
        </div>
    </section>
}
