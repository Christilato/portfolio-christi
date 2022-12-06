import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import fanFictionImg from "../public/assets/projects/fan-fiction.png";
import {RiRadioButtonFill} from 'react-icons/ri'

const got = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image
                 className="absolute z-1" 
                 layout='fill' 
                 objectFit='cover' 
                 src={fanFictionImg} 
                 alt='/' 
                 />
                 <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className="py-2">Marvel Fan Fiction Community</h2>
                    <h3 className="">React JS / MERN / MongoDB</h3>
                </div>

            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                    A Full Stack MERN application that utilizes MongoDB and Marvel API to allow users to create and read stories about their favorite Marvel characters. My team and I wanted to create a community based site that allows users to have their own profile & stories, which other users can view and comment on. 
                    </p>
                    <a
            href='https://github.com/hamzaramzanali/fan-fiction'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://stark-sierra-05669.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MERN
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Marvel API
              </p>
              {/* <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Zillow API
              </p> */}
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default got;