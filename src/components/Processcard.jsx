import { CiSquarePlus } from "react-icons/ci";
import { PiDotsThreeBold } from "react-icons/pi";
import StateButton from "./StateButton";
import { LiaCommentsSolid } from "react-icons/lia";
import Participants from "./Participants";
import ProgressBar from "./ProgressBar";

const Processcard = () => {
  return (
    <div className="md:max-w-96">
      <div className="bg-gradient-to-b from-slate-100 to-zinc-200 p-4 rounded-lg ">
        <div className="flex flex-row justify-between pt-3">
          <h2 className="text-2xl">In Process</h2>
          <CiSquarePlus size={30} />
        </div>

        {/* task content */}

        <div className="flex flex-col my-2 bg-white rounded-md p-4">
          <div className="flex flex-row justify-between">
            <div className="right">
              <div className="flex flex-row">
                <input type="checkbox" className="bg-sky-500/100 w-10"></input>
                <p className="font-bold ml-3">Company Page</p>
              </div>
            </div>
            <div className="left mt-1">
              <PiDotsThreeBold />
            </div>
          </div>
          <div className="py-4 px-2 font-semibold">
            Improve the rendering of the page in the cart on mobile devices.
          </div>
          <div className="flex flex-wrap flex-row w-3/4 gap-2">
            <StateButton status="Optimization" />
            <StateButton status="New Project" />
            <StateButton status="Design" />
          </div>
          <section className="flex flex-row py-2 gap-2 items-center">
            <Participants />
            <button className=" text-gray-500 capitalize rounded-lg font-bold flex row gap-2 ">
              comments
              <LiaCommentsSolid size={25} />
            </button>
          </section>
          <div>
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Processcard;
