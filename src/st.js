import "./st.css";
import React, { useState } from "react";

const St = () => {
  const [addEvent, setAddEvent] = useState(true);
  const [editEvent, setEditEvent] = useState(false);
  const [textArea, setTextArea] = useState("");

  function handleTextAreaChange(e) {
    setTextArea(e.target.value);
  }
  return (
    <>
      <button
        onClick={() => {
          setAddEvent(!addEvent);
          setEditEvent(!editEvent);
        }}
        type="button"
        style={{ zIndex: 12000 }}
      >
        Toggle
      </button>
      ;
      {addEvent && (
        <div className="mm-popup mm-popup--visible">
          <div className="mm-popup__overlay"></div>
          <artical className="mm-popup__box">
            <button className="mm-popup__close"></button>
            <header className="mm-popup__box__header">
              <h1 className="mm-popup__box__header__title">Create Event</h1>
            </header>
            <div className="mm-popup__box__body">
              <div>
                <input
                  type="text"
                  placeholder="Event Title"
                  className="mm-popup__input"
                  value=""
                ></input>
                <input
                  type="text"
                  placeholder="Event Location"
                  className="mm-popup__input"
                  value=""
                ></input>
                <input
                  type="text"
                  placeholder="Event Location"
                  className="mm-popup__input"
                  value=""
                ></input>
                <textarea
                  className="mm-popup__input"
                  placeholder="Describe event"
                  value={textArea}
                  rows={5}
                  style={{ height: "8rem" }}
                  onChange={(e) => handleTextAreaChange(e)}
                />
              </div>
            </div>
            <footer className="mm-popup__box__footer">
              <div className="mm-popup__box__footer__left-space">
                <button className="mm-popup__btn mm-popup__btn--cancel">
                  Cancel
                </button>
              </div>
              <div className="mm-popup__box__footer__right-space">
                <button className="mm-popup__btn mm-popup__btn--success">
                  Save
                </button>
              </div>
            </footer>
          </artical>
        </div>
      )}
      {/* view event */}
      {editEvent && (
        <div className="mm-popup mm-popup--visible">
          <div role="presentation" className="mm-popup__overlay"></div>
          <article
            role="dialog"
            tabindex="-1"
            className="mm-popup__box"
            style={{ opacity: "1", outline: "none" }}
          >
            <button className="mm-popup__close"></button>
            <header className="mm-popup__box__header">
              <h1 className="mm-popup__box__header__title">{`title`}</h1>
            </header>
            <div className="mm-popup__box__body">
              <div>
                <p>
                  Date: <strong>{`June 2, 2023`}</strong>
                </p>
                <p>Location: {`location`}</p>
              </div>
            </div>
            <footer className="mm-popup__box__footer">
              <div className="mm-popup__box__footer__left-space"></div>
              <div className="mm-popup__box__footer__right-space">
                <button className="mm-popup__btn mm-popup__btn--info">
                  Edit
                </button>
                <button className="mm-popup__btn mm-popup__btn--danger">
                  Delete
                </button>
              </div>
            </footer>
          </article>
        </div>
      )}
    </>
  );
};

export default St;
