import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Timer.css";

export const Timer = () => {
  const [set, setset] = useState(0);
  const [Minuts, SetMinuts] = useState(set);
  const [sec, SetSec] = useState(0);
  const [show, setShow] = useState(false);
  const [dat, setDat] = useState("");
  const [mh, setMh] = useState(5);
  const [le, setLe] = useState(0);
  const [bh, setBh]= useState(false);


  var time;
  useEffect(() => {
    if (bh) {
      time = setInterval(() => {
        setLe(Math.abs(le - 1));
        if (le == 0) {
          setMh(mh - 1);
          setLe(59);
        }
      }, 1000);
    }
    return () => clearInterval(time);
  });


  var timer;
  useEffect(() => {
    if (show) {
      timer = setInterval(() => {
        SetSec(Math.abs(sec - 1));
        if (Minuts < 0) {
          SetMinuts(0);
        }
        if (sec == 0) {
          SetMinuts(Minuts - 1);
          SetSec(59);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  });

  return (
    <>
      {dat == "m" ? (
        <div className="main-01">
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Set Timer"
              onChange={(e) => setset(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              //   setShow(true);
              SetMinuts(set);
            }}
            className="kk"
          >
            Add Time
          </button>
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="kk"
          >
            {show ? "Stop" : "Start"}
          </button>
          <button
            onClick={() => {
             setset(0);
             SetMinuts(0);
             SetSec(0);
             setShow(false)
            }}
            className="kk"
          >
            Clear All
          </button>
          <div className="mn">
            <h1>
              {Minuts} <span style={{ "font-size": "15px" }}>M</span>
            </h1>
            <h3 style={{ "margin-top" : "22px","font-weight" : "500", "margin-left" : "10px",}}>{sec}</h3>
          </div>
        </div>
      ) : null}
      {/*  */}
      {dat == "n" ? <div className="main-01">
          <div className="jh">
          <h1>{mh < 10 ? "0"+mh : mh} <span style={{ "fontSize": "15px","font-weight" : "500" }}>M</span></h1>
          <h3 style={{ "margin-top" : "22px","font-weight" : "500", "margin-left" : "10px",}}>{le < 10 ? "0"+le : le}</h3>
          </div>
          <div className="jg">
              <button onClick={()=>{
                  setBh(!bh)
              }}
              className="kk">{bh ? "Stop" : "Start"}</button>
              <button onClick={()=>{
                  setLe(0);
                  setMh(5);
                  setBh(!bh);
              }} className="kk">Reset</button>
          </div>
      </div> : null}
      {/*  */}
      <div className="mv">
        <button
          onClick={() => {
            setDat("m");
          }}
          className="gd"
        >
          Set By Input
        </button>
        <button
          onClick={() => {
            setDat("n");
          }}
          className="gd"
        >
          Set by AutoSet
        </button>
      </div>
    </>
  );
};
