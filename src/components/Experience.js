import React from "react";

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021</h3>
                        <p>
                            I started out with some Web Development courses on
                            freeCodeCamp and Udemy to dive into this exciting
                            world. I realized quickly that I wanted more and to
                            learn properly how to build and deploy professional
                            websites.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2022</h3>
                        <p>
                            2022 was the year to take action. So I decided to
                            join the SPICED Academy Full Stack bootcamp. During
                            that time I gained some fundamental understanding of
                            the basic and advanced technologies and frameworks
                            in the web development industry. I built Full Stack
                            applications with different approaches such as a
                            petition website, an image board or a social network
                            with chat functionality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
