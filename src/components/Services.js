import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faDesktop}
                                    size="2x"
                                />
                            </div>
                            <h3>Web Design</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faFileCode}
                                    size="2x"
                                />
                            </div>
                            <h3>Web Development</h3>
                            <p>Cras ultricies ligula sed magna dictum porta.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faFacebookF}
                                    size="2x"
                                />
                            </div>
                            <h3>Social Media</h3>
                            <p>
                                Curabitur aliquet quam id dui posuere blandit.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faGoogle}
                                    size="2x"
                                />
                            </div>
                            <h3>Drop Servicing</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
