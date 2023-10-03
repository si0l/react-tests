import React from "react";
import OutletWrapper from "../../components/common/OutletWrapper/OutletWrapper";
import { createPair, findIndex, toArray } from "../../various/Generics";

const GenericsPage = () => {
  return (
    <OutletWrapper>
      <p>toArray: {toArray("123")}</p>
      <p>findindex: {findIndex(3, [1, 2, 3, 4])}</p>
      <p>createPair: {createPair(1, "2")}</p>
    </OutletWrapper>
  );
};

export default GenericsPage;
