import React, { useState } from "react";
import Image1 from "../../assets/carousel/image1.png";
import Image2 from "../../assets/carousel/image2.png";
import Image3 from "../../assets/carousel/image3.png";
import Image4 from "../../assets/carousel/image4.png";
import Image5 from "../../assets/carousel/image5.png";
import Image6 from "../../assets/carousel/image6.png";
import Image7 from "../../assets/carousel/image7.png";
import Image8 from "../../assets/carousel/image8.png";
import Image9 from "../../assets/carousel/image9.png";
import Image10 from "../../assets/carousel/image10.png";
import Image11 from "../../assets/carousel/image11.png";
import Image12 from "../../assets/carousel/image12.png";
import mainBanner from "../../assets/susansAlterations.png";
import Mobile from "./Mobile"
import useWindowWidth from "../../hooks/useWindowWidth";


const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const windowWidth = useWindowWidth(); 

  const handlePrevious = () => {
    setAnimationClass("slide-in-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setAnimationClass("");
    }, 300); // Match the animation duration
  };

  const handleNext = () => {
    setAnimationClass("slide-in-right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setAnimationClass("");
    }, 300); // Match the animation duration
  };

  return (
    <div id="about">
      {/* <h1 className="u-padding-b--none u-margin-b--none">
        <span className="main-title">Susan's Alterations</span>
      </h1> */}

        <img alt="susans alterations" className="main" src={mainBanner} />

      

      <div className="carousel u-margin-b--md">
        <button className="carousel-button prev" onClick={handlePrevious}>
          &lt;
        </button>
        <img
          className={`carousel-image ${animationClass}`}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
        <button className="carousel-button next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      {windowWidth <= 650 && <Mobile />} 
    </div>
  );
}
