import imgLeftScreen from "../../assets/image/img-left-screen.png";
import imgLefthAbsolute from "../../assets/image/img-left-absolute.png";
import imgRigthScreen from "../../assets/image/img-right-screen.png";
import imgMainScreen from "../../assets/image/img-main-screen.png"; 
import imgMainBottomScreen from '../../assets/image/img-main-bottom-screen.png'

function Home() {
  return (
    <div className="flex justify-center items-center w-full h-[510px]  px-40 mt-14">
      <div className="bg-[#E0E0E0] w-80 h-full flex flex-col justify-end items-center rounded-xl relative">
        <img src={imgLeftScreen} alt="" className=" absolute w-64" />
        <img
          src={imgLefthAbsolute}
          alt=""
          className="absolute right-[-72px] top-[88px] w-64"
        />
      </div>

      <div className="bg-white w-[386px] h-full flex flex-col px-6 justify-between">
        <div className="bg-[#E0E0E0] w-full rounded-xl h-28">
          <img src={imgMainScreen} alt="" className="w-full rounded-xl object-cover	" />
        </div>

        <div></div>

        <div className="bg-[#f9a79b] w-full rounded-xl h-28 flex justify-center items-center ">
          <img src={imgMainBottomScreen} alt="" className="object-cover	" />
        </div>

      </div>
      <div className="bg-[#E0E0E0] w-80 h-full flex flex-col justify-end items-center rounded-xl relative">
        <img src={imgRigthScreen} alt="" className="absolute w-64" />
      </div>
    </div>
  );
}
export default Home;
