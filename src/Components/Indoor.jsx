import study from "../assets/studying.png";
import reading from "../assets/reading.png";
import skipping from "../assets/skipping.png";
const Indoor = () => {
  return (
    <div className="indoor">
      <div className="studying">
        <div className="flex flex-col">
          <h className="text-xl p-5">Studying</h>
          <button
            className="w-16 h-10
           bg-white rounded-md p-2 mx-5"
          >
            Start
          </button>
        </div>
        <div>
          <img className="w-48 h-40" src={study}></img>
        </div>
      </div>

      <div className="reading">
        <div className="flex flex-col">
          <h className="text-xl p-5">Reading</h>
          <button
            className="w-16 h-10
           bg-white rounded-md p-2 mx-5"
          >
            Start
          </button>
        </div>
        <div>
          <img className="w-48 h-40" src={reading}></img>
        </div>
      </div>

      <div className="skipping">
        <div className="flex flex-col">
          <h className="text-xl p-5">Skipping</h>
          <button
            className="w-16 h-10
           bg-white rounded-md p-2 mx-5"
          >
            Start
          </button>
        </div>
        <div>
          <img className="w-48 h-40" src={skipping}></img>
        </div>
      </div>
    </div>
  );
};
export default Indoor;
