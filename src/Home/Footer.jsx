import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <>
      <div className="flex mt-36">
        {/* Left Side */}
        <div className="w-3/5 text-left flex flex-col justify-between">
          <p className="text-4xl font-bold leading-normal tracking-normal">
            I love crafting unforgettable digital experiences, brands and
            websites with people like you.
          </p>

          <div className="space-y-5">
            <p className="text-lg">Get in touch</p>
            <p className="text-2xl font-bold">+880 183 698 8407</p>
            <p className="text-2xl font-bold">mdmazharulislam2046@gmail.com</p>
            <p className="text-2xl font-bold">
              Bandar, Narayanganj, Bangladesh
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-2/5">
          {/* Follow Me */}
          <div className="flex justify-between bg-[#222] py-6 px-10 rounded-3xl text-[#f8f8f8] mt-3">
            <p className="text-xl font-semibold">Follow me</p>
            <div className="flex gap-5 items-center text-2xl">
              <Icon icon="mage:linkedin" />
              <Icon icon="prime:twitter" />
              <Icon icon="ant-design:github-filled" />
              <Icon icon="uil:instagram" />
            </div>
          </div>

          {/* Resume */}

          <div className="p-12 mt-12 bg-[#d9d9d940] rounded-3xl drop-shadow-xl">
            <h3 className="text-3xl font-bold leading-normal">
              Is there any job Vacancy <br /> for Web Developer?
            </h3>
            <p className="text-lg mt-5 mb-8">
              Then consider me too. You'll get my resume from below. Thank You.
            </p>

            <button className="py-5 text-[#f2f2f2] rounded-full bg-blue-500 font-bold w-full">
              My Resume
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
      </div>
      <div className="bg-[#222] text-[#f2f2f2] py-4 rounded-2xl mt-20 font-semibold">
        <p> &copy; All rights belogs to Mazharul Islam </p>
      </div>
    </>
  );
};

export default Footer;
