import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                {/* <canvas></canvas> */}
                <h1>Your Creator for the Web</h1>
                <Typed
                    className="typed-text"
                    strings={[
                        "Design",
                        "Development",
                        "Maintainance",
                        "Performance",
                    ]}
                    typeSpeed={70}
                    backSpeed={40}
                    loop
                />
                <Link
                    smooth={true}
                    to="contacts"
                    offset={-110}
                    className="nav-link btn-main-offer"
                    href="#"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Header;
