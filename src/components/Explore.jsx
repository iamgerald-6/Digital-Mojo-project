import { Link, NavLink } from "react-router-dom";
import CreateDesign from "../assets/CreateDesign.png";
import SearchIcon from "../assets/search-icon.png";

import Create4 from "../assets/CreateDesign4.svg";
import Create5 from "../assets/CreateDesign5.svg";
import Create6 from "../assets/CreateDesign6.svg";
import Create9 from "../assets/CreateDesign9.svg";
import Create from "../assets/Create1.svg";
import Create2 from "../assets/CreateDesign2.svg";
import Create3 from "../assets/CreateDesign3.svg";
import Create7 from "../assets/CreateDesign7.svg";
import { motion } from "framer-motion";

export const Explore = () => {
  // const secondNavStyle = ({isActive}) => {
  //     return{
  //     background: isActive ? '#E9E9E9' : 'none',
  //     // width: isActive ? '50px' : '',
  //     color:  isActive ? '#060508' : '',
  //     borderRadius: isActive ? '48px' : ''

  //     }}
  return (
    <>
      <div className="sm:flex sm:flex-row flex-col justify-between mt-4 bg-light-200 sm:mx-12  sm:rounded-[53px]">
        <div className="sm:ps-12 sm:pt-20 px-1 pt-10 ">
          <h1 className="sm:text-5xl text-3xl font-sfSemiBold ">
            Bring your design ideas
            <br /> to life
          </h1>
          <h5 className=" text-secondary-100 mt-6 font-sfRegular sm:text-lg text-sm">
            Do you have an idea, a content calender or a single design like
            <br className="sm:block hidden" /> a social media post etc ?
          </h5>
          <div className="flex gap-4 sm:mt-10 mt-5">
            <Link
              to="/createDesign"
              className="rounded-[74px] px-5 py-1.5 bg-dark-100 text-light-200 text-base font-sfRegular"
            >
              Create design
            </Link>
            <Link
              to="/events"
              className="border border-dark-100 rounded-[74px] px-5 py-1.5 hover:bg-dark-100 hover:text-light-200 transition ease-out duration-500 text-base font-sfRegular"
            >
              Content calender
            </Link>
          </div>
        </div>

        <div className="sm:mt-0 mt-5">
          <img
            className="sm:w-[45vw] sm:h-[68vh] w-[100vw]"
            src={CreateDesign}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-14">
        <div className="text-center">
          <h2 className="text-dark-100 font-sfMedium sm:text-4xl text-3xl">
            Find design inspiration
          </h2>
          <p className="text-secondary-100 sm:text-base text-sm mt-2 text-center font-sfRegular">
            Get design inspiration to guide and find the best designs for your
            brand
            <br className="sm:block hidden" /> or company
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 2 }}
          className="lg:w-[50vw] md:w-[66vw] sm:w-[75vw] w-[95vw] h-[12vh] rounded-2xl mt-5 bg-light-200 relative shadow-xl "
        >
          <img
            className="w-[24px] h-[22px] absolute xl:top-[39%] lg:top-[37%] md:top-[37%] sm:top-[37%] top-[36%] left-6"
            src={SearchIcon}
            alt="search"
          />
          <input
            className="lg:w-[50vw] md:w-[66vw] sm:w-[70vw] w-[85vw] h-[10vh] pt-3.5 outline-transparent rounded-[23px] ps-16 text-secondary-100 placeholder-secondary-100 text-lg"
            type="search"
            placeholder="Search"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 2 }}
          className="flex flex-wrap mt-10 text-secondary-100 md:text-sm text-xs"
        >
          <h4 className="md:me-5 pt-1 sm:ps-0 ps-1 font-sfRegular">
            Trending searches
          </h4>
          <motion.h4
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="sm:ms-5 ms-3 border sm:px-4 px-3 py-1 rounded-full cursor-pointer font-sfRegular"
          >
            Instagram post
          </motion.h4>
          <motion.h4
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="sm:ms-4 ms-3 border sm:px-4 px-3 py-1 rounded-full cursor-pointer font-sfRegular"
          >
            Facebook post
          </motion.h4>
          <motion.h4
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="sm:ms-4 ms-3 border sm:px-4 px-3 py-1 sm:mt-0 mt-1 rounded-full cursor-pointer font-sfRegular"
          >
            Business branding
          </motion.h4>
          <motion.h4
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="sm:ms-4 ms-3 border sm:px-4 px-3 py-1 sm:mt-0 mt-1 rounded-full cursor-pointer font-sfRegular"
          >
            Branding
          </motion.h4>
          <motion.h4
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="sm:ms-4 ms-3 border sm:px-4 px-3 py-1 sm:mt-0 mt-1 rounded-full cursor-pointer font-sfRegular"
          >
            Logo
          </motion.h4>
        </motion.div>
      </div>

      <nav className="flex mt-9  items-center ">
        <ul className="flex  w-[100vw] sm:justify-center sm:gap-5 gap-6 myOverflow">
          <li className="py-2">
            <NavLink
              to="#"
              className="text-dark-100 px-4 rounded-[90px] py-2 font-sfMedium text-base bg-secondary-800"
            >
              Discover
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              className="text-secondary-100 hoverNav font-sfMedium px-1 py-2 text-base"
              to="#"
            >
              Mobile
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="#"
              className="text-secondary-100 hover:font-sfMedium px-1 py-2 text-base"
            >
              Instagram
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="#"
              className="text-secondary-100 font-semibold px-1 py-2 text-base"
            >
              Illustration
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="#"
              className="text-secondary-100 font-sfMedium px-1 py-2 text-base"
            >
              Instagram
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="#"
              className="text-secondary-100 font-sfMedium px-1 py-2 text-base"
            >
              Product
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="#"
              className="text-secondary-100 font-sfMedium px-1 py-2 text-base"
            >
              Brand
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="#"
              className="text-secondary-100 font-sfMedium px-1 py-2 text-base"
            >
              Animations
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 sm:mt-3 mt-3 md:mx-10 sm:mx-5  myOverflow  scroll-snap">
        <div className="">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create5} alt="" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create4} alt="" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create6} alt="" />
          </Link>
        </div>

        <div className="relative">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create9} alt="" />
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 sm:mt-3 mt-4  md:mx-10 sm:mx-5  myOverflow  scroll-snap">
        <div className="">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create3} alt="" />
          </Link>
        </div>

        <div className="">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create7} alt="" />
          </Link>
        </div>

        <div className="">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create2} alt="" />
          </Link>
        </div>

        <div className="">
          <Link>
            <img className="sm:w-[23vw] w-[100vw]" src={Create} alt="" />
          </Link>
        </div>
      </div>
      <div className="mt-14 flex justify-center mb-20 ">
        <div className=" border border-dark-100 px-12 rounded-md py-2 text-center hover:bg-dark-100 hover:text-light-200 transition ease-out duration-500 text-lg font-sfRegular">
          <button>Load more</button>
        </div>
      </div>
    </>
  );
};
