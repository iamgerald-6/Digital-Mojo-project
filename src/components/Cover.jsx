import CoverPic from "../assets/coverPic.png";
import SearchIcon from "../assets/search-icon.png";
import { motion } from "framer-motion";

export const Cover = () => {
  const backImage = {
    backgroundImage: `url(${CoverPic})`,
    height: "73vh",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // const backImageResponsive = {
  //   '@screen md': {
  //     backgroundPosition: 'center center', // Adjust as needed for medium screens and above
  //   },
  //   '@screen lg': {
  //     backgroundPosition: 'center center', // Adjust as needed for large screens and above
  //   },
  //   '@screen sm': {
  //     backgroundPosition: 'center center', // Adjust as needed for large screens and above
  //   },
  //   '@screen xs': {
  //     backgroundPosition: 'center center', // Adjust as needed for large screens and above
  //   },
  //   // Add more breakpoints as needed
  // };

  return (
    <>
      <div
        style={backImage}
        className="flex flex-col justify-center items-center"
      >
        {/* <img src={CoverPic}/> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 2 }}
          className="text-center"
        >
          <h2 className="text-light-200 md:text-4xl sm:text-3xl text-3xl font-sfMedium">
            Find resources
          </h2>
          <p className="mt-6 md:text-base sm:text-sm text-sm font-sfLight text-light-200 sm:tracking-wide   ">
            Our resources page has all you need from templates, courses, catalog{" "}
            <br className="sm:block hidden" />
            of design, and design inspiration to boost your creativity
          </p>
        </motion.div>
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
          className="flex flex-wrap mt-10 text-light-200 md:text-sm text-xs"
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
      <div></div>
    </>
  );
};
