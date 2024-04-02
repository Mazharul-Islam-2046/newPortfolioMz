const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-28">
          <h1 className="font-bold text-2xl tracking-wide">Mazharul Islam</h1>
          <p className="text-base font-semibold text-[#3c3c3c] tracking-wide">
            My Linkedin Profile
          </p>
        </div>
        <div className="flex items-center gap-14 text-base font-semibold text-[3c3c3c] tracking-wide">
          <div className="flex items-center gap-7">
            <p>Project</p>
            <p>About Me</p>
          </div>
          <button className="bg-[#e9e9e9] bg-opacity-60 pt-3 pb-3 px-9 rounded-full">Email me</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
