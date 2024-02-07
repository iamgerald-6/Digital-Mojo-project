import React from "react";
// import {PiPlusBold} from 'react-icons/pi';
import { Link } from "react-router-dom";
import Featured1 from "../assets/featured1.svg";
import Featured2 from "../assets/featured2.svg";
import Featured3 from "../assets/featured3.svg";
import Featured4 from "../assets/featured4.svg";
import Featured5 from "../assets/featured5.svg";

export const Review = () => {
  return (
    <>
      <div className="mt-12 flex justify-center ">
        <div className="  text-center  ">
          <h3 className=" text-3xl font-sfMedium ">Review and submit</h3>
          <p className="mt-3 text-center text-base font-sfRegular text-secondary-100">
            Take a last look at your content and submit to get your idea
            designed
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="  ">
          <form>
            <div className="bg-light-200   rounded-lg px-5 py-2 sm:w-[76vw] w-[100vw] sm:h-[26vh]">
              <h3 className="mt-3 font-sfMedium text-xl">Design type </h3>
              <div className="mt-3">
                <input
                  className="bg-light-200 px-5 py-2 sm:w-[66vw] w-[90vw] h-[13vh] "
                  type="text"
                  maxLength={80}
                />
                <button className="ms-6 underline underline-offset-4 text-base font-sfRegular">
                  Change
                </button>
              </div>
            </div>

            <div className="mt-5 bg-light-200 rounded-lg px-5 py-2 sm:w-[76vw] w-[100vw] sm:h-[38vh]">
              <h3 className="mt-3 font-sfMedium text-xl">
                Describe your design.{" "}
              </h3>
              <div className="mt-3">
                <input
                  className="bg-light-200 px-5 py-2 sm:w-[66vw] w-[90vw] h-[18vh] "
                  type="text"
                  maxLength={80}
                />
              </div>
              <button className="mt-4 underline underline-offset-4 text-base font-sfRegular">
                Edit
              </button>
            </div>

            <div className="mt-5 bg-light-200 rounded-lg px-5 py-2 sm:w-[76vw] w-[100vw] sm:h-[38vh]">
              <h3 className="mt-3 font-sfMedium text-xl">Target audience. </h3>
              <div className="mt-3">
                <input
                  className="bg-light-200 px-5 py-2 sm:w-[66vw] w-[90vw] h-[18vh] "
                  type="text"
                  maxLength={80}
                />
              </div>
              <button className="mt-4 underline underline-offset-4 text-base font-sfRegular">
                Edit
              </button>
            </div>

            <div className="mt-5 bg-light-200 rounded-lg px-5 py-2 sm:w-[76vw] w-[100vw] sm:h-[38vh]">
              <h3 className="mt-3 font-sfMedium text-xl">Text on design. </h3>
              <div className="mt-3">
                <input
                  className="bg-light-200 px-5 py-2 sm:w-[66vw] w-[90vw] h-[18vh] "
                  type="text"
                  maxLength={80}
                />
              </div>
              <button className="mt-4 underline underline-offset-4 text-base font-sfRegular">
                Edit
              </button>
            </div>

            <div className="mt-5 bg-light-200 rounded-lg px-5 py-2 sm:w-[76vw] w-[100vw] sm:h-[38vh]">
              <h3 className="mt-3 font-sfMedium text-xl">Reference Link. </h3>
              <div className="mt-3">
                <input
                  className="bg-light-200 px-5 py-2 sm:w-[66vw] w-[90vw] h-[18vh] "
                  type="text"
                  maxLength={80}
                />
              </div>
              <button className="mt-4 underline underline-offset-4 text-base font-sfRegular">
                Edit
              </button>
            </div>

            <div className="bg-light-200 mt-4 rounded-lg pt-6 px-5 sm:w-[76vw] w-[100vw] sm:h-[49vh]">
              <h3 className="font-sfMedium text-xl">Feature Images. </h3>
              <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 sm:mt-3 mt-3 md:mx-10 sm:mx-5  myOverflow  scroll-snap">
                <div className="col-end-2 relative">
                  <Link>
                    <img src={Featured1} alt="" />
                  </Link>
                </div>

                <div className="relative">
                  <Link>
                    <img src={Featured2} alt="" />
                  </Link>
                </div>

                <div className="relative">
                  <Link>
                    <img src={Featured3} alt="" />
                  </Link>
                </div>

                <div className="relative">
                  <Link>
                    <img src={Featured4} alt="" />
                  </Link>
                </div>

                <div className="relative">
                  <Link>
                    <img src={Featured5} alt="" />
                  </Link>
                </div>
              </div>
              <button className="mt-4  underline underline-offset-4 text-base font-sfRegular">
                Edit
              </button>
            </div>
            <Link
              to="/complete"
              className="flex justify-center mb-4 bg-dark-100 sm:me-7 border rounded-[8px] mt-5 font-sfRegular"
            >
              <button className=" mb-3 sm:me-14 mt-4 text-light-200  px-7 py-2 text-lg">
                Create Design
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
