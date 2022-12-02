import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/projects/property.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';

function Projects() {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#92425d]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem 
          title='PropertyFinder'
          backgroundImg={propertyImg}
          projectUrl= '/property'
          tech='React JS'
          />
           <ProjectItem 
          title='Crypto App'
          backgroundImg={cryptoImg}
          projectUrl= '/property'
          tech='React JS'
          />
           <ProjectItem 
          title='PropertyFinder'
          backgroundImg={netflixImg}
          projectUrl= '/property'
          tech='React JS'
          />
           <ProjectItem 
          title='PropertyFinder'
          backgroundImg={twitchImg}
          projectUrl= '/property'
          tech='React JS'
          />
        
        </div>
      </div>
    </div>
  );
}

export default Projects;
