import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayOut = ({ children }) => {
  return (
    <div className="">
      {/* header */}
      <Header />

      {/* main area */}
      <div className="main" style={{ minHeight: "80vh" }}>
        {children}
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};
