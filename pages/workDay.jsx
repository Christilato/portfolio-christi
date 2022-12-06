import React from "react";
import Image from "next/image";
import Link from "next/link";
import workDayImg from "../public/assets/projects/work-day.png";
import { RiRadioButtonFill } from "react-icons/ri";

const book = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={workDayImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Work Day Scheduler</h2>
          <h3 className="">HTML / Bootstrap / Javascript /JQuery</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The purpose of this project was to create an organized work day
            scheduler to pre-plan tasks throughout the work day. This
            application utilizes HTML, CSS, JavaScript, Bootstrap, Moment JS,
            and JQuery technologies. 
            </p>
            <p>
            The application allows the user to input
            text into each hour time-block and save that task to their local
            storage in the browser using a save button. This functionality
            allows the user to refresh the page without losing any data they had
            previously entered. 
            </p>
            <p>
            Another key function of this page is automatic
            styling for each time-block based on the current time of day. Hours
            that occured in the past will appear with a gray background, the
            current hour will appear with a red background, and hours that occur
            in the future will appear with a green background.
          </p>
          <a
            href="https://github.com/Christilato/Work-Day-Scheduler"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://christilato.github.io/Work.Day.Scheduler/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS- Bootstrap
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JQuery
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Moment.js
              </p>
              {/* <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Zillow API
              </p> */}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default book;
