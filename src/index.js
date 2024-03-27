import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Ebox from "./Components/Ebox";
ReactDOM.render(
  <>
    <div className="w-full h-screen  flex gap-8 flex-col justify-center items-center bg-pink-200">
      <h1 className="font-black text-3xl text-pink-800">---Calculator---</h1>
      <Ebox />
    </div>
  </>,
  document.querySelector("#root")
);
