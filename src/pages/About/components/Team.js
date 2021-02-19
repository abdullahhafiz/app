import React from 'react';
import { Link } from 'react-router-dom';

export function Team() {
    return <section id="team" className="wow fadeInUp">
        <div className="container">
            <div className="section-header">
                <h2>Our Team</h2>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="member">
                        <div className="pic"><img src="./assets/img/hamza.jpg" alt="Hamza" /></div>
                        <div className="details">
                            <h4>Hamza Anis</h4>
                            <span>Founder/CEO</span>
                            <div className="social">
                                <Link to="https://github.com/HamzaAnis" target="_blank"><i className="fab fa-github"></i></Link>
                                <Link to="https://www.facebook.com/hamzaanis2" target="_blank"><i
                                    className="fab fa-facebook"></i></Link>
                                <Link to="https://www.linkedin.com/in/hamzaanis9514/" target="_blank"><i
                                    className="fab fa-linkedin"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="member">
                        <div className="pic"><img src="./assets/img/adeel.png" alt="Adeel" /></div>
                        <div className="details">
                            <h4>Adeel Khan</h4>
                            <span>Project Manager</span>
                            <div className="social">
                                <Link to="https://github.com/adeelkhan-ak" target="_blank"><i
                                    className="fab fa-github"></i></Link>
                                <Link to="https://www.facebook.com/akj6547" target="_blank"><i
                                    className="fab fa-facebook"></i></Link>
                                <Link to="https://www.linkedin.com/in/adeel-khan-0b1a02b5/" target="_blank"><i
                                    className="fab fa-linkedin"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="member">
                        <div className="pic"><img src="./assets/img/Talha.jpg" alt="Talha" /></div>
                        <div className="details">
                            <h4>Talha Rizwan</h4>
                            <span>Team Member</span>
                            <div className="social">
                                <Link to="https://github.com/ttalha5621" target="_blank"><i
                                    className="fab fa-github"></i></Link>
                                <Link to="https://www.facebook.com/talha.talha.5621" target="_blank"><i
                                    className="fab fa-facebook"></i></Link>
                                <Link to="https://www.linkedin.com/in/talha-rizwan-a77573136/" target="_blank"><i
                                    className="fab fa-linkedin"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="member">
                        <div className="pic"><img src="./assets/img/waleed2.jpg" alt="Waleed" /></div>
                        <div className="details">
                            <h4>Waleed</h4>
                            <span>Team member</span>
                            <div className="social">
                                <Link to="https://github.com/waleed967" target="_blank"><i className="fab fa-github"></i></Link>
                                <Link to="https://www.facebook.com/twjkl" target="_blank"><i
                                    className="fab fa-facebook"></i></Link>
                                <Link to="https://www.linkedin.com/in/muhammad-waleed-1036671b8/" target="_blank"><i
                                    className="fab fa-linkedin"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
}