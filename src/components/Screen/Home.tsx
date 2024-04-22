import imgLeftScreen from "../../assets/image/img-left-screen.png";
import imgLefthAbsolute from "../../assets/image/img-left-absolute.png";
import imgRigthScreen from "../../assets/image/img-right-screen.png";
import imgMainScreen from "../../assets/image/img-main-screen.png";
import imgMainBottomScreen from "../../assets/image/img-main-bottom-screen.png";
import textMainTop from "../../assets/image/tex-logo-main-main-top.svg";
import textMainBottom from "../../assets/image/text-logo-main-bottom.svg";
import logoChanel from '../../assets/image/logoChanel.svg'
import logoLouisVuitton from '../../assets/image/logoLouisVuitton.svg'
import logoPerada from '../../assets/image/logoPerada.svg'
import logoCalvinKlein from '../../assets/image/logoCalvinKlein.svg'
import logoDenim from '../../assets/image/logoDenim.svg'

function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="flex justify-center items-center w-full h-[950px]  md:w-3/4  mt-14">
        <div className="bg-[#E0E0E0] w-80 h-full flex flex-col justify-end items-end rounded-xl relative">
          <img src={imgLeftScreen} alt="" className=" absolute w-72" />
          <img
            src={imgLefthAbsolute}
            alt=""
            className="absolute right-[-106px] top-[110px] w-72 hidden lg:block"
          />
        </div>

        <div className="bg-white w-[386px] h-full flex flex-col px-6 justify-between">
          <div className="bg-[#E0E0E0] w-full rounded-xl h-[120px]">
            <img
              src={imgMainScreen}
              alt=""
              className="w-full rounded-xl object-cover h-full"
            />
          </div>

          <div className="w-full  h-80 flex flex-col justify-start items-end">
            <div className=" w-full h-2/3 flex flex-col justify-center items-end">
              <img src={textMainTop} alt="" />
              <img src={textMainBottom} alt="" className="w-full h-48" />
            </div>
            <div className="w-full h-1/3  flex justify-center items-center flex-col">
              <h5 className="text-[#484848] font-[poppins-regular] font-thin text-1xl">
                NEW COLLECTION
              </h5>
              <button className="bg-black w-52 h-14 rounded-xl text-white mt-4 cursor-pointer">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="bg-[#f9a79b] w-full rounded-xl h-[120px] flex justify-center items-end ">
            <img src={imgMainBottomScreen} alt="" className="object-cover	" />
          </div>
        </div>
        <div className="bg-[#E0E0E0] w-80 h-full flex flex-col justify-end items-center rounded-xl relative">
          <img src={imgRigthScreen} alt="" className="w-72" />
        </div>
      </div>
      <div className="w-full h-48 flex justify-center items-center  mt-7 px-40 ">
        <img src={logoChanel} alt="" className=" w-36 cursor-pointer" />
        <img src={logoLouisVuitton} alt=""  className="w-36 ml-16 cursor-pointer"/>
        <img src={logoPerada} alt=""  className="w-36 ml-16 cursor-pointer"/>
        <img src={logoCalvinKlein} alt=""  className="w-36 ml-16 cursor-pointer"/>
        <img src={logoDenim} alt=""  className="w-36 ml-16 cursor-pointer"/>
      </div>
    </div>
  );
}
export default Home;
