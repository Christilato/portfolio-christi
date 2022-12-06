import React from "react";
import Image from "next/image";
import Link from "next/link";
import topBookImg from "../public/assets/projects/top-book.png";
import gotImg from "../public/assets/projects/got.png";
import fanFictionImg from "../public/assets/projects/fan-fiction.png";
import workDayImg from "../public/assets/projects/work-day.png";
import ProjectItem from './ProjectItem';




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
          title='TopBookGenerator'
          backgroundImg={topBookImg}
          projectUrl= '/book'
          tech='React JS'
          />
           <ProjectItem 
          title='GameofThronesCheatSheet'
          backgroundImg={gotImg}
          projectUrl= '/got'
          tech='React JS'
          />
           <ProjectItem 
          title='MarvelFanFictionCommunity'
          backgroundImg={fanFictionImg}
          projectUrl= '/fanFiction'
          tech='React JS'
          />
           <ProjectItem 
          title='WorkDayScheduler'
          backgroundImg={workDayImg}
          projectUrl= '/workDay'
          tech='React JS'
          />
        
        </div>
      </div>
    </div>
  );
}

export default Projects;
