import React from "react";
import "./Header";
export default function Footer() {
  return (
    <div id="footer" className="footer">
      <p style={{ fontSize: "0.7rem", textAlign: "center" }}>
        &copy; 2018-{new Date().getFullYear()}{" "}
        <a
          href="https://sumanonline.com"
          target="_blank"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          SumanOnline.com
        </a>{" "}
        | All Rights Reserved.
      </p>
    </div>
  );
}
