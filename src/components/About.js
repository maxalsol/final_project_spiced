import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
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
                    <p>
                        Donec rutrum congue leo eget malesuada. Mauris blandit
                        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
                        suscipit tortor eget felis porttitor volutpat. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus. Proin eget tortor risus. Vivamus magna justo,
                        lacinia eget consectetur sed, convallis at tellus.
                    </p>
                    <p>
                        Donec rutrum congue leo eget malesuada. Mauris blandit
                        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
                        suscipit tortor eget felis porttitor volutpat. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus. Proin eget tortor risus. Vivamus magna justo,
                        lacinia eget consectetur sed, convallis at tellus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
