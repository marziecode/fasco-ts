import DealsDiscription from "./DealsDiscriptios";
import Countdown from "./Countdown";
import { useRef } from "react";
import Slider from "react-slick";
import { ForwardedSlider } from "./ForwardRefSlider";

function DealsOfMonth() {
  const ref = useRef<Slider | null>(null);

  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinity: false,
    // nextArrow: () => {<button>Click</button>},
  };
  return (
    <div className="flex md:w-[1024px]  items-center   my-14 gap-10 ">
      <div className="md:w-[40%] flex flex-col">
        <DealsDiscription />

        <div className="mt-12">
          <Countdown />
        </div>
      </div>
      <div className="flex w-1/2  items-end ">
        <div className="flex ">
          <button
            className="button bg-white shadow-3xl rounded-full w-6 h-6"
            onClick={handlePrevSlide}
          >
            {"<"}
          </button>
          <button
            className="button bg-white shadow-3xl rounded-full w-6 h-6 ml-2"
            onClick={handleNextSlide}
          >
            {">"}
          </button>
        </div>
        <ForwardedSlider ref={ref} {...settings}>
          <div key={1} className="bg-red-200 h-80">
            <h3>1</h3>
          </div>
          <div key={2} className="bg-red-300 h-52">
            <h3>2</h3>
          </div>
          <div key={3} className="bg-red-400 h-52">
            <h3>3</h3>
          </div>
          <div key={4} className="bg-red-500 h-52">
            <h3>4</h3>
          </div>
          <div key={5} className="bg-red-600 h-52">
            <h3>5</h3>
          </div>
          <div key={6} className="bg-red-700 h-52">
            <h3>6</h3>
          </div>
        </ForwardedSlider>
      </div>
    </div>
  );
}
export default DealsOfMonth;
