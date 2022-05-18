import React,{ useState } from 'react'
import { useEffect } from 'react';
import styles from './stop.module.css';

const StopWatch = (props) => {
    let [hour,setHour]=useState(0);
    let [sec,setSec]=useState(0);
    let [min,setMin]=useState(0);
    let [num,setNum]=useState(false);

    var timer;
    useEffect(()=>{
      if(num){
        timer = setInterval(()=>{
          setSec(sec+1);
          if(sec===59){
            setMin(min+1);
            setSec(0);
          }
          if(min==59){
            setHour(hour+1);
            setMin(0);
          }
        }, 15);
      }
      return ()=> clearInterval(timer);
    })
     
  return (
      <>
    <div className={styles.header}>
     {hour ? <h1 style={{"margin-left": "10px","font-weight":"500", "height": "30px"}}>{hour < 10 ? "0"+hour : hour} <span style={{"font-size" : "15px"}}>M</span></h1> : null}
     <h1 style={{"margin-left": "10px","font-weight":"500", "height": "30px"}}>{min < 10 ? "0"+min : min} <span style={{"font-size" : "15px"}}>S</span></h1>
     <h3 style={{"font-size" : "20px", "margin-left": "10px", "margin-top" : "20px","font-weight":"500"}}>{sec < 10 ? "0"+sec : sec}</h3>
    </div>
    <div>
        <button className='kk' onClick={()=>setNum(!num)}>{num ? "Stop" : "Start"}</button>
        <button className='kk' onClick={()=>{
          setHour(0);
          setMin(0);
          setSec(0);
          setNum(!num)
        }}>Reset</button>
    </div>
    </>
  )
}

export default StopWatch
