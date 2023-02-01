import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hex, index, type }) => {
  const [alert, setAlert] = useState(false);
  const backColor = rgb.join(",");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText("#" + hex);
  };

  return (
    <article
      className={`color ${index > 10 && `color-light`}`}
      style={{ background: `rgb(${backColor})` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">#{hex}</p>
      <p className="color-value">
        <u>{type}</u>
      </p>
      {alert && <p>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
