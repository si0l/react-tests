import React from "react";
import OutletWrapper from "../../../components/common/OutletWrapper/OutletWrapper";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const defaultClass = "h-20 w-20 py-1 px-6 rounded-md bg-yellow-500 text-black";

const TailwindMerge: React.FC<Props> = ({ className }) => {
  return (
    <OutletWrapper>
      <p>
        Pass className as a parameter to the component and merge with default (overriden bg color)
      </p>
      <div className={twMerge(defaultClass, className)}></div>
    </OutletWrapper>
  );
};

export default TailwindMerge;
