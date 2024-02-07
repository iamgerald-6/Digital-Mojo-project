/* eslint-disable react/prop-types */
import Course1 from "../assets/Course1.png";
import Course2 from "../assets/Course2.png";
import Course3 from "../assets/Course3.png";
import Course4 from "../assets/Course4.png";
import { LuCrown } from "react-icons/lu";
import { Link } from "react-router-dom";

const RecentCourses = (props) => {
  return (
    <>
      <div id={props.container} className="flex  md:mx-10 sm:mx-5 mx-2 sm:mt-8">
        <div className=" w-[100vw] justify-between  flex ">
          <h3 className="md:mt-3 sm:mt-16 mt-8 text-xl font-sfBold">
            {props.name}
          </h3>
          <Link
            to="#"
            className="md:mt-3 sm:mt-16 mt-8 text-blue-700 font-sfMedium underline"
          >
            {props.title}
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 lg:mt-3  md:mx-10 sm:mx-5  myOverflow  scroll-snap">
        <div id={props.grid} className="">
          <img
            className="sm:w-[49vw] w-[100vw] mt-2"
            src={Course1}
            alt="TutorialPic1"
          />
          <div
            id={props.elementId}
            className="bg-light-100 xl:w-[13vw] px-2 lg:w-[16vw] md:w-[19vw] mt-1 sm:w-[23vw] w-[49vw] rounded-md flex sm:mt-1 sm:ms-2 md:px-0 "
          >
            <LuCrown className="mt-1" />
            <span className="ms-2">Certified course</span>
          </div>
          <h6 className="sm:mt-2 mt-1  sm:text-base text-sm font-semibold sm:font-normal font-sfMedium tracking-tight">
            Beginner cyber security 101
          </h6>
          <p
            id={props.paragraph}
            className="sm:mt-2 mt-1 xl:text-sm lg:text-sm md:text-xs text-xs font-sfRegular"
          >
            {" "}
            Taking you through the basics of cyber security
          </p>
        </div>

        <Link to="/intocourse2" className=" ">
          <img
            className="sm:w-[49vw] w-[100vw]  mt-2 "
            src={Course2}
            alt="TutorialPic2"
          />
          <div
            id={props.elementId}
            className="mt-1 px-2 bg-light-100 xl:w-[13vw] lg:w-[16vw] md:w-[19vw] sm:w-[23vw] w-[49vw] rounded-md flex sm:mt-1 sm:ms-2 md:px-0"
          >
            <LuCrown className="mt-1" />
            <span className="ms-2">{props.certified}</span>
          </div>
          <h6 className="sm:mt-2 mt-1 sm:text-base text-sm  font-semibold sm:font-normal  font-sfMedium">
            Instagram growth
          </h6>
          <p
            id={props.paragraph}
            className="sm:mt-2 mt-1 xl:text-sm lg:text-sm md:text-xs font-sfRegular  text-xs "
          >
            Learn how to grow your instagram from 0-10,000 followers and more.
          </p>
        </Link>

        <Link to="/intocourse" className="">
          <img
            className="sm:w-[49vw] w-[100vw]  mt-2 "
            src={Course3}
            alt="TutorialPic3"
          />
          <div
            id={props.elementId}
            className="mt-1 px-2 bg-light-100 xl:w-[13vw] lg:w-[16vw] md:w-[19vw] sm:w-[23vw] w-[49vw] rounded-md flex sm:mt-1 sm:ms-2 md:px-0"
          >
            <LuCrown className="mt-1" />
            <span className="ms-2">Certified course</span>
          </div>
          <h6 className="sm:mt-2 mt-1 sm:text-base text-sm  sm:font-normal font-semibold ">
            <span className="course-text-edit font-sfMedium">
              Facebook marketing
            </span>
          </h6>
          <p
            id={props.paragraph}
            className="sm:mt-2 mt-1 xl:text-sm lg:text-sm md:text-xs  text-xs font-sfRegular"
          >
            Learn home to utilize the facebook marketing to sell products and
            services
          </p>
        </Link>

        <div className="">
          <img
            className="sm:w-[49vw] w-[100vw] mt-2 "
            src={Course4}
            alt="TutorialPic4"
          />
          <div
            id={props.elementId}
            className="mt-1 px-2 bg-light-100 xl:w-[13vw] lg:w-[16vw] md:w-[19vw] sm:w-[23vw] w-[49vw] rounded-md flex sm:mt-1 sm:ms-2 md:px-0"
          >
            <LuCrown className="mt-1" />
            <span className="ms-2">Certified course</span>
          </div>
          <h6 className=" sm:mt-2 mt-1 sm:text-base text-sm font-sfMedium sm:font-normal font-semibold">
            Social media marketing
          </h6>
          <p
            id={props.paragraph}
            className="sm:mt-2 mt-1 xl:text-sm lg:text-sm md:text-xs  text-xs font-sfRegular "
          >
            {" "}
            Learn how to utilize the power of social media in marketing
          </p>
        </div>
      </div>
    </>
  );
};

export default RecentCourses;
