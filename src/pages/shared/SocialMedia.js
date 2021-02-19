
import React from 'react';
import { Link } from 'react-router-dom';

export function SocialMedia() {
    return <section id="call-to-action" className="wow fadeInUp">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 text-center text-lg-left">
                    <h3 className="cta-title">Get Our Service</h3>
                    <p className="cta-text">Ready to have a conversation? We are just a message away.</p>
                </div>

                <div className="col-lg-3 cta-btn-container text-center">
                    <div className="container-footer">
                        <div className="social-buttons">
                            <Link to="https://github.com/CapregSoft" target="/_blank" className="social-button">
                                <div className="social-icon github">
                                    <i className="fab fa-github-alt" aria-hidden="true"></i>
                                </div>
                            </Link>
                            <Link to="https://www.linkedin.com/company/capregsoft/about/" className="social-button" target="/_blank">
                                <div className="social-icon linkedin">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </div>
                            </Link>
                            <Link to="https://twitter.com/capregsoft" target="/_blank" className="social-button">
                                <div className="social-icon twitter">
                                    <i className="fab fa-twitter" aria-hidden="true"></i>
                                </div>
                            </Link>
                            <Link to="https://www.facebook.com/CapregSoft" target="/_blank" className="social-button">
                                <div className="social-icon facebook">
                                    <i className="fab fa-facebook" aria-hidden="true"></i>
                                </div>
                            </Link>
                            <Link to="https://www.instagram.com/capregsoft/" target="/_blank" className="social-button">
                                <div className="social-icon instagram">
                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                </div>
                            </Link>
                            <Link to="https://www.reddit.com/r/capregsoft" target="/_blank" className="social-button">
                                <div className="social-icon reddit">
                                    <i className="fab fa-reddit" aria-hidden="true"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}