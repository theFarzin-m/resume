"use client";

import { useState } from "react";
import { LiquidGlass } from "@liquidglass/react";

const about = {
  fa: {
    title: "درباره من",
    content: [
      "سلام! من فرزین هستم – یک Front-End Developer که عاشق طراحی تجربه‌های وب جذاب و کاربردی است. مسیر برنامه‌نویسی را از علاقه شخصی شروع کردم و با تمرین، پروژه‌های واقعی و یادگیری مداوم توانستم مهارت‌های عملی خود را به سطح حرفه‌ای برسانم.",
      "از تبدیل ایده‌های ساده به وب‌سایت‌های تعاملی و کاربردی لذت می‌برم. کار با React، طراحی رابط کاربری، ارتباط با API‌ها و حل چالش‌های فنی بخش‌های مورد علاقه من هستند.",
      "در کنار برنامه‌نویسی، مدیریت فروشگاه شخصی خودم را نیز بر عهده دارم که باعث شده مهارت‌هایی مثل مسئولیت‌پذیری، حل مسئله، صبر و ارتباط مؤثر با مشتریان را تقویت کنم.",
      "من معتقدم یادگیری هیچ‌وقت تمام نمی‌شود و همیشه در حال یادگیری تکنولوژی‌ها و ابزارهای جدید هستم تا پروژه‌های بهتر و کاربردی‌تر بسازم. اگر پروژه‌ای داری یا دوست داری همکاری کنیم، خوشحال می‌شوم با من در ارتباط باشی.",
    ],
  },
  en: {
    title: "About Me",
    content: [
      "Hi! I'm Farzin – a Front-End Developer who loves building engaging and user-friendly web experiences. I started programming out of personal passion and, through practice, real projects, and continuous learning, I’ve developed my practical skills to a professional level.",
      "I truly enjoy transforming simple ideas into interactive and functional websites. Working with React, designing user interfaces, connecting to APIs, and solving technical challenges are the parts of development that excite me the most.",
      "Besides programming, I also manage my own local business, which has helped me develop strong problem-solving abilities, patience, responsibility, and effective communication skills.",
      "I believe that learning never stops and I’m always exploring new technologies and tools to build better and more practical projects. If you have a project in mind or want to collaborate, I’d be happy to hear from you.",
    ],
  },
};

export default function About() {
  const [lang, setLang] = useState("en");

  return (
    <section
      className="container mx-auto custom-full flex-col"
      data-aos="zoom-out"
      id="about"
    >
      <LiquidGlass
        borderRadius={20}
        blur={2}
        contrast={0.99}
        brightness={1}
        saturation={1}
        className="perspective-distant min-h-300 sm:min-h-150 md:min-h-130 max-w-250"
      >
        <div
          className={`relative w-full h-full transition-all duration-800 transform-3d will-change-transform  ${lang === "en" ? "rotate-y-180" : "rotate-y-0"}`}
        >
          <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center rounded-lg shadow-[0_0_5px_0_#33333399] text-justify rotate-y-180">
            <div className="text-3xl text-bold mb-3">{about.en.title}</div>
            <div className="mx-5 leading-8 text-xl">
              <p>{about.en.content}</p>
            </div>
          </div>

          <div
            className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center rounded-lg shadow-[0_0_5px_0_#33333399] text-justify"
            dir="rtl"
          >
            <div className="mb-3 text-3xl text-bold">{about.fa.title}</div>
            <div className="mx-5 leading-8 text-xl">
              <p>{about.fa.content}</p>
            </div>
          </div>
        </div>
      </LiquidGlass>

      <div className="flex justify-center mt-4">
        <button
          className="border border-sky-300 rounded-md transition-all duration-1000 hover:shadow-[0_5px_0_#999] mx-2 disabled:inset-shadow-[0_5px_0_#999] disabled:cursor-not-allowed p-2 active:inset-shadow-[0_3px_0_#555]"
          disabled={lang === "fa"}
          onClick={() => setLang("fa")}
        >
          Fa
        </button>
        <button
          className="border border-sky-300 rounded-md transition-all duration-200 hover:shadow-[0_5px_0_#999] mx-2 disabled:inset-shadow-[0_5px_0_#999] disabled:cursor-not-allowed p-2 active:inset-shadow-[0_3px_0_#555]"
          disabled={lang === "en"}
          onClick={() => setLang("en")}
        >
          En
        </button>
      </div>
    </section>
  );
}
