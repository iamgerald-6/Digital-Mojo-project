// import { FiSearch } from 'react-icons/fi';
import AddCircle from "../assets/add-Whitecircle.svg";
import SearchIcon from "../assets/search-icon.png";

import Create from "../assets/Create1.svg";
import Create2 from "../assets/CreateDesign2.svg";
import Create3 from "../assets/CreateDesign3.svg";
import Create7 from "../assets/CreateDesign7.svg";
import Create4 from "../assets/CreateDesign4.svg";
import Create5 from "../assets/CreateDesign5.svg";
import Create6 from "../assets/CreateDesign6.svg";
import Create9 from "../assets/CreateDesign9.svg";
import { Link } from "react-router-dom";

export const Inspire = () => {
  return (
    <>
      <div className="mt-14 flex justify-center ">
        <div className="  text-center ">
          <h3 className=" tracking-wide text-4xl font-sfMedium  ">
            Inspire our design
          </h3>
          <p className="mt-3 text-center text-base font-sfRegular text-secondary-100">
            Help designers better understand and give you the best results by
            sharing designs you love and
            <br className="sm:block hidden" /> also what you love about those
            designs,
            <span className="text-black">
              example (brand colors, Imagery, layout Etc)
            </span>
          </p>
          <form className="lg:w-[50vw] md:w-[66vw] sm:w-[75vw] w-[100vw] h-[12vh] rounded-2xl mt-5 bg-light-200 relative shadow-xl ">
            <img
              className="w-[24px] h-[22px] absolute xl:top-[39%] lg:top-[37%] md:top-[37%] sm:top-[37%] top-[36%] left-6"
              src={SearchIcon}
              alt="search"
            />
            <input
              className="lg:w-[50vw] md:w-[66vw] sm:w-[70vw] w-[85vw] h-[10vh] pt-3.5 outline-transparent rounded-[23px] ps-11 text-secondary-100 placeholder-secondary-100 text-lg"
              type="search"
              placeholder="Search for design"
            />
          </form>
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 sm:mt-20 mt-20 md:mx-10 sm:mx-5  myOverflow  scroll-snap">
        <div className=" relative">
          <Link>
            <img className="sm:w-[22vw] w-[100vw]" src={Create5} alt="" />
          </Link>
          <Link className="absolute top-3 right-5">
            <img src={AddCircle} alt="" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[22vw] w-[100vw]" src={Create4} alt="" />
          </Link>
          <Link className="absolute  top-3 right-5">
            <img src={AddCircle} alt="" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[22vw] w-[100vw]" src={Create6} alt="" />
          </Link>
          <Link className="absolute top-3 right-5 ">
            <img src={AddCircle} alt="" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[22vw] w-[100vw]" src={Create9} alt="" />
          </Link>
          <Link className="absolute  top-3 right-5">
            <img src={AddCircle} alt="" />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 sm:mt-4 mt-4 md:mx-10 sm:mx-5  myOverflow  scroll-snap">
        <div className="z-10 flex justify-end bg-secondary-400 border sm:w-[94vw] w-[100vw] absolute bottom-3 right-0">
          <p className="font-bold text-xs mt-4 me-4">1/10 selected</p>
          <Link
            to="/review&submit"
            className="bg-dark-100 text-light-200 rounded-lg border px-7 py-3"
          >
            Done
          </Link>
        </div>
        <div className="relative">
          <Link>
            <img className="sm:w-[22vw] w-[100vw]" src={Create3} alt="" />
          </Link>
          <Link className="absolute top-3 right-5 ">
            <img src={AddCircle} alt="" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[22vw] w-[100vw]" src={Create7} alt="" />
          </Link>
          <Link className="absolute top-3 right-5 ">
            <img src={AddCircle} alt="" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[22vw] w-[100vw]" src={Create2} alt="" />
          </Link>
          <Link className="absolute top-3 right-5 ">
            <img src={AddCircle} alt="" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[22vw] w-[100vw]" src={Create} alt="" />
          </Link>
          <Link className="absolute top-3 right-5 ">
            <img src={AddCircle} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};
