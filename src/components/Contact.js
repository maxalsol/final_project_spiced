import React from "react";

function Contact() {
    return (
        <div id="contact" className="contact">
            <div className="text-center">
                <h1>contact me</h1>
                <p>
                    Please fill out the form and describe you project needs and
                    I'll contact you as soon as possible.
                </p>
            </div>
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                />
                                <div className="line"></div>
                            </div>

                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                />
                                <div className="line"></div>
                            </div>

                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                />
                                <div className="line"></div>
                            </div>

                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                />
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Please describe shortly you project..."
                                    name="description"
                                ></textarea>
                                <div className="line"></div>
                            </div>

                            <button
                                className="btn-main-offer contact-btn"
                                type="submit"
                            >
                                contact me
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
