import React from "react";
import OutletWrapper from "../../../components/common/OutletWrapper/OutletWrapper";

const Transition = () => {
  return (
    <OutletWrapper>
      <div className="flex gap-3">
        <div className="flex items-center">Transition/Animation:</div>
        <div className="h-20 w-20 grid place-items-center bg-blue-400 hover:bg-purple-400 m-3 transition-colors duration-300 ease-in-out delay-300" />
      </div>
      <br />
      <div className="flex gap-3">
        <div className="flex items-center">Animation: ping:</div>
        <div className="h-20 w-20 animate-ping m-3">ttt</div>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center">Animation: pulse:</div>
        <div className="h-20 w-20 animate-pulse m-3">ttt</div>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center">Animation: bounce:</div>
        <div className="h-20 w-20 animate-bounce m-3">ttt</div>
      </div>
    </OutletWrapper>
  );
};

export default Transition;
