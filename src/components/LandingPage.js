import React, { useState } from "react";
import NavBar from "./NavBar";
// import Resume from "./pages/Resume";
import About from "./pages/About";
import Info from "./pages/Info";
// import Contact from "./pages/Contact";

export default function PortfolioMain() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "Info") {
      return <Info />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    // if (currentPage === 'Edu') {
    //   return <Edu />;
    // }
    // if (currentPage === "Contact") {
    //   return <Contact />;
    // }
    // return <Contact />;
  };

  return (
    <div>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
