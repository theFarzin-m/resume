"use client";

import { ReactTyped } from "react-typed";
import Image from "next/image";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

import avatar from "@/assets/Avatar.jpg";

export default function Title() {
  return (
    <section className="custom-full" id="title">
      <div className="conatiner px-2 mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="w-60 h-60 rounded-full mb-10 overflow-hidden shadow-[5px_8px_5px_2px] shadow-gray-700">
            <Image src={avatar} alt="farzin avatar" />
          </div>
        </div>
        <h1 className="text-4xl" data-aos="zoom-in">
          <ReactTyped
            strings={["Hello", "I'm Farzin Abbasi", "Farzin'm"]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1200}
            startDelay={500}
            loop={true}
          />
        </h1>
        <h2
          className="md:text-base mt-4 mb-3 text-secondary text-center text-sm"
          data-aos="zoom-in"
        >
          Crafting Clean Code and Creative Design in React
        </h2>
        <div
          className="flex gap-4 justify-start items-center bg-stone-600/50 transparent p-2 rounded-lg w-fit shadow-[8px_5px_0px_#333]"
          data-aos="flip-right"
        >
          <a
            href="https://t.me/farzin_man"
            target="_blank"
            rel="noreferrer"
            className="outline-0 border-0 flex flex-col w-12.5 h-12.5 rounded-full overflow-hidden transition-[0.6s cubic-bezier(0.16, 1, 0.3, 1)] group hover:shadow-[0 0.625em 1em 0 var(--color-stone-400)]"
          >
            <div className="translate-y-0 w-full transition-[0.6s cubic-bezier(0.16, 1, 0.3, 1)] hover:shadow-[0 0.625em 1em 0] hover:shadow-stone-400 group-hover:-translate-y-full duration-500">
              <span className="bg-sky-500 flex items-center justify-center h-12.5 text-2xl">
                <FaTelegramPlane color="#fff" />
              </span>
            </div>
            <div className="translate-y-0 w-full transition-[0.6s cubic-bezier(0.16, 1, 0.3, 1)] hover:shadow-[0 0.625em 1em 0] hover:shadow-stone-400 group-hover:-translate-y-full duration-500">
              <span className="bg-sky-50 flex items-center justify-center h-12.5 text-2xl">
                <FaTelegramPlane color="#24A1DE" />
              </span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/farzinabbasi/"
            className="outline-0 border-0 flex flex-col w-12.5 h-12.5 rounded-full overflow-hidden transition-[0.6s cubic-bezier(0.16, 1, 0.3, 1)] group"
            target="_blank"
            rel="noreferrer"
          >
            <div className="translate-y-0 w-full transition-[0.6s cubic-bezier(0.16, 1, 0.3, 1)] hover:shadow-[0 0.625em 1em 0] hover:shadow-stone-400 group-hover:-translate-y-full duration-500">
              <span className="bg-sky-50 flex items-center justify-center h-12.5 text-2xl">
                <FaLinkedinIn color="#0072d1" />
              </span>
            </div>
            <div className="translate-y-0 w-full transition-[0.6s cubic-bezier(0.16, 1, 0.3, 1)] hover:shadow-[0 0.625em 1em 0] hover:shadow-stone-400 group-hover:-translate-y-full duration-500">
              <span className="bg-sky-700 flex items-center justify-center h-12.5 text-2xl">
                <FaLinkedinIn color="#fff" />
              </span>
            </div>
          </a>

          <a
            href="https://github.com/theFarzin-m"
            className="outline-0 border-0 flex flex-col w-12.5 h-12.5 rounded-full overflow-hidden transition-[0.6s cubic-bezier(0.16, 1, 0.3, 1)] group"
            target="_blank"
            rel="noreferrer"
          >
            <div className="translate-y-0 w-full transition-[0.6s cubic-bezier(0.16, 1, 0.3, 1)] hover:shadow-[0 0.625em 1em 0] hover:shadow-stone-400 group-hover:-translate-y-full duration-500">
              <span className="bg-gray-950 flex items-center justify-center h-12.5 text-2xl">
                <PiGithubLogoFill color="#fff" />
              </span>
            </div>
            <div className="translate-y-0 w-full transition-[0.6s cubic-bezier(0.16, 1, 0.3, 1)] hover:shadow-[0 0.625em 1em 0] hover:shadow-stone-400 group-hover:-translate-y-full duration-500">
              <span className="bg-gray-50 flex items-center justify-center h-12.5 text-2xl">
                <PiGithubLogoFill color="#000" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
