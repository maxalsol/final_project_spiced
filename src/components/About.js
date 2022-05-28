import React from "react";
import Author from "../me.jpg";

function About() {
    return (
        <div className="container" py-5>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrapp">
                        <img className="me-img" src={Author} alt="me"></img>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1> About me</h1>
                    <p>
                        Nulla quis lorem ut libero malesuada feugiat. Sed
                        porttitor lectus nibh. Mauris blandit aliquet elit, eget
                        tincidunt nibh pulvinar a. Quisque velit nisi, pretium
                        ut lacinia in, elementum id enim. Praesent sapien massa,
                        convallis a pellentesque nec, egestas non nisi. Proin
                        eget tortor risus. Quisque velit nisi, pretium ut
                        lacinia in, elementum id enim. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Mauris blandit
                        aliquet elit, eget tincidunt nibh pulvinar a. Donec
                        sollicitudin molestie malesuada. Cras ultricies ligula
                        sed magna dictum porta. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Curabitur arcu erat,
                        accumsan id imperdiet et, porttitor at sem. Vestibulum
                        ac diam sit amet quam vehicula elementum sed sit amet
                        dui. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Curabitur non nulla sit amet nisl tempus
                        convallis quis ac lectus. Donec rutrum congue leo eget
                        malesuada. Donec rutrum congue leo eget malesuada. Cras
                        ultricies ligula sed magna dictum porta. Vivamus
                        suscipit tortor eget felis porttitor volutpat.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
