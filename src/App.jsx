import { useState } from "react";
import Main1 from "./Components/Main1";
import DashBoard from "./Components/Dashboard";
import Date from "./Components/Date";
import Timer from "./Components/Timer";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <Date></Date>
      </div>
      <div className="flex flex-col items-center">
        <div className="container mx-auto flex flex-row">
          {/* <h1 className="text-4xl m-5">Fitness Tracker</h1> */}

          <Main1></Main1>

          <DashBoard></DashBoard>
          <Timer></Timer>
        </div>
      </div>
    </>
  );
}

export default App;
