import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import the Twitter icon from the brand icons

const Footer: React.FC = () => {
  return (
    <>
   <footer className="footer footer-center p-10 backdrop-blur-xl text-white rounded-lg md:hidden">
  <nav className="grid grid-flow-col gap-4">
    <a href="#" className="link link-hover text-lg">About me</a>
    <a href="#" className="link link-hover text-lg">Contact</a>
    <a href="#" className="link link-hover text-lg">Hire Me</a>
    <a href="#" className="link link-hover text-lg">Resume</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4 ">
      <a href="#">
        <FontAwesomeIcon icon={faXTwitter} size="2x"/> {/* Render the Twitter icon */}
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="#">
        {/* Add the Instagram icon */}
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  </nav>
  <aside>
    <p className="text-white">Copyright © 2024 - All right reserved by Remote Desk Developer</p>
  </aside>
</footer>



<div className="hidden md:block"> {/* Hide on screens less than md (768px) */}
  <footer className="footer p-10 bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-lg text-base-content">
    <nav>
      <h6 className="footer-title">Services</h6> 
      <a className="link link-hover">Web Development</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Editing</a>
      <a className="link link-hover">Tutions</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Company</h6> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Socials</h6> 
      <a className="link link-hover">Instagram</a>
      <a className="link link-hover">X</a>
      <a className="link link-hover">Linkedin</a>
    </nav> 
    <form>
      {/* <h6 className="footer-title">Newsletter</h6>  */}
      <fieldset className="form-control w-80">
        <label className="label">
          <span className="label-text">Enter your email address i will reach you out !</span>
        </label> 
        <div className="join">
          <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
          <button className="btn btn-primary join-item">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
</div>
  </>
  );
};

export default Footer;
