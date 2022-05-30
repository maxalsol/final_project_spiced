import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>
                    Please fill out the form and describe your roject needs and
                    I contact you as soon as possible.
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME */}
                        <input
                            id="input-name"
                            className="form-control"
                            type="text"
                            placeholder="Name"
                            name="name"
                            autoComplete="off"
                        />
                        {/* PHONE */}
                        <input
                            id="input-phone"
                            className="form-control"
                            type="tel"
                            placeholder="Phone Number"
                            phone="phone"
                            autoComplete="off"
                        />
                        {/* EMAIL */}
                        <input
                            id="input-email"
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                            email="email"
                            autoComplete="off"
                        />
                        {/* SUBJECT */}
                        <input
                            id="input-subject"
                            className="form-control"
                            type="text"
                            placeholder="Subject"
                            subject="subject"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <textarea
                            id="input-description"
                            className="form-control"
                            type="text"
                            placeholder="Please describe your request.."
                            description="description"
                            autoComplete="off"
                        ></textarea>
                        <button
                            className="btn-main-offer contact-btn"
                            type="submit"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
