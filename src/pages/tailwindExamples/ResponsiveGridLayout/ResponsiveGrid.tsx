import React from "react";
import OutletWrapper from "../../../components/common/OutletWrapper/OutletWrapper";

const ResponsiveGridLayout = () => {
  return (
    <OutletWrapper>
      <p>2 cols for small and large screen(change width), 3 cols for medium</p>
      <div className="grid grid-cols-2 gap-10 p-5 sm:max-md:grid-cols-3">
        <div className="h-20 bg-green-400"></div>
        <div className="h-20 bg-green-400"></div>
        <div className="h-20 bg-green-400"></div>
      </div>
      <p>2 cols for width &lt; 800px, 3 cols otherwise</p>
      <div className="grid grid-cols-2 gap-10 p-5 min-[800px]:grid-cols-3">
        <div className="h-20 bg-orange-400"></div>
        <div className="h-20 bg-orange-400"></div>
        <div className="h-20 bg-orange-400"></div>
      </div>
    </OutletWrapper>
  );
};

export default ResponsiveGridLayout;
