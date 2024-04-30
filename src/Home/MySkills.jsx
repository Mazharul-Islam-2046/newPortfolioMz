import { Icon } from "@iconify/react/dist/iconify.js";

const MySkills = () => {
  return (
    <div className="grid bg-gradient-to-r from-cyan-500 to-blue-500 text-[#f8f8f8] grid-cols-3 grid-rows-5 gap-6 mt-36 bg-[#222] p-16 rounded-2xl drop-shadow-2xl">
      <div className="flex items-center justify-center">
        <h3 className="font-bold text-3xl">My Skills</h3>
      </div>
      <div className="row-span-2 flex flex-col justify-center bg-[#f8f8f8] bg-opacity-40 drop-shadow-2xl rounded-xl p-8">
        <h4 className="text-xl tracking-wider font-bold">1 year+ experience</h4>
        <h4 className="text-xl mt-2 tracking-wider font-bold">
          12+ Web App Projects
        </h4>
      </div>
      <div className="row-span-4 flex flex-col justify-center bg-[#f8f8f8] bg-opacity-40 drop-shadow-2xl rounded-xl p-4">
        <h4 className="text-2xl font-bold tracking-wider">Frontend Skills</h4>
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          <Icon className="text-4xl" icon="logos:nextjs-icon" />
          <Icon className="text-4xl" icon="skill-icons:react-dark" />
          <Icon className="text-4xl" icon="skill-icons:html" />
          <Icon className="text-4xl" icon="skill-icons:css" />
          <Icon className="text-4xl" icon="skill-icons:javascript" />
          <Icon className="text-4xl" icon="skill-icons:redux" />
          <Icon className="text-4xl" icon="skill-icons:tailwindcss-dark" />
          <Icon className="text-4xl" icon="devicon-plain:reactrouter" />
        </div>
      </div>
      <div className="row-span-3 flex flex-col justify-center bg-[#f8f8f8] bg-opacity-40 drop-shadow-2xl rounded-xl p-4">
        <h4 className="text-2xl font-bold tracking-wider">Backend Skills</h4>
        <div className="flex flex-wrap gap-6 justify-center mt-8">
        <Icon className="text-4xl" icon="skill-icons:nodejs-light" />
          <Icon className="text-4xl" icon="skill-icons:expressjs-light" />
          <Icon className="text-4xl" icon="devicon:mongodb-wordmark" />
          <Icon className="text-4xl" icon="logos:firebase" />
        </div>
      </div>
      <div className="row-span-2 flex flex-col justify-center bg-[#f8f8f8] bg-opacity-40 drop-shadow-2xl rounded-xl p-8">
        <h4 className="text-2xl font-bold tracking-wider">Other Skills</h4>
        <div className="flex flex-wrap gap-6 justify-center mt-4">
          <Icon className="text-4xl" icon="skill-icons:figma-light" />
          <Icon className="text-4xl" icon="logos:trello" />
          <Icon className="text-4xl" icon="arcticons:openai-chatgpt" />
          <Icon className="text-4xl" icon="skill-icons:vscode-light" />
        </div>
      </div>
      <div className="col-span-2 flex justify-around items-center bg-[#f8f8f8] bg-opacity-40 drop-shadow-2xl rounded-xl p-8">
        <h4 className="text-2xl font-bold tracking-wider">Version Control Skills</h4>
        <div className="flex flex-wrap gap-6 justify-center">
        <Icon className="text-4xl" icon="skill-icons:git" />
        <Icon className="text-4xl" icon="skill-icons:github-light" />
        </div>
      </div>
      <div className="bg-[#d9d9d9] rounded-xl drop-shadow-2xl"></div>
    </div>
  );
};

export default MySkills;
