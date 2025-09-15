import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Header.css";
// import "./App.css";
import mButton from "./Button.module.css";

export default function App1() {
  let [status, setStatus] = useState(false);
  return (
    <div>
      <button className={mButton.normal} onClick={() => setStatus(!status)}>
        {!status ? "Show Nav" : "Hide Nav"}
      </button>
      {status ? <p className="abc">SumanOnline.Com</p> : <br />}
      <br />
      <br />
      <br />
      <br />
      <button className={mButton.error}>Error</button>
      <br />
      <button className={mButton.warning}>Warning</button>
      <br />
      <button className={mButton.success}>Success</button>
      <h1
        style={{ textAlign: "center", fontWeight: "bold", marginTop: "30px" }}
      >
        Testing to Cheack
      </h1>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
