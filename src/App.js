import React from "react";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

let myStyle = {
  position: "relative",
  zIndex: '0 !important"',
};

function App() {
  return (
    <div className="App">
      <div style={myStyle}>
        <LandingPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;

