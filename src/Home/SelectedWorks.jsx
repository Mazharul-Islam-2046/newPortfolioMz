import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

const SelectedWorks = () => {
  const works = [
    {
      wTitle: "Plan Pixel",
      description:
        "This is a Camera and Gear Renting platform for users to rent and list their Camera and gear for rent",
      technologies: ["React", "NodeJS", "MongoDB", "ExpressJS"],
      liveLink: "https://plan-pixel.vercel.app/",
      githubLink: "https://github.com/webweavers2046/plan-pixel",
      image: "/projectsMockUp/planPixel.png",
    },
    {
      wTitle: "Cam Rent",
      description:
        "This is a Camera and Gear Renting platform for users to rent and list their Camera and gear for rent",
      technologies: ["React", "NodeJS", "MongoDB", "ExpressJS"],
      liveLink: "https://camr-e98af.web.app/",
      githubLink: "https://github.com/Mazharul-Islam-2046/camR-client-side",
      image: "/projectsMockUp/camRent.png",
    },
    {
      wTitle: "Blood Donation",
      description:
        "This is a Bood Donation Platform made in React for people to findout people with the same blood group they need.",
      technologies: ["React", "NodeJS", "MongoDB", "ExpressJS"],
      liveLink: "https://blood-donation-client-e03ab.web.app/",
      githubLink: "https://github.com/Mazharul-Islam-2046/blood-Donation-client-side",
      image: "/projectsMockUp/blooddonationmockup.png",
    },
  ];

  const [projectDetails, setProjectDetails] = useState(works[0]);

  // SlideChange Function
  const handleSlideChange = (swiper) => {
    
    if (swiper.activeIndex <= 3) {
      const activeSlideData = works[swiper.activeIndex];
      setProjectDetails(activeSlideData); 
      console.log(activeSlideData);
    } else {
      const activeSlideData = works[swiper.activeIndex%3];
      setProjectDetails(activeSlideData); 
    }
    
  };

  return (
    <>
      <div className="flex gap-y-16 flex-col lg:flex-row justify-between gap-6 mt-14 md:mt-20 lg:mt-36 px-2">
        {/* Text Content Part */}
        <div className="lg:w-[40%] flex flex-col justify-center">
          <h4 className="py-2 px-5 rounded-full border-[#22222240] border-2 w-fit text-sm">
            Selected Works
          </h4>
          <h3 className="font-bold text-4xl text-left my-6">
            {projectDetails.wTitle}
          </h3>
          <p className="text-lg leading-8 text-left">
            {projectDetails.description}
          </p>
          <div className="flex gap-3 flex-wrap mt-6 mb-12">
            {projectDetails.technologies.map((technology, idx) => (
              <h5
                key={idx}
                className="py-2 bg-[#d9d9d9] px-6 rounded-full text-sm"
              >
                {technology}
              </h5>
            ))}
          </div>
          <div className="flex gap-6">
            <a
              className="text-lg bg-gradient-to-r from-cyan-500 to-blue-500  text-[#f8f8f8] bg-[#d9d9d9] py-3 w-1/2 rounded-full"
              href={projectDetails.githubLink}
            >
              Github
            </a>
            <a
              className="text-lg border-2 border-[#222]  text-[#222] py-3 w-1/2 rounded-full"
              href={projectDetails.liveLink}
            >
              Live
            </a>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1.2}
            autoplay={{ delay: 3000 }}
            // loop={true}
            onSlideChange={handleSlideChange}
            onSwiper={handleSlideChange}
          >
            {works.map((slide, index) => (
              <SwiperSlide className="cursor-grab h-[400px] rounded-xl" key={index}>
                <img className="object-cover rounded-xl" src={slide.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SelectedWorks;
