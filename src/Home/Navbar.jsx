const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-28">
          <h1 className="font-bold text-lg md:text-2xl tracking-wide">Mazharul Islam</h1>
          <a href="https://www.linkedin.com/in/md-mazharul-islam-mzshishir" className="text-base hidden lg:block font-semibold text-[#3c3c3c] tracking-wide">
            My Linkedin Profile
          </a>
        </div>
        <div className="flex items-center gap-6 lg:gap-14 text-sm md:text-base font-semibold text-[3c3c3c] tracking-wide">
          <div className="flex items-center gap-3 md:gap-7">
            <a className="text-[#222]" href="https://github.com/Mazharul-Islam-2046">Github</a>
            <a className="text-[#222]" href="/public/MD Mazharul Islam Resume.pdf" download>Resume</a>
          </div>
          <a href="mailto:[mdmazharulislam2046@gmail.com]" className="bg-[#e9e9e9] bg-opacity-60 py-3 px-4 md:px-9 rounded-full text-[#222]">Email me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
