import { Icon } from "@iconify/react/dist/iconify.js";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="mt-10">
      <img className="mb-12" src="/mzHeroPic.png" alt="" />

      {/* Bento Box Hero */}
      <div className="flex flex-col-reverse lg:flex-row gap-5">
        {/* Text and Infos */}
        <div className="lg:w-3/5 grid grid-cols-2 gap-5">
          <div className="bg-[#d9d9d9] bg-opacity-40 flex flex-col md:flex-row gap-y-6 items-center col-span-2 rounded-xl px-6 py-7">
            <p className="md:w-3/5 text-left flex items-center gap-2 font-semibold text-sm md:text-lg">
              My Development Skills
              <Icon className="text-base mt-1" icon="maki:arrow" />
            </p>
            <Marquee>
              <div className="flex gap-2 md:gap-5">
                <Icon className="text-sm md:text-lg" icon="logos:nextjs" />
                <Icon className="text-lg md:text-2xl" icon="skill-icons:react-dark" />
                <Icon className="text-lg md:text-2xl" icon="vscode-icons:file-type-node" />
                <Icon className="text-lg md:text-2xl" icon="devicon:mongodb-wordmark" />
                <Icon className="text-lg md:text-2xl" icon="skill-icons:expressjs-light" />
                <Icon className="text-lg md:text-2xl" icon="logos:firebase" />
                <Icon className="text-lg md:text-2xl" icon="skill-icons:redux" />
                <Icon className="text-lg md:text-2xl" icon="skill-icons:javascript" />
                <Icon className="text-lg md:text-2xl" icon="skill-icons:html" />
                <Icon className="text-lg md:text-2xl" icon="skill-icons:css" />
                <Icon
                  className="text-lg md:text-2xl"
                  icon="skill-icons:tailwindcss-dark"
                />
                <br />
              </div>
            </Marquee>
          </div>
          <div className="bg-[#d9d9d9] bg-opacity-40 rounded-xl w-full px-6 py-7 text-left font-bold tracking-normal text-3xl md:text-4xl lg:text-5xl leading-tight flex flex-col justify-center">
            <p>
              12<span className="font-extrabold">+</span>
            </p>
            <p className="opacity-40">Projects</p>
          </div>
          <div className="bg-[#d9d9d9] bg-opacity-40 rounded-xl w-full px-6 py-7 text-left font-bold tracking-normal text-3xl md:text-4xl lg:text-5xl leading-tight flex flex-col justify-center">
            <p className="opacity-40">
              12<span className="font-extrabold">+</span>
            </p>
            <p>Months</p>
          </div>
          <div className="overflow-hidden bg-[#d9d9d9] bg-opacity-40 col-span-2 rounded-xl px-5 py-7 text-sm md:text-lg font-semibold flex items-center">
            <p>
              Hey there, I'm Mazharul Islam. I'm a Junior Web Developer. Visit
              is my
              <span>
                <a href="https://github.com/Mazharul-Islam-2046"> Github</a>
              </span>
            </p>
          </div>
        </div>

        {/* Image */}
        <img
          className="lg:w-2/5 rounded-xl opacity-85"
          src="/mzpic.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
