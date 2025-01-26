import React from "react";

const Footer = () => {
  return (
    <div className="logolinks flex-inline justify-content-center">
      <div className="logos">
        <a
          id="yelp"
          href="https://www.yelp.com/biz/susan-tailoring-and-alterations-fullerton?osq=susans+alterations&override_cta=Request+pricing+%26+availability"
          className="yelplogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-yelp fa-3x contact"></i>
        </a>

        <a
          id="myemail"
          href="mailto:jasonjayoo@outlook.com"
          alt="email Jason Yoo"
          title="email me at jasonjayoo@outlook.com"
        >
          <i class="fa fa-envelope fa-3x contact" id="emaillogo"></i>
        </a>
      </div>
      <footer className="copyright has-text-centered">
        <span>
          <strong>© Susan's Alterations™</strong> All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
