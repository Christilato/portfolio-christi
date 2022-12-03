import React from "react";
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


function Main() {
  return (
    <div id='home'className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">
            LETS BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-white">
            Hi, I&apos;m <span className="text-[#92425d]"> Christi</span>
          </h1>
          <h1 className="py-2 text-white">A Front End Developer</h1>
          <p className="py-4 text-white max-w-[70%] m-auto">
            I&apos;m a front-end web developer specializing in building &
            occasionally designing exceptional digital experiences. Graduated
            from Northwestern&apos;s Coding Bootcamp
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-[#92425d]'>
            <a
              href='https://www.linkedin.com/in/christilato/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Christilato'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
