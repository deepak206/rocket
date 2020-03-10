import React, {useEffect, useState } from "react";

function CountDownTimer(props) {
    const calculateTimeLeft = () => {
      var date1 = new Date(props.date * 1000);
      const difference = date1.getTime() - +new Date().getTime();
      let timeLeft = {};
      if (difference > 0 && props.type === "header") {
        timeLeft = {
          //days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24) + (Math.floor(difference / (1000 * 60 * 60 * 24)) * 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      if (difference > 0 && props.type === "list") {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          //seconds: Math.floor((difference / 1000) % 60)
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });
  
    const timerComponents = [];
    var count = 1;
    Object.keys(timeLeft).forEach(interval => {
      if(count < 3){
  
      timerComponents.push(
        String(timeLeft[interval]).padStart(2, '0') + ":"
      );
      } else {

      timerComponents.push(
        String(timeLeft[interval]).padStart(2, '0')
    );
      }

      count++;
    });

    return (
      <>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </>
    );
  }
  
  export default CountDownTimer;