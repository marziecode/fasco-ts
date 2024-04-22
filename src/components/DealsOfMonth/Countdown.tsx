function Countdown() {
  return (
    <div className="w-full ">
      <h1 className=" font-serif text-xl font-semibold	">
        Hurry, Before It’s Too Late!
      </h1>

      <div className="flex items-center w-full  gap-0.5 mt-4">
        <div className="flex flex-col items-center justify-center  px-4">
          <div className="shadow-3xl w-12 h-12 rounded-xl flex justify-center items-center">
           21
          </div>
          <h2 className="font-serif mt-2">Day</h2>
        </div>

        <div className="flex flex-col items-center justify-center  px-4">
          <div className="shadow-3xl w-12 h-12 rounded-xl  flex justify-center items-center ">48</div>
          <h2 className=" font-serif mt-2">Hr</h2>
        </div>

        <div className="flex flex-col items-center justify-center  px-4">
          <div className="shadow-3xl w-12 h-12 rounded-xl  flex justify-center items-center">56</div>
          <h2 className="font-serif mt-2">Mins</h2>
        </div>

        <div className="flex flex-col items-center justify-center  px-4">
          <div className="shadow-3xl w-12 h-12 rounded-xl  flex justify-center items-center">20</div>
          <h2 className="font-serif mt-2">Sec</h2>
        </div>
      </div>
    </div>
  );
}
export default Countdown;
