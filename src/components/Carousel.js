import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={avatar1} alt="John Doe 1" />
                <div className="myCarousel">
                    <h3>John Doe</h3>
                    <p>
                        Wow! Max was not just able to solve my problem.. He
                        created a sustainable solution.
                    </p>
                </div>
            </>
            <>
                <img src={avatar2} alt="John Doe 2" />
                <div className="myCarousel">
                    <h3>Jane Doe</h3>
                    <p>
                        Never thought I find someone who understands my needs!
                        If web development then Max!
                    </p>
                </div>
            </>
            <>
                <img src={avatar3} alt="John Doe 3" />
                <div className="myCarousel">
                    <h3>John Deer</h3>
                    <p>He just does it.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="John Doe 4" />
                <div className="myCarousel">
                    <h3>Mary Jane</h3>
                    <p>
                        We had a lot of troubles with our last "IT guy". Max
                        isn't just an IT guy. He lives the whole thing!
                    </p>
                </div>
            </>
        </Carousel>
    );
};

export default TestimonialsCarousel;
