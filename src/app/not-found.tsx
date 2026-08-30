import Image from "next/image";
import Link from "next/link";

import notfound from "@/assets/notfound.png";
import { LiaDoorClosedSolid, LiaDoorOpenSolid } from "react-icons/lia";
import { IoIosArrowRoundBack } from "react-icons/io";

export const metadata = {
    title: "Not Found"
}

export default function NotFound() {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center">
      <Image
        src={notfound}
        alt="not found"
        className="w-100 md:w-150 lg:w-200"
      />
      <div className="text-center">
        <div className="md:text-4xl mb-8 text-2xl">how you get here?</div>
        <Link
          href="/"
          className="mt-4 md:text-2xl rounded-full bg-rose-400 px-12 py-4 shadow shadow-slate-500 border border-rose-800 hover:inset-shadow-2xs hover:inset-shadow-rose-900 transition-all duration-200 relative flex justify-between items-center group"
        >
          <div className="relative w-10 h-10">
            <LiaDoorClosedSolid
              className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-400"
              size={40}
            />

            <LiaDoorOpenSolid
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              size={40}
            />
          </div>
          <span className="group-hover:translate-x-5 transition-all duration-200 ">
            GET OUT
          </span>
          <IoIosArrowRoundBack
            className="group-hover:-translate-x-35 transition-all duration-500"
            size={40}
          />
        </Link>
      </div>
    </div>
  );
}
