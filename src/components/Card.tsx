import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import { Skill } from "@/types";

interface SkillProps {
  skill: Skill;
}

export default function Card({ skill }: SkillProps) {
  const { level, icon, title } = skill;
  const emtStars = 5 - level;

  const Icon = icon;

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="flex gap-4 items-center justify-around flex-col m-2.5 bg-gray-800/20 border border-gray-50 text-center cursor-pointer transition-all backdrop-blur-md duration-500 select-none shadow-[0_0_25px] shadow-gray-950/20 text-gray-950 text-bolder rounded-[20px_30px_0px_30px] px-4 py-10 hover:border-[#787878] hover:scale-110 max-h-50 w-45">
        <div className="text-center">
          <Icon fontSize="60px" />
        </div>
        <div className="">
          <h4> {title} </h4>
          {level && (
            <div className="flex justify-center items-center">
              {[...Array(level)].map((s, i) => (
                <span key={i}>
                  <IoIosStar color="gold" fontSize="20px" />
                </span>
              ))}
              {[...Array(emtStars)].map((s, i) => (
                <span key={i}>
                  <IoIosStarOutline color="#787878" fontSize="20px" />
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
