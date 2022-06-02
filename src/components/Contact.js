import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import secrets from "./secrets.json";

let userID;
if (process.env.NODE_ENV !== "production") {
    userID = secrets.KEY;
} else {
    userID = process.env;
}

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID"; //ID of service used
    const templateID = "template_ID"; //ID of template used
    // const userID = "5Zvmnz0YWHS59_1O4";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description,
            },
            userID
        );
        r.target.reset();
    };

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs
            .send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent successfully!");
            })
            .catch((err) => console.error(`Something went wrong ${err}`));
    };

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>
                    Please fill out the form, describe your project needs and
                    I'll contact you as soon as possible.
                </p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    autoComplete="off"
                                    ref={register({
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 20,
                                            message:
                                                "Please enter a name with fewer than 20 characters",
                                        },
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                    autoComplete="off"
                                    ref={register({
                                        required:
                                            "Please add your phone number",
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    autoComplete="off"
                                    ref={register({
                                        required: "Please provide you email",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid Email",
                                        },
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    autoComplete="off"
                                    ref={register({
                                        required:
                                            "Upsi, you forget to add the subject.",
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Description..."
                                    name="description"
                                    autoComplete="off"
                                    ref={register({
                                        required: "Description",
                                    })}
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.description &&
                                    errors.description.message}
                            </span>
                            <button
                                className="btn-main-offer contact-btn"
                                type="submit"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
