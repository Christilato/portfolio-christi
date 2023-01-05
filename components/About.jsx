import React from "react";
import Image from "next/image";
import AboutImage from "../public/assets/headshot.png";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#92425d] ">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-white">Front-End Web Developer with strong buisness background. I recently took Northwestern University&apos;s Coding Bootcamp to enhance my knowledge with technology. The course has taken me above & beyond, enhancing my skills in HTML, CSS, Javascript, SQL, MongoDB, React & much more.  </p>
          <p className="py-2 text-white"> In 3 months I have been able to work on numerous projects, solo & collaboratively to enhance my web developemt. I hope to utilize my new skills and my creative mind to be an advantage for my next employer. As my dedicated, hardworking, and eager self there is never a problem I will not attempt to solve. After taking this coding bootcamp, I am only more ready to keep learning and growing.</p>
          <p className="py-2 text-white"> I have always had a passion for creation & design. I recieved a B.S. in Apparel Merchandising from Indiana University in 2019. From an internship at Calvin Klein to a full time job at a Jewelry Company in Chicago, design and creativity has always surrounded me. It has always sparked something inside of me. I am excited to open a new door of opportunity tech world.   </p>
          <Link href="/#projects">
            <p className="py-2 text-[#92425d] underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImage} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
