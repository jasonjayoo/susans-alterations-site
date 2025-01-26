import React from "react";
import LandingPage from "./components/LandingPage";


let myStyle = {
  position: "relative",
  zIndex: '0 !important"',
  flex: "1",
};

function App() {
  return (
    <div className="App">
      <div style={myStyle}>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;

