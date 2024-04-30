import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

const SelectedWorks = () => {
  const works = [
    {
      wTitle: "Cam Rent",
      description:
        "This is a Camera and Gear Renting platform for users to rent and list their Camera and gear for rent",
      technologies: ["React", "NodeJS", "MongoDB", "ExpressJS"],
      liveLink: "",
      githubLink: "",
      image: "/projectsMockUp/camRent.png",
    },
    {
      wTitle: "Cam Rent2",
      description:
        "This is a Camera and Gear Renting platform for users to rent and list their Camera and gear for rent",
      technologies: ["React", "NodeJS", "MongoDB", "ExpressJS"],
      liveLink: "",
      githubLink: "",
      image: "/projectsMockUp/camRent.png",
    },
    {
      wTitle: "Cam Rent3",
      description:
        "This is a Camera and Gear Renting platform for users to rent and list their Camera and gear for rent",
      technologies: ["React", "NodeJS", "MongoDB", "ExpressJS"],
      liveLink: "",
      githubLink: "",
      image: "/projectsMockUp/camRent.png",
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
      <div className="flex justify-between gap-6 mt-36 px-2">
        {/* Text Content Part */}
        <div className="w-[40%] flex flex-col justify-center">
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
              className="text-lg text-[#222222] bg-[#d9d9d9] py-3 w-1/2 rounded-full"
              href=""
            >
              Github
            </a>
            <a
              className="text-lg text-[#222222] bg-[#d9d9d9] py-3 w-1/2 rounded-full"
              href=""
            >
              Live
            </a>
          </div>
        </div>
        <div className="w-[50%]">
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
              <SwiperSlide className="cursor-grab h-[400px]" key={index}>
                <img className="object-cover" src={slide.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SelectedWorks;
