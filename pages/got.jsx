import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import gotImg from "../public/assets/projects/got.png";
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
                 src={gotImg} 
                 alt='/' 
                 />
                 <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className="py-2">Game of Thrones Cheat Sheet</h2>
                    <h3 className="">MVC / MySQL / Express / Rest API</h3>
                </div>

            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                    The goal of this project was to use the full stack of web development technologies to create an app that would showcase our ability to use the principles we&apos;ve learned in class in a collaborative setting. We were tasked with using the MVC model for a website that would allow users to retrieve and add information, rendered dynamically through Handlebars, and fulfill a novel purpose for that user. Our group decided to use our shared interest in the Game of Thrones books and TV series to create a resource for users to be able to learn more about the show and add to their knowledge base online. We believe we tackled the challenge with a positive collaborative spirit and pulled out all the stops to create the best app we could. It was a very fruitful experience that will carry us into our final project for the class.
                    </p>
                    <a
            href='https://github.com/AliCelikay/GameOfThronesCheatSheet'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://shrouded-spire-99945.herokuapp.com/'
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
                <RiRadioButtonFill className='pr-1' /> MySQL
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sequelize
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express.js
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node.js
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> B-crypt
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Handlebars
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Ice and Fire API
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> UIKit Framework
              </p>
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