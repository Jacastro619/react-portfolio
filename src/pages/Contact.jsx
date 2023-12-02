import { useState } from "react";
import isEmail from "validator/lib/isEmail";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [popupVisibility, setPopupVisibility] = useState({
    fullName: false,
    email: false,
    message: false,
  });

  const handleBlur = (fieldName) => {
    const trimmedValue = formData[fieldName].trim();
    if (trimmedValue === "") {
      setPopupVisibility((prevVisibility) => ({
        ...prevVisibility,
        [fieldName]: true,
      }));
    }
  };

  const handleFocus = (fieldName) => {
    setPopupVisibility((prevVisibility) => ({
      ...prevVisibility,
      [fieldName]: false,
    }));
  };

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label custom-form-label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            onBlur={() => handleBlur("fullName")}
            onFocus={() => handleFocus("fullName")}
            placeholder="John Doe"
            required
          />
          {popupVisibility.fullName && (
            <div className="popup-style">*Please fill in your name.</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label custom-form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            onFocus={() => handleFocus("email")}
            placeholder="email@example.com"
            required
          />
          {popupVisibility.email && (
            <div className="popup-style">*Please fill in your email.</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label custom-form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            onFocus={() => handleFocus("message")}
            required
          ></textarea>
          {popupVisibility.message && (
            <div className="popup-style">*Please fill in a message.</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#sentModal"
        >
          Send Contact Information
        </button>
      </form>
      {formData.fullName &&
        formData.email &&
        formData.message &&
        isEmail(formData.email) && (
          <div
            className="modal fade"
            id="sentModal"
            tabIndex="-1"
            aria-labelledby="sentModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="sentModalLabel">
                    Info Has Been Sent!
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  The information that was filled out has be sent!
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
