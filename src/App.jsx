import './App.css'
import { useState, useEffect, useRef } from 'react'
function App() {

  const [otp, setotp] = useState(0);
  const [timeLeft, setTimeLeft]=useState(0);
  const [isRunning, setIsRunning] =useState(false);
  const timerRef=useRef(null);
  const handleOtp=()=>{
    setotp(Math.floor(100000+Math.random()*900000));
    setTimeLeft(5);
    setIsRunning(true);
  }
  useEffect(()=>{
    if(timeLeft > 0 && isRunning){
      timerRef.current=setTimeout(()=>{
        setTimeLeft(prev=>prev-1);
      },1000)
    }

    if(isRunning && timeLeft === 0){
      setIsRunning(false);
      clearTimeout(timerRef.current);
    }
    return ()=>clearTimeout(timerRef.current);
  },[timeLeft, isRunning])
  return (
    <div className="otp-generator">
      <h1>OTP Generator</h1>
    {!otp ? 
      (<h2 className="otp-details">Click 'Generate OTP' to get a code</h2>)
      :(<h2 className="otp-details">{otp}</h2>)
    }

      
      <p className="otp-timer">
        {timeLeft > 0
        ?`Expires in : ${timeLeft} seconds`
        : timeLeft === 0 && otp
        ? "OTP expired. Click the button to generate a new OTP."
        :""

        }
      </p>
      <button className="otp-btn" onClick={handleOtp} disabled={isRunning}>Generate OTP</button>
    </div>
  )
}

export default App