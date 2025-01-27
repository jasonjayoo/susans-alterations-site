import React, { useState, useEffect, useRef } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import mainBanner from "../assets/susansAlterations.png"; 

function NavBar({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false); // State for dropdown menu
  const windowWidth = useWindowWidth(); // Use the custom hook to get the window width
  const dropdownRef = useRef(null);

  // Debugging log to ensure the width is updating correctly
  console.log("Current window width:", windowWidth);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/closed
  };

  const handleBannerClick = () => {
    setCurrentPage("Info"); // Set the page to "Info"
    window.location.hash = "#info"; // Redirect to "Info" section
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest(".hamburger-icon")) {
        setMenuOpen(false); // Close the dropdown if clicked outside
      }
    };
    // Add event listener to detect clicks outside of the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <div ref={dropdownRef}  className="dropdown-menu">
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
          <img alt="susans alterations" className="main" src={mainBanner} onClick={handleBannerClick}/>
        </div>
      ) : (
        // Regular tabs for larger screens
        <div className="nav nav-tabs nav-fill u-padding-t--md u-padding-b--sm" id="nav-tab">
            <div className="nav-links">
            <a
            href="#info"
            onClick={() => setCurrentPage("Info")}
            className={
              currentPage === "Info"
                ? "nav-item nav-link active"
                : "nav-item nav-link "
            }
          >
            Info
          </a>
          <a
            href="#about"
            onClick={() => setCurrentPage("About")}
            className={
              currentPage === "About"
                ? "nav-item nav-link u-padding-l--sm active"
                : "nav-item nav-link u-padding-l--sm"
            }
          >
            About
          </a>

          </div>

            <img alt="susans alterations" className="main" src={mainBanner} onClick={handleBannerClick}/>

          {/* <div className="nav-banner">
            <img alt="susans alterations" className="main" src={mainBanner} />
          </div> */}
          
        </div>
      )}
      
    </div>
  );
}

export default NavBar;

