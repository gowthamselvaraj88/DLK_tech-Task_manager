import React, { useState, useRef } from 'react';
import axios from 'axios';

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({ mm: 0, ss: 0, ms: 0 });
  const [hidden,setHidden] = useState(false);
  // const [timercount,setTimerCount]=useState("");

  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime(prevTime => {
        let { mm, ss, ms } = prevTime;
        ms++;
        if (ms >= 100) {
          ss++;
          ms = 0;
        }
        if (ss >= 60) {
          mm++;
          ss = 0;
        }
        return { ...prevTime, mm, ss, ms };
      });
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const startClickHandler =async (e) => {
    if (!isRunning) {
      startTimer();
      setIsRunning(true);
      setHidden(true);
    }
    const id = window.sessionStorage.getItem("id")
    console.log(id,"id-session")
    try {const res = await axios.post("http://localhost:8080/start/"+id);
    console.log(res,"started")      
    } catch (error) {
      console.log("Error occured")
    }
  };

  const stopClickHandler = async(e) => {
    if (isRunning) {
      stopTimer();
      setIsRunning(false); 
     }
    try {const res = await axios.post("http://localhost:8080/submit/");
    console.log(res,"response")
    alert("Successfully Task Submitted.")
      
    } catch (error) {
      console.log("Error occured")
    }

  };

  // Function to format time to display as two digits
  const format = num => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="stop-watch">
      <div>
        <span>{format(time.mm)}</span>:
        <span>{format(time.ss)}</span>:
        <span>{format(time.ms)}</span>
      </div>
      {!hidden?<button className="control" onClick={startClickHandler} disabled={isRunning}>
        Take Test
      </button>:<button className="control" onClick={stopClickHandler} disabled={!isRunning}>
        submit
      </button>
      }
    </div>
  );
}

export default StopWatch;
