import { BsArrowRight } from "react-icons/bs";
// import {PiPlusBold} from 'react-icons/pi';
import AddCircle from "../assets/add-Whitecircle.svg";
import Create from "../assets/Create1.svg";
import Create2 from "../assets/CreateDesign2.svg";
import Create3 from "../assets/CreateDesign3.svg";
import Create7 from "../assets/CreateDesign7.svg";
import Create4 from "../assets/CreateDesign4.svg";
import Create5 from "../assets/CreateDesign5.svg";
import Create6 from "../assets/CreateDesign6.svg";
import Create9 from "../assets/CreateDesign9.svg";
import { Link } from "react-router-dom";

{
  /* <BsArrowRight/> */
}
// <PiPlusBold/>
export const CreateDesign = () => {
  return (
    <>
      <div className="mt-14 flex justify-center ">
        <div className="  text-center  ">
          <h3 className="sm:text-4xl text-3xl font-sfMedium  ">
            Lets get creative
          </h3>
          <p className="mt-4 text-center sm:text-base text-sm text-secondary-100 font-sfRegular">
            Let us help you bring your design to life, select a design type
            provide inspiration and what you
            <br className="sm:block hidden"></br>would like to see in the
            design, communicate with designers to get a better understanding of
            your<br className="sm:block hidden"></br> idea and how to go about
            it
          </p>
          <div className=" flex justify-between items-center lg:w-[50vw] md:w-[66vw] sm:w-[75vw] w-[100vw] h-[12vh] rounded-2xl  bg-light-200 relative shadow-xl mt-8 px-3  py-5">
            <h3 className="ps-3">Select design type</h3>
            <Link to="/designForm">
              <BsArrowRight className="mt-1 sm:me-2 w-[24px] h-[24px]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex  mt-14 sm:mx-10">
        <div className="">
          <h1 className="text-xl font-normal font-family">Get inspired</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 sm:mt-3 mt-3 md:mx-10 sm:mx-5  myOverflow  scroll-snap">
        <div className="relative">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create5} alt="" />
          </Link>
          <Link className="absolute  top-3 right-2 ">
            <img src={AddCircle} alt="icon" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create4} alt="" />
          </Link>
          <Link className="absolute  top-3 right-2">
            <img src={AddCircle} alt="icon" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create6} alt="" />
          </Link>
          <Link className="absolute  top-3 right-2 ">
            <img src={AddCircle} alt="icon" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create9} alt="" />
          </Link>
          <Link className="absolute  top-3 right-2 ">
            <img src={AddCircle} alt="icon" />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 sm:mt-3 mt-3 md:mx-10 sm:mx-5  myOverflow  scroll-snap">
        <div className="relative">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create3} alt="" />
          </Link>
          <Link className="absolute  top-3 right-2 ">
            <img src={AddCircle} alt="icon" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create7} alt="" />
          </Link>
          <Link className="absolute  top-3 right-2">
            <img src={AddCircle} alt="icon" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create2} alt="" />
          </Link>
          <Link className="absolute top-3 right-2 ">
            <img src={AddCircle} alt="icon" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create} alt="" />
          </Link>
          <Link className="absolute top-3 right-2">
            <img src={AddCircle} alt="icon" />
          </Link>
        </div>
      </div>
      <div className="mt-14 flex justify-center mb-10 ">
        <div className="text-lg border border-dark-100 px-12 rounded-md py-2 text-center hover:bg-dark-100 hover:text-light-200 transition ease-out duration-500 font-sfRegular">
          <button>Load More</button>
        </div>
      </div>
    </>
  );
};
