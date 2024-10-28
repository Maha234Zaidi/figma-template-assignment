import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Navbar section */}
      <div className="h-24 flex">
        <h3 className="mt-5 ml-32 text-2xl leading-10 font-bold font-[Montserrat]">
          BrandName
        </h3>
        <div className="mt-7 ml-14 text-sm h-6 font-[Montserrat] font-bold text-center leading-6 tracking-wider space-x-4  flex text-white ">
          <Link href={""}>Home</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Pricing</Link>
          <Link href={""}>Contact</Link>
        </div>
        <span className="pl-64 font-bold space-x-9 m-5 ">
          <button className=" text-white p-2 leading-5 tracking-wider text-sm font-[Montserrat]">
            Login
          </button>
          <button className="bg-[#23A6F0] pt-2 pr-6 pb-2 pl-6 uppercase leading-5 tracking-wider rounded-sm text-white text-sm hover:bg-blue-700 font-[Montserrat]">
            Join Us
          </button>
        </span>
      </div>
      {/* Navbar section end */}
    </>
  );
}
