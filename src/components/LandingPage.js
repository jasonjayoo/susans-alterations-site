import React, { useState } from "react";
import NavBar from "./NavBar";
// import Resume from "./pages/Resume";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";

export default function PortfolioMain() {
  const [currentPage, setCurrentPage] = useState("About");
//   const renderPage = () => {
//     if (currentPage === "Resume") {
//       return <Resume />;
//     }
//     if (currentPage === "About") {
//       return <About />;
//     }
//     // if (currentPage === 'Edu') {
//     //   return <Edu />;
//     // }
//     if (currentPage === "Portfolio") {
//       return <Portfolio />;
//     }
//     return <Contact />;
//   };

  return (
    <div>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* {renderPage()} */}
    </div>
  );
}
