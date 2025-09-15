import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Header.css";

export default function App() {
  let displayData = () => {
    alert("Welcome to SumanOnline React Project");
  };
  let add = (a, b) => {
    alert(x + " x 2 = " + a * b);
  };
  let count0 = () => {
    setCount(count + 1);
  };
  let [count, setCount] = useState(0);
  let x = count;

  let [showLogo, setshowLogo] = useState(true);
  return (
    <div>
      <Header Info={{ setshowLogo, showLogo }} />
      <h1 className="text-[40px] text-center text-red-700 font-bold">
        Hello world!
      </h1>
      <p className="text-center text-green-800 font-medium">
        a SumanOnline Website
      </p>
      <button className="bg-red-500 p-3 btn" onClick={displayData}>
        Click Here
      </button>
      <br />
      <br />
      <button className="btn" onClick={() => add(x, 2)}>
        Claculate {x} x 2
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button className="btn" onClick={count0}>
        Click Count
      </button>
      <p className="text-center py-2">You have clicked {count} times.</p>

      <button className="btn" onClick={() => setshowLogo(!true)}>
        Hide Logo
      </button>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
