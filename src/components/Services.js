import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDesktop,
    faFileCode,
    faWrench,
    faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">my services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faDesktop}
                                    size="2x"
                                />
                            </div>
                            <h3>Design</h3>
                            <p>
                                I approach each project individually and always
                                focus on the result.
                            </p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faFileCode}
                                    size="2x"
                                />
                            </div>

                            <h3>Development</h3>
                            <p>
                                Your website will be build with the newest
                                proven software solutions.
                            </p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faWrench}
                                    size="2x"
                                />
                            </div>

                            <h3>Maintainance</h3>
                            <p>
                                On request I will maintain your already existing
                                website and update content if needed.
                            </p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faTachometerAlt}
                                    size="2x"
                                />
                            </div>
                            <h3>Performance</h3>
                            <p>
                                Your users are not satisfyed by your page speed?
                                I can boost your project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
