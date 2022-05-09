import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Autonomous = () => {
  const [shortDistShooter, setShortDistShooter] = useState<number>(3.7);
  const [midDistShooter, setMidDistShooter] = useState<number>(3.9);
  const [longDistShooter, setLongDistShooter] = useState<number>(4.2);
  const [leftTurning, setLeftTurning] = useState<number>(37);
  const [rightTurning, setRightTurning] = useState<number>(35);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('http://127.0.0.1:8883/getall');
        const data = await res.data;
        setShortDistShooter(data.shortDistShooter);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('http://127.0.0.1:8883/getall');
        const data = await res.data;
        setMidDistShooter(data.midDistShooter);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('http://127.0.0.1:8883/getall');
        const data = await res.data;
        setLongDistShooter(data.longDistShooter);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('http://127.0.0.1:8883/getall');
        const data = await res.data;
        setLeftTurning(data.leftTurning);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('http://127.0.0.1:8883/getall');
        const data = await res.data;
        setRightTurning(data.rightTurning);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);


//   const displayRoutine = () => {
//     if (routine === 0) return 'One ball';
//     if (routine === 1) return 'Two ball';
//     if (routine === 2) return 'Nothing';
//     return 'No routine';
//   };

  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col p-4">
      <Link to="/home" className="text-neutral-400 flex items-center">
        <FiArrowLeft className="text-neutral-400 mr-2" size={16} />
        Home
      </Link>
      <div className="pt-4">
        <h1 className="text-4xl text-white font-medium">AutoAim Shooter Settings</h1>
        {/* <p className="text-base text-neutral-400">
          Select autonomous routine to run
        </p> */}
      </div>
      <div className="pt-8">
        {/* <p className="text-neutral-300 pb-4">
          Current routine: wasdwasd
        </p> */}
        <div className="flex justify-center grid grid-cols-2 grid-rows-5 gap-y-5">
          <label className= "text-3xl text-white font-sm w-auto" htmlFor="shortDist"> Current Short Distance Flywheel Speed: <em><b>{shortDistShooter}</b></em></label>    
          <input
            type="number"
            id="shortDist"
            className="inline-block px-4 py-4 rounded-md bg-neutral-700 text-white outline outline-4 outline-lime-900"
            placeholder = "Default: 3.7"
          />
          <label className= "text-3xl text-white font-sm" htmlFor="midDist">Current Medium Distance Flywheel Speed: <em><b>{midDistShooter}</b></em></label>      
          <input
            type="number"
            id="midDist"
            className="inline-block px-4 py-4 rounded-md bg-neutral-700 text-white outline outline-4 outline-lime-900"
            placeholder = "Default: 3.9"
          />
          <label className= "text-3xl text-white font-sm" htmlFor="longDist">Current Long Distance Flywheel Speed: <em><b>{longDistShooter}</b></em></label>      
          <input
            type="number"
            id="longDist"
            className="inline-block px-4 py-4 rounded-md bg-neutral-700 text-white outline outline-4 outline-lime-900"
            placeholder = "Default: 4.2"
          />
          <label className= "text-3xl text-white font-md" htmlFor="rightTurning">Current Right Turn Swerve Speed: <em><b>{rightTurning}</b></em></label>      
          <input
            type="number"
            id="rightTurning"
            className="inline-block px-4 py-4 rounded-md bg-neutral-700 text-white outline outline-4 outline-lime-900"
            placeholder = "Default: 35"
          />
 
          <label className= "text-3xl text-white font-md" htmlFor="leftTurning">Current Left Turn Swerve Speed: <em><b>{leftTurning}</b></em></label>
          <input
            type="number"
            id="leftTurning"
            className="inline-block px-4 py-4 rounded-md bg-neutral-700 text-white outline outline-4 outline-lime-900"
            placeholder = "Default: 37"
          />
      
        </div>
        <button
            type="button"
            className="flex flex-col justify-center items-center inline-block px-16 py-8 rounded-md bg-neutral-700 text-white text-4xl bg-green-500/20"
            onClick={async () => {
              if(parseInt((document.getElementById("shortDist") as HTMLInputElement).value) != null){
                try {
                    const res = await axios.post(
                    'http://127.0.0.1:8883/double/set',
                    {
                        key: 'shortDist',
                        value: parseFloat((document.getElementById("shortDist") as HTMLInputElement).value)
                    
                    }
                );
                    console.log(await res.data);
                }   catch (e) {
                    console.log(e);
                }
            }
            if(parseInt((document.getElementById("midDist") as HTMLInputElement).value) != null){
                try {
                    const res = await axios.post(
                    'http://127.0.0.1:8883/double/set',
                    {
                        key: 'midDist',
                        value: parseFloat((document.getElementById("midDist") as HTMLInputElement).value)
                    
                    }
                );
                    console.log(await res.data);
                }   catch (e) {
                    console.log(e);
                }
            }
            if(parseInt((document.getElementById("longDist") as HTMLInputElement).value) != null){
                try {
                    const res = await axios.post(
                    'http://127.0.0.1:8883/double/set',
                    {
                        key: 'longDist',
                        value: parseFloat((document.getElementById("longDist") as HTMLInputElement).value)
                    
                    }
                );
                    console.log(await res.data);
                }   catch (e) {
                    console.log(e);
                }
            }
            if(parseInt((document.getElementById("rightTurning") as HTMLInputElement).value) != null){
                try {
                    const res = await axios.post(
                    'http://127.0.0.1:8883/double/set',
                    {
                        key: 'rightTurning',
                        value: parseFloat((document.getElementById("rightTurning") as HTMLInputElement).value)
                    
                    }
                );
                    console.log(await res.data);
                }   catch (e) {
                    console.log(e);
                }
            }
            if(parseInt((document.getElementById("leftTurning") as HTMLInputElement).value) != null){
                try {
                    const res = await axios.post(
                    'http://127.0.0.1:8883/double/set',
                    {
                        key: 'leftTurning',
                        value: parseFloat((document.getElementById("leftTurning") as HTMLInputElement).value)
                    
                    }
                );
                    console.log(await res.data);
                }   catch (e) {
                    console.log(e);
                }
            }
        }
    }
          >
              Enter
        </button>
      </div>
    </div>
  );
};

export default Autonomous;
