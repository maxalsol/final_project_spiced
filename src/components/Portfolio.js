import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
// FONT AWESOME  ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="portfolio-image-box">
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
        </div>
    );
}

export default Portfolio;
