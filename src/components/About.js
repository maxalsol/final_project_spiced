import React from "react";
import author from "../me.jpg";

const About = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img
                            className="profile-img"
                            src={author}
                            alt="author..."
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>Lorem ipsum... jokes apart. Hi! My name is Max.</p>
                    <p>
                        In 2021 I discovered a growing interest in web
                        technology and I became eger to learn this skill. Coming
                        from the background of being a car mechanic I was able
                        to transfer a lot of soft skills with me into this
                        field. The possibility to create new things and solve
                        problems were a game changer. I found a passion and
                        coding soon became something I wanted to do as a living.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
