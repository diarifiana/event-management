import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const rootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default rootLayout;
