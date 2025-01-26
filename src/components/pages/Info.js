import React from "react";
// import profilePic from "../../assets/mypicture.jpg";

export default function About() {
  return (
    <div id="about">
      {/* <img id="jason" alt="Picture of Jason Yoo" src={profilePic} /> */}
      <h1 className="u-border-b u-padding-b--xxl">
        <span className="main-title">Information</span>
      </h1>
      <section className="u-padding-b--lg u-padding-t--lg u-text-align--center">
      <span className="main-title">433 West Commonwealth Avenue  &nbsp; Fullerton, CA 92832</span>
      </section>

      <section className="u-padding-b--lg u-padding-t--lg u-text-align--center">
        <p className="u-padding-t--none">
            Phone: &nbsp;
            <a href="tel:7147388891" className="phone-link u-text-decoration--none">(714)738-8891</a>
        </p>
        </section>

    </div>


  );
}
