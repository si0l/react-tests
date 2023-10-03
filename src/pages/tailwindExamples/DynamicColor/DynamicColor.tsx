import React from "react";
import OutletWrapper from "../../../components/common/OutletWrapper/OutletWrapper";

const DynamicColor = () => {
  const slate = "slate";
  const blue = "blue";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const colors = ["bg-blue-400"]; //"bg slate 900"
  return (
    <OutletWrapper>
      <p>
        Tailwind removes colors that do not explicitly exist as a string (so
        dynamicly created color classes disappear). In this case background
        color should be slate-900:
      </p>
      <div className={`h-20 w-20 border-2 border-black bg-${slate}-900`} />
      <p>
        If color exists somewhere as a string (even as a comment!), then dynamic
        color will also work
      </p>
      <div className={` h-20 w-20 border-black bg-${blue}-400 border-2`} />
    </OutletWrapper>
  );
};
// border-solid border-2 border-indigo-600
export default DynamicColor;
