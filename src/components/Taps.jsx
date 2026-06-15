import { Link } from "react-scroll";
import { cn } from "../helpers/helpers";

export default function Taps({ children, className }) {
  return (
    <div
      className={cn(
        "bg-blue-400 z-50 text-gray-50 rounded-full shadow-md shadow-gray-200 flex justify-evenly items-center  md:gap-4 gap-1 md:px-4 md:py-2  backdrop-blur-lg backdrop-contrast-200 w-full md:max-w-fit mx-auto top-5 sticky",
        className,
      )}
    >
      {children}
    </div>
  );
}

function TapItem({ children, className, ...props }) {
  return (
    <Link
      className={cn(
        "flex flex-col justify-center items-center gap-1 cursor-pointer no-underline active:inset-shadow-gray-400 hover:bg-blue-200 hover:inset-shadow-sm hover:inset-shadow-gray-50 hover:text-blue-500 text-xs md:text-lg rounded-full w-35 md:w-35 p-1 md:px-4 md:py-2",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

Taps.Item = TapItem;
