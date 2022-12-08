import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Christi | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#92425d] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Christi Lato</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/christilato/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Christilato"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Analyst{" "}
              <span className="px-1">|</span> Creative Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Front End Developer/ Business analyst with strong technological skills
          enhanced through Northwestern University&apos;s Coding Bootcamp, where I
          developed skills in Javascript, SQL, and moreEffective organization
          skills, broad experience across multiple industries, products and
          departments. Demonstrates success in business development through
          rigorous analysis, creative problem-solving, and careful relationship
          management. Experience operating as an individual contributor as well
          as a strong team leader
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>Mongoose ODM
            <span className="px-2">|</span> Node
            <span className="px-2">|</span> Express
            <span className="px-2">|</span> OOP
            <span className="px-2">|</span> jQuery
            <span className="px-2">|</span> RESTAPI
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              RH Chicago- The Gallery at the Historic 3 Arts Club
            </span>
            <span className="px-2">|</span>Chicago, IL
          </p>
          <p className="py-1 italic">
            Support Associate | Swatch Librarian (2020 - 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Recognized as RH Award Member for living the values of Service &
              People in my day-to-day work
            </li>
            <li>
              Analyzed & arranged a new layout for customer swatch drawers to
              represent 150 swatches to be optimized as most efficient selling
              tools for the design consultant team
            </li>
            <li>
              Exemplified the swatch levels and reduced costs of $4,000 by
              removing over 200 discontinued swatches in order to re-organize
              the sales floor with up-to-date swatches
            </li>
            <li>
              Initiated partnerships with the Home Office team by creating a
              swatch library containing over 200 UPC & Web SKUS broken down by
              web status, selling status & collection to ensure proper product
              is in the gallery
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Lana Jewelry</span>
            <span className="px-2">|</span>Chicago, IL
          </p>
          <p className="py-1 italic">Logistics Manager (2019 - 2020)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Promoted into position after 5-months; demonstrated strong-drive &
              work ethic
            </li>
            <li>
              Enhanced overall department by creating new systems & processes to
              maximize efficiency of products being shipped out
            </li>
            <li>
              Shipped out over 500 shipments during December to ensure retailers
              receive product to sell by successful time management
            </li>
            <li>
              Managed seasonal fashion orders and weekly shipments to Nordstrom,
              Nordstrom Rack & Saks Fifth Avenue
            </li>
          </ul>
          <p className="py-1 italic">Customer Service Specialist (2019)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Created and redesigned, user-friendly customer service system in
              order to clear out 3+ months of repair back log
            </li>
            <li>
              Developed new price points based on the number of repairs coming
              in to ensure profits are being made
            </li>
            <li>
              Communicated with retailers & online customers daily regarding
              repair process, pricing, and any questions that can pertain
            </li>
            <li>
              Styled models & jewelry aesthetic for Instagram marketing campaign
              and achieved the highest amount of Instagram likes of 600 on first
              posting for the company
            </li>
          </ul>
        </div>

        {/*  */}
        {/* <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5> */}

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">CALVIN KLEIN</span>
            <span className="px-2">|</span>New York, NY
          </p>
          <p className="py-1 italic">
            Planning Intern | PVH Summer Internship Program (2018)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Analyzed selling & allocated merchandise for multiple products on
              a weekly basis
            </li>
            <li>
              Reviewed & evaluated assortment plans with cross-functional teams
              to ensure they buyer&apos;s vision was in alignment with store targets
            </li>
            <li>
              Collaborated with a group of interns by participating in a group
              project presentation to develop a consumer centric campaign
              connecting Calvin Klein with college consumers
            </li>
            <li>
              Presented in front of Senior Leaders at the end of the internship
              & implemented some ideas to provide better engagement to the brand
              consumers
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
