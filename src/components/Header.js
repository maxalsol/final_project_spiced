import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Your Solution Creator for:</h1>
                <Typed
                    className="typed-text"
                    strings={[
                        "Web Design & Development",
                        "Social Media",
                        "Brand Building",
                        // "Drop Servicing",
                    ]}
                    typeSpeed={70}
                    backSpeed={40}
                    loop
                />
                <a href="#" className="btn-main-offer">
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Header;
