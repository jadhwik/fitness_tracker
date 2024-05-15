import { useState } from "react";
import yoga from "../assets/yogawomen.png";
import cycle from "../assets/cycling.png";
import running from "../assets/running.png";
import Indoor from "./Indoor";

const Main1 = () => {
  const [addIndoor, setIndoor] = useState(false);
  const [addOutdoor, setOutdoor] = useState(false);
  const [timer, setTimer] = useState(false);

  const handleTimer = () => {
    startTimer();
  };

  const HandleIndoor = () => {
    setIndoor(true);
  };

  const HandleOutdoor = () => {
    setOutdoor(true);
  };

  const Outdoor = () => {
    return (
      <>
        <div className="yoga">
          <div className="flex flex-col">
            <h className="text-xl p-5"> Yoga</h>
            <button
              className="w-16 h-10
           bg-white rounded-md p-2 mx-5"
            >
              Start
            </button>
          </div>
          <div>
            <img className="w-28" src={yoga}></img>
          </div>
        </div>

        <div className="cycling">
          <div className="flex flex-col">
            <h className="text-xl p-5">Cycling</h>
            <button
              className="w-16 h-10
           bg-white rounded-md p-2 mx-5"
            >
              Start
            </button>
          </div>
          <div>
            <img className="w-28" src={cycle}></img>
          </div>
        </div>

        <div className="running">
          <div className="flex flex-col">
            <h className="text-xl p-5">Running</h>
            <button
              className="w-16 h-10
           bg-white rounded-md p-2 mx-5"
            >
              Start
            </button>
          </div>
          <div>
            <img className="w-28" src={running}></img>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="activity">
        <div className="names">
          <button
            className="outdoor"
            onClick={() => {
              HandleOutdoor(), setIndoor(false);
            }}
          >
            Outdoor
          </button>
          <button
            className="indoor"
            onClick={() => {
              HandleIndoor(), setOutdoor(false);
            }}
          >
            Indoor
          </button>
        </div>
        {addOutdoor && <Outdoor></Outdoor>}
        {addIndoor && <Indoor></Indoor>}
      </div>
    </>
  );
};
export default Main1;
