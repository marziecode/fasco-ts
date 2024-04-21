function Navbar() {
  return (
    <div className="w-full h-20  px-40 flex items-center justify-between">

      <div className="w-40 h-full flex justify-center items-center ">
        <h2 className= " text-[#484848] font-[volkhov-regular] font-thin text-6xl	">Fasco</h2>
      </div>
      <div className="w-full h-full  flex justify-end items-center">
        <h5 className="text-[#484848] cursor-pointer">Home</h5>
        <h5 className="text-[#484848] ml-10 cursor-pointer">Deals</h5>
        <h5 className="text-[#484848] ml-10 cursor-pointer">New Arrivals</h5>
        <h5 className="text-[#484848] ml-10 cursor-pointer">Packages</h5>
        <h5 className="text-[#484848] ml-10 cursor-pointer">Sign in</h5>
        <div className="w-[144px] h-full  ml-10 flex justify-center items-center">
            <button className="w-full h-12 bg-black rounded-xl text-white cursor-pointer">Sign up</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
