import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const OutletWrapper = ({ children }: Props) => {
  return (
    <div style={{ height: "100vh" }} className="ml-[320px] p-3">
      {children}
    </div>
  );
};

export default OutletWrapper;
