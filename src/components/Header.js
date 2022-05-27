import React from "react";
import Typed from "react-typed";

function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Header</h1>
                <Typed
                    className="typed-text"
                    strings={[
                        "Web Design",
                        "Web Development",
                        "Search Engine Optimization",
                        "Drop Servicing",
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    );
}

export default Header;
