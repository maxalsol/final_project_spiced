import React from "react";
import project01 from "../images/project01.png";
import project02 from "../images/project02.png";
import project03 from "../images/project03.png";
import project04 from "../images/project04.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Pofrfolio = () => {
    // Netflix
    const openPopupboxNetflix = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={project01}
                    alt="Netflix Clone Project..."
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                    cumque illo est expedita quos adipisci suscipit unde itaque
                    qui perferendis.
                </p>
                <b>GitHub:</b>{" "}
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            "https://github.com/8020Coding/netflix-project"
                        )
                    }
                >
                    https://github.com/8020Coding/netflix-project
                </a>
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Netflix clone project.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    // City Guide App
    const openPopupboxCityGuide = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={project02}
                    alt="City Guide App Project..."
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                    cumque illo est expedita quos adipisci suscipit unde itaque
                    qui perferendis.
                </p>
                <b>Demo:</b>{" "}
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            "https://city-guide-app-project.herokuapp.com/",
                            "_blank"
                        )
                    }
                >
                    https://city-guide-app-project.herokuapp.com/
                </a>
                <br />
                <b>GitHub:</b>{" "}
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            "https://github.com/8020Coding/city-guide-app",
                            "_blank"
                        )
                    }
                >
                    https://github.com/8020Coding/city-guide-app
                </a>
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigCityGuide = {
        titleBar: {
            enable: true,
            text: "City Guide App project.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    // Portfolio Project
    const openPopupboxPortfolio = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={project03}
                    alt="Portfolio Project..."
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                    cumque illo est expedita quos adipisci suscipit unde itaque
                    qui perferendis.
                </p>
                <b>Demo:</b>{" "}
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            "https://portfolio-rea-and-material-ui.herokuapp.com/",
                            "_blank"
                        )
                    }
                >
                    https://portfolio-rea-and-material-ui.herokuapp.com/
                </a>
                <br />
                <b>GitHub:</b>{" "}
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            "https://github.com/8020Coding/portfilio",
                            "_blank"
                        )
                    }
                >
                    https://github.com/8020Coding/portfilio
                </a>
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigPortfolio = {
        titleBar: {
            enable: true,
            text: "Poftfolio React and Material UI project.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    // Task Manager React and Redux Project
    const openPopupboxTaskManager = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={project04}
                    alt="Task Manager React and Redux Project..."
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                    cumque illo est expedita quos adipisci suscipit unde itaque
                    qui perferendis.
                </p>
                <b>Demo:</b>{" "}
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            "https://react-redux-task-manager.herokuapp.com/",
                            "_blank"
                        )
                    }
                >
                    https://react-redux-task-manager.herokuapp.com/
                </a>
                <br />
                <b>GitHub:</b>{" "}
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            "https://github.com/8020Coding/task-manager",
                            "_blank"
                        )
                    }
                >
                    https://github.com/8020Coding/task-manager
                </a>
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigTaskManager = {
        titleBar: {
            enable: true,
            text: "Task Manager React and Redux project.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div
                        className="portfolio-image-box"
                        onClick={openPopupboxNetflix}
                    >
                        <img
                            className="portfolio-image"
                            src={project01}
                            alt="Netflix Clone Project..."
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                    {/* - */}
                    <div
                        className="portfolio-image-box"
                        onClick={openPopupboxCityGuide}
                    >
                        <img
                            className="portfolio-image"
                            src={project02}
                            alt="City Guide Project..."
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                    {/* - */}
                    <div
                        className="portfolio-image-box"
                        onClick={openPopupboxPortfolio}
                    >
                        <img
                            className="portfolio-image"
                            src={project03}
                            alt="Portfolio React and Material UI Project..."
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                    {/* - */}
                    <div
                        className="portfolio-image-box"
                        onClick={openPopupboxTaskManager}
                    >
                        <img
                            className="portfolio-image"
                            src={project04}
                            alt="Task Manager React and Redux Project..."
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNetflix} />
            <PopupboxContainer {...popupboxConfigCityGuide} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
            <PopupboxContainer {...popupboxConfigTaskManager} />
        </div>
    );
};

export default Pofrfolio;
