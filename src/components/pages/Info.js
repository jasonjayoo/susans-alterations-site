import React from "react";
// import profilePic from "../../assets/mypicture.jpg";

export default function About() {
  return (
    <div id="info" className="info-page">
      <h1 className="u-padding-b--sm">
        <span className="main-title">Please call us for appointments and questions</span>
      </h1>
      <section className="main-section u-padding-b--sm u-text-align--center">
        <p className="u-padding-t--none">
            Location: &nbsp;
            <span className="u-padding-t--md">433 West Commonwealth Avenue  &nbsp; Fullerton, CA 92832</span>
        </p>
      {/* <span className="u-font--xl">Location: &nbsp;</span>
      <span>433 West Commonwealth Avenue  &nbsp; Fullerton, CA 92832</span> */}
      </section>

      <section className="u-padding-t--lg u-text-align--center">
        <p className="u-padding-t--none u-margin-t--md">
            Phone: &nbsp;
            <a href="tel:7147388891" className="phone-link u-text-decoration--none">(714) 738-8891</a>
        </p>
        </section>
        
        <section className="u-padding-b--lg u-text-align--center">
            <h3 className="u-font--xl">Hours:</h3>
            <ul className="hours-list">
                <li><strong>Monday:</strong> 9:30 AM - 6:30 PM</li>
                <li><strong>Tuesday:</strong> 9:30 AM - 6:30 PM</li>
                <li><strong>Wednesday:</strong> 9:30 AM - 6:30 PM</li>
                <li><strong>Thursday:</strong> 9:30 AM - 6:30 PM</li>
                <li><strong>Friday:</strong> 9:30 AM - 6:30 PM</li>
                <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
                <li><strong>Sunday:</strong> Closed</li>
            </ul>
        </section>
    </div>


  );
}
