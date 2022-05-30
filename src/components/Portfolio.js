// import React from "react";
// import netflix from "../images/netflix.png";
// import cityGuide from "../images/city-guide-app.png";
// import portfolio from "../images/portfolio.png";
// import taskManager from "../images/task-manager.png";
// // FONT AWESOME  ICONS
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// // REACT POPUPBOX
// import { PopupboxManager, PopupboxContainer } from "react-popupbox";
// import "react-popupbox/dist/react-popupbox.css";

// const Portfolio = () => {
//     // first portfolio project
//     const openPopupboxFirst = () => {
//         const content = (
//             <>
//                 <img
//                     className="portfolio-image-popupbox"
//                     src={netflix}
//                     alt=""
//                 />
//                 <p>
//                     Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id
//                     imperdiet et, porttitor at sem.
//                 </p>
//                 <b>GitHub:</b>{" "}
//                 <a
//                     className="hyper-link"
//                     href="https://github.com/maxalsol/final-project-spiced/branches"
//                     onClick={() =>
//                         window.open(
//                             "https://github.com/maxalsol/final-project-spiced/branches"
//                         )
//                     }
//                 >
//                     https://github.com/maxalsol/final-project-spiced/branches
//                 </a>
//             </>
//         );

//         PopupboxManager.open({ content });
//         PopupboxManager.update({
//             content,
//             config: {
//                 titleBar: {
//                     text: "Your Edited Text Here",
//                 },
//             },
//         });
//     };

//     const popupboxConfigFirst = {};

//     return (
//         <div className="portfolio-wrapper">
//             <div className="container">
//                 <h1 className="text-uppercase text-center py-5">Portfolio</h1>
//                 <div className="image-box-wrapper row row-cols-auto justify-content-center">
//                     <div
//                         className="portfolio-image-box"
//                         onClick={openPopupboxFirst}
//                     >
//                         <img
//                             className="portfolio-image"
//                             src={netflix}
//                             alt=""
//                         ></img>
//                         <div className="overflow"></div>
//                         <FontAwesomeIcon
//                             className="portfolio-icon"
//                             icon={faSearchPlus}
//                         />
//                     </div>
//                     <div className="portfolio-image-box">
//                         <img
//                             className="portfolio-image"
//                             src={cityGuide}
//                             alt=""
//                         ></img>
//                         <div className="overflow"></div>
//                         <FontAwesomeIcon
//                             className="portfolio-icon"
//                             icon={faSearchPlus}
//                         />
//                     </div>
//                     <div className="portfolio-image-box">
//                         <img
//                             className="portfolio-image"
//                             src={portfolio}
//                             alt=""
//                         ></img>
//                         <div className="overflow"></div>
//                         <FontAwesomeIcon
//                             className="portfolio-icon"
//                             icon={faSearchPlus}
//                         />
//                     </div>
//                     <div className="portfolio-image-box">
//                         <img
//                             className="portfolio-image"
//                             src={taskManager}
//                             alt=""
//                         ></img>
//                         <div className="overflow"></div>
//                         <FontAwesomeIcon
//                             className="portfolio-icon"
//                             icon={faSearchPlus}
//                         />
//                     </div>
//                 </div>
//             </div>
//             <PopupboxContainer {...popupboxConfigFirst} />
//         </div>
//     );
// };

// export default Portfolio;

//! FROM DOCUMENTATION
import React, { Component } from "react";
// IMAGES
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
// FONT AWESOME  ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

export default class Portfolio extends Component {
    // first portfolio project
    openPopupboxFirst() {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={netflix}
                    alt=""
                />
                <p>
                    Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id
                    imperdiet et, porttitor at sem.
                </p>
                <b>GitHub:</b>{" "}
                <a
                    className="hyper-link"
                    // href="https://github.com/maxalsol/final-project-spiced/branches"
                    onClick={() =>
                        window.open(
                            "https://github.com/maxalsol/final-project-spiced/branches"
                        )
                    }
                >
                    https://github.com/maxalsol/final-project-spiced/branches
                </a>
            </>
        );

        PopupboxManager.open({ content });
        // PopupboxManager.update({
        //     content,
        //     config: {
        //         titleBar: {
        //             text: "Your Edited Text Here",
        //         },
        //     },
        // });
    }

    // const popupboxConfigFirst = {};
    render() {
        return (
            <div className="portfolio-wrapper">
                <div className="container">
                    <h1 className="text-uppercase text-center py-5">
                        Portfolio
                    </h1>
                    <div className="image-box-wrapper row row-cols-auto justify-content-center">
                        <div
                            className="portfolio-image-box"
                            onClick={this.openPopupboxFirst}
                        >
                            <img
                                className="portfolio-image"
                                src={netflix}
                                alt=""
                            ></img>
                            <div className="overflow"></div>
                            <FontAwesomeIcon
                                className="portfolio-icon"
                                icon={faSearchPlus}
                            />
                        </div>
                        <div className="portfolio-image-box">
                            <img
                                className="portfolio-image"
                                src={cityGuide}
                                alt=""
                            ></img>
                            <div className="overflow"></div>
                            <FontAwesomeIcon
                                className="portfolio-icon"
                                icon={faSearchPlus}
                            />
                        </div>
                        <div className="portfolio-image-box">
                            <img
                                className="portfolio-image"
                                src={portfolio}
                                alt=""
                            ></img>
                            <div className="overflow"></div>
                            <FontAwesomeIcon
                                className="portfolio-icon"
                                icon={faSearchPlus}
                            />
                        </div>
                        <div className="portfolio-image-box">
                            <img
                                className="portfolio-image"
                                src={taskManager}
                                alt=""
                            ></img>
                            <div className="overflow"></div>
                            <FontAwesomeIcon
                                className="portfolio-icon"
                                icon={faSearchPlus}
                            />
                        </div>
                    </div>
                </div>
                {/* <PopupboxContainer {...popupboxConfigFirst} /> */}
            </div>
        );
    }
}
