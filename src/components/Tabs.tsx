import { cn } from "@/helper/helpers";
import { ReactNode } from "react";
import { Link } from "react-scroll";

type TabItemProps = React.ComponentPropsWithoutRef<typeof Link>;

type TabProps = {
  children: ReactNode;
  className?: string;
};

export default function Tabs({ children, className }: TabProps) {
  return (
    <div
      className={cn(
        "bg-blue-400 z-50 text-gray-50 rounded-full shadow-md shadow-gray-200 flex md:justify-evenly justify-between items-center  md:gap-4 md:px-4 md:py-2  backdrop-blur-lg backdrop-contrast-200 w-full md:max-w-fit mx-auto top-10 sticky",
        className,
      )}
    >
      {children}
    </div>
  );
}

function TabItem({ children, className, ...props }: TabItemProps) {
  return (
    <Link
      className={cn(
        "flex justify-center items-center gap-1 cursor-pointer no-underline active:inset-shadow-gray-400 hover:bg-blue-200 hover:inset-shadow-sm hover:inset-shadow-gray-50 hover:text-blue-500 text-sm md:text-lg rounded-full w-30 md:w-35 p-1 md:px-2 md:py-1",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export { Tabs, TabItem };
