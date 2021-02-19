import React from 'react';


export function ContactForm() {
    return <div className="col-lg-7">
        <div className="container">
            <div className="form">
                <form name="sentMessage" className="well" id="contactForm" noValidate>
                    <div className="control-group">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Full Name" id="name"
                                required data-validation-required-message="Please enter your name" />
                            <p className="help-block"></p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="controls">
                            <input type="email" className="form-control" placeholder="Email" id="email"
                                required data-validation-required-message="Please enter your email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="controls">
                            <textarea rows="10" cols="100" className="form-control" placeholder="Message"
                                id="message" required
                                data-validation-required-message="Please enter your message"
                                minLength="5" data-validation-minlength-message="Min 5 characters"
                                maxLength="999" ></textarea>
                        </div>
                    </div>
                    <div id="success"> </div>
                    <button type="submit" className="btn btn-primary pull-right">Send</button><br />
                </form>
            </div>
        </div>
    </div>
}