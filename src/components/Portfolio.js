import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";

function Portfolio() {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <img className="portfolio-image" src={netflix} alt=""></img>
                </div>
                <div className="image-box-wrapper row justify-content-center">
                    <img
                        className="portfolio-image"
                        src={cityGuide}
                        alt=""
                    ></img>
                </div>
                <div className="image-box-wrapper row justify-content-center">
                    <img
                        className="portfolio-image"
                        src={portfolio}
                        alt=""
                    ></img>
                </div>
                <div className="image-box-wrapper row justify-content-center">
                    <img
                        className="portfolio-image"
                        src={taskManager}
                        alt=""
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
