import React from "react";
import Carousel from "./Carousel";

const Testimonials = () => {
    return (
        <div id="testimonials" className="testimonials">
            <h1>my happy clients</h1>
            <div className="container">
                <div className="testimonials-content">
                    <Carousel />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
