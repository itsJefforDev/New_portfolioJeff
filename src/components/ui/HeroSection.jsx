import React, { useState } from "react";
import heroImage from "../../assets/images/jeff2.png";
import code3 from "../../assets/images/code3.png";
import Reveal from "./Reveal";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-radial-[at_25%_25%] from-purple-950 to-slate-950 to-75% font-[Poppins]">

      {/* Hero Section */}
      <section className="relative flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-30 px-4 md:px-16 lg:px-24 xl:px-32">


        {/* Left Content */}
        <Reveal direction="left" delay={0.5}>

          <div className="flex flex-col items-center md:items-start relative z-10 pr-8">

            {/* Heading */}
            <h1 className="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl text-sky-200">
              Jefferson Orozco
            </h1>

            {/* Description */}
            <p className="text-center md:text-left text-sm text-indigo-200 max-w-lg mt-2">
              Full Stack Developer with experience in data analysis, focused on building efficient web applications and
              solutions based on strategic information. Skilled in frontend and backend technologies, databases,
              containerization, and BI tools
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-8 text-sm">
              <button onClick={() => navigate("/Cv")} className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 rounded-md px-7 h-11 transition">
                Download my CV
              </button>

              {/* <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-md px-6 h-11">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>

                <span>Watch demo</span>
              </button> */}
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.3}>
          {/* Right Image */}
          <img
            src={heroImage}
            alt="hero"
            className="shadow-xl rounded-3xl mask-b-from-20% mask-b-to-95% max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300 relative z-10"
          />
        </Reveal>
      </section>
    </div>
  );
};

export default HeroSection;