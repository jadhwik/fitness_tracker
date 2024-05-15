import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashBoard = () => {
  const percentage = 50;
  return (
    <div className="outdash">
      <div className="bar">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          minValue={0}
          maxValue={100}
          styles={buildStyles({
            pathColor: "orange",
            textColor: "black",
            trailColor: "#60605c9f",
          })}
        />
        <h3>Yoga</h3>
      </div>
      <div className="bar">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          minValue={0}
          maxValue={100}
          styles={buildStyles({
            pathColor: "orange",
            textColor: "black",
            trailColor: "#60605c9f",
          })}
        />
        <h3>Cycling</h3>
      </div>
      <div className="bar">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          minValue={0}
          maxValue={100}
          styles={buildStyles({
            pathColor: "orange",
            textColor: "black",
            trailColor: "#60605c9f",
          })}
        />
        <h3>Running</h3>
      </div>
      <div className="bar">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          minValue={0}
          maxValue={100}
          styles={buildStyles({
            pathColor: "orange",
            textColor: "black",
            trailColor: "#60605c9f",
          })}
        />
        <h3>Studying</h3>
      </div>
      {/* <div className="bar">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          minValue={0}
          maxValue={100}
          styles={buildStyles({
            pathColor: "orange",
            textColor: "black",
            trailColor: "#60605c9f",
          })}
        />
        <h3>Reading</h3>
      </div>
      <div className="bar">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          minValue={0}
          maxValue={100}
          styles={buildStyles({
            pathColor: "orange",
            textColor: "black",
            trailColor: "#60605c9f",
          })}
        />
        <h3>Skipping</h3>
      </div> */}
    </div>
  );
};
export default DashBoard;
