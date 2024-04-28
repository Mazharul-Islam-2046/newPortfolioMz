import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SelectedWorks = () => {
  const works = [
    {
      wTitle: "Cam Rent",
      description:
        "This is a Camera and Gear Renting platform for users to rent and list their Camera and gear for rent",
      technologies: ["React", "NodeJS", "MongoDB", "ExpressJS"],
      liveLink: "",
      githubLink: "",
      image: "/projectsMockUp/camRent.png"
    },
    {
      wTitle: "Cam Rent",
      description:
        "This is a Camera and Gear Renting platform for users to rent and list their Camera and gear for rent",
      technologies: ["React", "NodeJS", "MongoDB", "ExpressJS"],
      liveLink: "",
      githubLink: "",
      image: "/projectsMockUp/camRent.png"
    },
    {
      wTitle: "Cam Rent",
      description:
        "This is a Camera and Gear Renting platform for users to rent and list their Camera and gear for rent",
      technologies: ["React", "NodeJS", "MongoDB", "ExpressJS"],
      liveLink: "",
      githubLink: "",
      image: "/projectsMockUp/camRent.png"
    },
  ];


  // SlideChange Function
  const handleSlideChange = (swiper) => {
    const activeSlideData = works[swiper.activeIndex];
    console.log(activeSlideData); // Access slide info here
  };

  return (
    <>
    <div className="flex justify-between gap-6 mt-36 px-2">
      {/* Text Content Part */}
      <div className="w-[45%] flex flex-col justify-center">
          <h4 className="py-2 px-8 rounded-full border-[#22222240] border-2 w-fit">Selected Works</h4>
          <h3 className="font-bold text-5xl text-left my-6">Cam Rent</h3>
          <p className="text-xl leading-8 text-left">This is a Camera and Gear Renting platform for users to rent and list their Camera and gear for rent</p>
          <div className="flex gap-3 flex-wrap mt-6 mb-12">
            <h5 className="py-2 bg-[#d9d9d9] px-6 rounded-full">React</h5>
            <h5 className="py-2 bg-[#d9d9d9] px-6 rounded-full">Node Js</h5>
            <h5 className="py-2 bg-[#d9d9d9] px-6 rounded-full">MongoDB</h5>
            <h5 className="py-2 bg-[#d9d9d9] px-6 rounded-full">Express JS</h5>
          </div>
          <div className="flex gap-6">
            <a className="text-xl text-[#222222] bg-[#d9d9d9] py-3 w-1/2 rounded-full" href="">Github</a>
            <a className="text-xl text-[#222222] bg-[#d9d9d9] py-3 w-1/2 rounded-full" href="">Live</a>
          </div>
      </div>
      <div className="w-[45%]">
      <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1.2}
      autoplay={{ delay: 3000 }}
      loop={true}
      onSlideChange={handleSlideChange}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {works.map((slide, index) => (
        <SwiperSlide className="cursor-grab" key={index}>
          <img src={slide.image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
    </div>
    </>
  );
};

export default SelectedWorks;
