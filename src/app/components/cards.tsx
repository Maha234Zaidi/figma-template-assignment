export default function Card() {
  return (
    <>
      <div className="flex flex-row justify-center mb-10 space-x-4 ">
        {/* Card 1 */}
        <div className=" w-[328px] h-[292px]  bg-white pt-[35px] pr-[40px] pb-[35px] pl-[40px]">
          <div className="w-14 h-16 bg-[#FFDCD1] rounded-lg"></div>

          <h3 className="text-base font-bold font-[Montserrat] leading-6 tracking-normal text-[#252B42] mt-3">
            training Courses
          </h3>

          <div className="w-[50px] h-[2px] bg-[#E74040] mt-5"></div>

          <p className="w-[222px] h-[60px] text-sm font-normal leading-5 tracking-normal text-[#737373] mt-7 font-[Montserrat]">
            The gradual accumulation of information about atomic and <br />
            small-scale behaviour...
          </p>
        </div>

        {/* Card 2 */}

        <div className=" w-[328px] h-[292px]  bg-white pt-[35px] pr-[40px] pb-[35px] pl-[40px]">
          <div className="w-14 h-16 bg-[#B9EAA8] rounded-lg"></div>

          <h3 className="text-base font-bold leading-6 tracking-normal text-[#252B42] font-[Montserrat] mt-3">
            2,769 online courses
          </h3>

          <div className="w-[50px] h-[2px] bg-[#E74040] mt-5"></div>

          <p className="w-[222px] h-[60px] text-sm font-normal leading-5 tracking-normal text-[#737373] mt-7 font-[Montserrat]">
            The gradual accumulation of information about atomic and <br />
            small-scale behaviour...
          </p>
        </div>

        {/* Card 3 */}

        <div className=" w-[328px] h-[292px]  bg-[#23A6F0] pt-[35px] pr-[40px] pb-[35px] pl-[40px]">
          <div className="w-14 h-16 bg-[#ffffff] rounded-lg"></div>

          <h3 className="text-base font-bold leading-6 tracking-normal text-[#ffffff] mt-3 font-[Montserrat]">
            training Courses
          </h3>

          <div className="w-[50px] h-[2px] bg-[#ffffff] mt-5"></div>

          <p className="w-[222px] h-[60px] text-sm font-normal leading-5 tracking-normal text-[#ffffff] mt-7 font-[Montserrat]">
            The gradual accumulation of information about atomic and <br />
            small-scale behaviour...
          </p>
        </div>
      </div>
    </>
  );
}
