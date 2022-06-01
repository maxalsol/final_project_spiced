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

const Portfolio = () => {
    // project01
    const openPopupboxProject01 = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={project01}
                    alt="Connect 4 Project"
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                    cumque illo est expedita quos adipisci suscipit unde itaque
                    qui perferendis.
                </p>
                {/* <b>GitHub:</b>{" "}
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            "https://github.com/8020Coding/netflix-project"
                        )
                    }
                >
                    https://github.com/8020Coding/netflix-project
                </a> */}
            </>
        );
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Connect 4 Project.",
                },
            },
        });
    };

    const popupboxConfigProject01 = {
        titleBar: {
            enable: true,
            text: "Connect 4 Project.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    // project02
    const openPopupboxProject02 = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={project02}
                    alt="Petition Project"
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                    cumque illo est expedita quos adipisci suscipit unde itaque
                    qui perferendis.
                </p>
                {/* <b>Demo:</b>{" "}
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
                </a> */}
            </>
        );
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Petition Project.",
                },
            },
        });
    };

    const popupboxConfigProject02 = {
        titleBar: {
            enable: true,
            text: "Petition Project.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    // project03
    const openPopupboxProject03 = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={project03}
                    alt="Imageboard Project"
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                    cumque illo est expedita quos adipisci suscipit unde itaque
                    qui perferendis.
                </p>
                {/* <b>Demo:</b>{" "}
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
                </a> */}
            </>
        );
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Imageboard Project.",
                },
            },
        });
    };

    const popupboxConfigProject03 = {
        titleBar: {
            enable: true,
            text: "Imageboard Project.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    // project04
    const openPopupboxProject04 = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={project04}
                    alt="Social Network Project"
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                    cumque illo est expedita quos adipisci suscipit unde itaque
                    qui perferendis.
                </p>
                {/* <b>Demo:</b>{" "}
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
                </a> */}
            </>
        );
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Social Network Project.",
                },
            },
        });
    };

    const popupboxConfigProject04 = {
        titleBar: {
            enable: true,
            text: "Social Network Project.",
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
                        onClick={openPopupboxProject01}
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
                        onClick={openPopupboxProject02}
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
                        onClick={openPopupboxProject03}
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
                        onClick={openPopupboxProject04}
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
            <PopupboxContainer {...popupboxConfigProject01} />
            <PopupboxContainer {...popupboxConfigProject02} />
            <PopupboxContainer {...popupboxConfigProject03} />
            <PopupboxContainer {...popupboxConfigProject04} />
        </div>
    );
};

export default Portfolio;
