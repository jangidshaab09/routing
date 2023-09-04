/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DownArrow from "./images/down-arrow.svg";

function Section({photo, name, tagline, leftBtn, rightBtn, shaitan}) {
  return (
    <section style={{ backgroundImage: "url(" + photo + ")" }}>
      <div className="carName">
        <h1>{name}</h1>
        <p>{tagline}</p>
      </div>

      <div className="cta">
        <div className="buttons">
          <a href="" id="custom">
            {leftBtn}
          </a>
          {rightBtn ? (
            <a href="" id="existing">
              {rightBtn}
            </a>
          ) : (
            ""
          )}
        </div>
        {shaitan ? <img src={DownArrow} alt="Down Arrow" /> : ""}
      </div>
    </section>
  );
}

export default Section;
