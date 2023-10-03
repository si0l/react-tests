import React from "react";
import NavBar from "./navigation/NavBar/NavBar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
