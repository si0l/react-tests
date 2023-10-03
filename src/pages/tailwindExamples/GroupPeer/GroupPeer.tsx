import React from "react";
import OutletWrapper from "../../../components/common/OutletWrapper/OutletWrapper";

const GroupPeer = () => {
  return (
    <OutletWrapper>
      <div className="flex gap-3">
        <div className="flex items-center">Group example:</div>
        <div className="h-20 w-20 group/g1 grid place-items-center bg-blue-400 hover:bg-purple-400">
          <div className="h-5 w-5 bg-black group-hover/g1:bg-green-400 peer-hover/p1:bg-yellow-300"></div>
          <div className="h-5 w-5 bg-black group-hover/g1:bg-red-400"></div>
        </div>
      </div>
      <br />
      <div className="flex gap-3">
        <div className="flex items-center">
          Peer example (only previous siblings can be peers):
        </div>
        <div className="h-20 w-20 peer grid place-items-center bg-blue-400 hover:bg-purple-400" />
        <div className="peer-hover:bg-slate-500 h-20 w-20 group/g1 grid place-items-center bg-blue-400" />
      </div>
    </OutletWrapper>
  );
};

export default GroupPeer;
