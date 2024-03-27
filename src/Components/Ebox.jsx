import React, { useState } from "react";

const Ebox = () => {
  const [first, setfirst] = useState("");
  const [sec, setsec] = useState("");
  const [r, setr] = useState(0);

  const preventp = (e) => {
    e.preventDefault();
    const result = parseInt(first) + parseInt(sec);
    if (isNaN(result)) {
      setr("What am I doing...🤔");
    } else {
      setr(result);
    }
  };

  const preventm = (e) => {
    e.preventDefault();
    const result = parseInt(first) - parseInt(sec);
    if (isNaN(result)) {
      setr("What am I doing...🤔");
    } else {
      setr(result);
    }
  };

  const preventi = (e) => {
    e.preventDefault();
    const result = parseInt(first) * parseInt(sec);
    if (isNaN(result)) {
      setr("What am I doing...🤔");
    } else {
      setr(result);
    }
  };

  const preventd = (e) => {
    e.preventDefault();
    const result = parseInt(first) / parseInt(sec);
    if (isNaN(result)) {
      setr("What am I doing...🤔");
    } else {
      setr(result);
    }
  };
  const preventmodu = (e) => {
    e.preventDefault();
    const result = parseInt(first) % parseInt(sec);
    if (isNaN(result)) {
      setr("What am I doing...🤔");
    } else {
      setr(result);
    }
  };
  const preventclr = (e) => {
    e.preventDefault();
    setr(0);
    setfirst("");
    setsec("");
  };
  return (
    <>
      <form className="w-64 h-96 border-white border-8  flex flex-col box-form rounded-xl bg-sky-400">
        <div className="flex justify-evenly w-full h-9 my-2">
          <input
            placeholder="0"
            className="w-20 h-9  text-xl text-center  rounded-md"
            value={first}
            onChange={(e) => {
              setfirst(e.target.value);
            }}
          />
          <input
            placeholder="0"
            className="w-20 h-9 text-xl text-center rounded-md"
            value={sec}
            onChange={(e) => {
              setsec(e.target.value);
            }}
          />
        </div>
        <div className="w-full h-64 grid grid-cols-3">
          <button
            onClick={preventp}
            className="w-12 h-18 m-5 text-2xl text-white font-extrabold text-center rounded-md bg-green-500"
          >
            +
          </button>
          <button
            onClick={preventm}
            className="w-12 h-18 m-5 text-2xl text-white font-extrabold text-center rounded-md bg-green-500"
          >
            -
          </button>
          <button
            onClick={preventi}
            className="w-12 h-18 m-5 text-2xl text-white font-extrabold text-center rounded-md bg-green-500"
          >
            *
          </button>
          <button
            onClick={preventd}
            className="w-12 h-18 m-5 text-2xl text-white font-extrabold text-center rounded-md bg-green-500"
          >
            /
          </button>
          <button
            onClick={preventmodu}
            className="w-12 h-18 m-5 text-2xl text-white font-extrabold text-center rounded-md bg-green-500"
          >
            %
          </button>

          <button
            onClick={preventclr}
            className="ac w-12 h-18 m-5 text-2xl text-white font-extrabold text-center rounded-md "
          >
            AC
          </button>
        </div>
        <h1 className="text-white w-full h-3 text-center text-2xl ">
          Ans:- {r}
        </h1>
      </form>
    </>
  );
};

export default Ebox;
