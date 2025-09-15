import React, { useState } from "react";
import "./Header.css";
import weblogo from "./assets/img/sumanOnline_logo.png";
export default function Header({ Info }) {
  let Message = () => {
    alert("F**k you!\nDon't try to download Pic. 🖕");
  };
  let [showPic, setShowPic] = useState(false);
  let showPicture;
  if (showPic) {
    showPicture = (
      <>
        <p>SumanOnline.Com</p>
        <button className="btn" onClick={() => setShowPic(false)}>
          Hide Tagline
        </button>
      </>
    );
  } else {
    showPicture = (
      <button className="btn" onClick={() => setShowPic(!false)}>
        Show Tagline
      </button>
    );
  }
  let displayLogo;
  if (Info.showLogo) {
    displayLogo = <img src={weblogo} alt="newLogo" />;
  } else {
    displayLogo = "";
  }
  return (
    <div className="header">
      <>
        {/* <img src="src/assets/img/sumanOnline_logo.png" alt="Sumanonline" /> */}
        {/* <img src={weblogo} alt="new" onClick={Message} /> */}
        {displayLogo}
      </>
      {showPicture}
    </div>
  );
}
