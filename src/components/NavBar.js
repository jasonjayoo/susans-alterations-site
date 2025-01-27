// import React from "react";

// function NavBar({ currentPage, setCurrentPage }) {
//     return (
//       <div id="tabs">
//         <div className="nav nav-tabs nav-fill u-padding-t--xl" id="nav-tab">
//           <a
//             href="#about"
//             onClick={() => setCurrentPage("About")}
//             className={
//               currentPage === "About"
//                 ? "nav-item nav-link active"
//                 : "nav-item nav-link"
//             }
//           >
//             About
//           </a>
//           <a
//             href="#info"
//             onClick={() => setCurrentPage("Info")}
//             className={
//               currentPage === "Info"
//                 ? "nav-item nav-link active"
//                 : "nav-item nav-link"
//             }
//           >
//             Info
//           </a>
//         </div>
//       </div>
//     );
//   }
  
// export default NavBar;
import React, { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import mainBanner from "../assets/susansAlterations.png"; 

function NavBar({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false); // State for dropdown menu
  const windowWidth = useWindowWidth(); // Use the custom hook to get the window width

  // Debugging log to ensure the width is updating correctly
  console.log("Current window width:", windowWidth);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/closed
  };

  return (
    <div id="tabs">
      {windowWidth <= 650 ? (
        // Hamburger menu for small screens
        <div className="hamburger-menu u-padding-b--sm">
          <button
            onClick={handleMenuToggle}
            className="hamburger-icon u-padding--md"
          >
            ☰ 
          </button>

          {menuOpen && (
            <div className="dropdown-menu">
              <a
                href="#about"
                onClick={() => {
                  setCurrentPage("About");
                  setMenuOpen(false); // Close menu after selection
                }}
                className="dropdown-item"
              >
                About
              </a>
              <a
                href="#info"
                onClick={() => {
                  setCurrentPage("Info");
                  setMenuOpen(false); // Close menu after selection
                }}
                className="dropdown-item"
              >
                Info
              </a>
            </div>
          )}
          <img alt="susans alterations" className="main" src={mainBanner} />
        </div>
      ) : (
        // Regular tabs for larger screens
        <div className="nav nav-tabs nav-fill u-padding-t--md u-padding-b--sm" id="nav-tab">
            <div className="nav-links">
          <a
            href="#about"
            onClick={() => setCurrentPage("About")}
            className={
              currentPage === "About"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
          >
            About
          </a>
          <a
            href="#info"
            onClick={() => setCurrentPage("Info")}
            className={
              currentPage === "Info"
                ? "nav-item nav-link u-padding-l--sm active"
                : "nav-item nav-link u-padding-l--sm"
            }
          >
            Info
          </a>
          </div>

            <img alt="susans alterations" className="main" src={mainBanner} />

          {/* <div className="nav-banner">
            <img alt="susans alterations" className="main" src={mainBanner} />
          </div> */}
          
        </div>
      )}
      
    </div>
  );
}

export default NavBar;

