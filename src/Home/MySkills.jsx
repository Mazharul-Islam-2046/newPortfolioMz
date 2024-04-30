import { Icon } from "@iconify/react/dist/iconify.js";

const MySkills = () => {
  return (
    <div className="grid text-[#f8f8f8] grid-cols-3 grid-rows-5 gap-6 mt-36 bg-[#222] p-16 rounded-2xl">
      <div>
        <h3 className="font-bold text-3xl">My Skills</h3>
      </div>
      <div className="row-span-2 bg-[#d9d9d920] rounded-xl">
        <h4>12+ Web App Projects</h4>
      </div>
      <div className="row-span-5 flex flex-col justify-center bg-[#d9d9d920] rounded-xl p-4">
        <h4 className="text-2xl font-bold tracking-wider">Frontend Skills</h4>
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          <Icon className="text-4xl" icon="logos:nextjs-icon" />
          <Icon className="text-4xl" icon="skill-icons:react-dark" />
          <Icon className="text-4xl" icon="skill-icons:html" />
          <Icon className="text-4xl" icon="skill-icons:css" />
          <Icon className="text-4xl" icon="skill-icons:javascript" />
          <Icon className="text-4xl" icon="skill-icons:redux" />
          <Icon className="text-4xl" icon="skill-icons:tailwindcss-dark" />
        </div>
      </div>
      <div className="row-span-3 bg-[#d9d9d920] rounded-xl"></div>
      <div className="row-span-2 bg-[#d9d9d920] rounded-xl">
        <h4>1 year+ experience</h4>
      </div>
      <div className="col-span-2 bg-[#d9d9d920] rounded-xl"></div>
    </div>
  );
};

export default MySkills;
