const Hero = () => {
  return (
    <div className="mt-10">
      <img className="mb-12" src="../../public/mzHeroPic.png" alt="" />
      <div className="flex">
        {/* Bento Box Hero */}
        <div className="w-3/5">
          <div className="bg-[#d9d9d9] bg-opacity-40">
            <p>Junior Developer................</p>
          </div>
          <div className="flex gap-5">
            <div className="bg-[#d9d9d9] bg-opacity-40">
              <p>12+</p>
              <p>Projects</p>
            </div>
            <div className="bg-[#d9d9d9] bg-opacity-40">
              <p>10+</p>
              <p>Months</p>
            </div>
          </div>
          <div className="overflow-hidden bg-[#d9d9d9] bg-opacity-40">
            <p>Hey I am Mazhharul Islam</p>
          </div>
        </div>





        {/* Image */}
        <img className="w-2/5 rounded-xl opacity-85" src="../../public/mzpic.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
