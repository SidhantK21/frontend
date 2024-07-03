import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faXmark, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useScroll } from "../context/scrollcontext";
import { useScrollMob } from "../context/scrollforMobile";
import axios from "axios";

const Footer: React.FC = () => {
  const { contactsection } = useScroll();

  const [pop, setPop] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [inSights, setInsights] = useState(false);
  const [contactFormVisible, setContactFormVisible] = useState(false);
  const [visible, setVisible] = useState(pop);

  const [userName, setuserName] = useState("");
  const [emailAddress, setemailAdd] = useState("");
  const [details, setDetails] = useState("");
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [userPresent, setUserPresent] = useState(false);

  useEffect(() => {
    if (pop) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [pop]);

  const clickInsights = () => {
    setInsights(!inSights);
    setContactFormVisible(true);
  };

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => {
        setPop(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [visible, setPop]);

  const click = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (email.trim() === "") {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setTimeout(() => {
      setSubmitted(true);
      setPop(true);
    }, 1000);
  };

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // add the link to the resume file in the folder and write it here so that i resume can be downloaded 
    link.href = '/resume.pdf';
    // Set the download attribute to suggest a filename
    link.download = 'resume.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };

  const [contactFormError, setContactFormError] = useState("");

  const handleSubmit = async () => {
  try {
    if (!userName.trim() || !emailAddress.trim() || !details.trim()) {
      setContactFormError("Please fill in all the fields.");
      console.log(contactFormError);
      return;
    }
    
    
        const response = await axios.post("http://localhost:3000/sendDet", {
          userName: userName,
          emailAddress: emailAddress,
          details: details
        });
    
        if (response.data.msg === "A project request is already been made!") {
          setUserPresent(true);
          setTimeout(() => setUserPresent(false), 3000);
        } else {
          setShowSuccessCard(true);
          setTimeout(() => setShowSuccessCard(false), 3000);
        }

  } catch (error) {
    console.error('Error:', error);
  }
  };
const {contactsectionMob}=useScrollMob();
  return (

    <>
      <footer ref={contactsectionMob} className="footer footer-center p-10 backdrop-blur-xl text-white rounded-lg md:hidden">
        <nav className="grid grid-flow-col gap-4">
          <a href="#" className="link link-hover text-lg">About me</a>
          <a href="#" className="link link-hover text-lg">Contact</a>
          <a href="#" className="link link-hover text-lg">Hire Me</a>
          <a onClick={handleDownload} href="#" className="link link-hover text-lg">Resume</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/Sidhant_k21?t=3yt4rp6OV52jw-an05xmBQ&s=08" target="_blank" rel="noopener noreferrer" className="link link-hover">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/r.sidhantsingh" target="_blank" rel="noopener noreferrer" className="link link-hover">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/sidhant-singh-815a75246/" target="_blank" rel="noopener noreferrer" className="link link-hover">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-white">Copyright © 2024 - All right reserved by Remote Desk Developer</p>
        </aside>
      </footer>

      <div ref={contactsection} className="hidden md:block">
        <footer className="footer p-10 bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-lg text-base-content">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Web Development</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Editing</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About me</a>
            <div>
              <a onClick={clickInsights} className="link link-hover">Contact for project</a>
            </div>
            <a className="link link-hover">Hire me</a>
          </nav>
          <nav>
            <h6 className="footer-title">Socials</h6>
            <a href="https://www.instagram.com/r.sidhantsingh" target="_blank" rel="noopener noreferrer" className="link link-hover">Instagram</a>
            <a href="https://www.linkedin.com/in/sidhant-singh-815a75246/" target="_blank" rel="noopener noreferrer" className="link link-hover">Linkedin</a>
            <a href="https://x.com/Sidhant_k21?t=3yt4rp6OV52jw-an05xmBQ&s=08" target="_blank" rel="noopener noreferrer" className="link link-hover">X</a>
          </nav>
          <form>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address I will reach you out!</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-primary join-item" onClick={click}>Subscribe</button>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </fieldset>
          </form>
        </footer>
      </div>

      <AnimatePresence>
        {pop && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="border backdrop-blur-3xl rounded-lg shadow-lg p-8 mb-32 relative bg-gray-800 bg-opacity-70 text-white"
            >
              {submitted && (
                <div className="text-center">
                  <button className="absolute top-1 right-3 text-gray-100 hover:text-gray-300" onClick={() => setPop(false)}>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                  </button>
                  <div className="flex flex-row items-center justify-center mt-1">
                    <FontAwesomeIcon icon={faCircleCheck} size="2x" className="text-green-300" />
                    <span className="mt-1 ml-4">Hang tight, I will reach you out!!</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {contactFormVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-sm"
          >
            <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full text-white">
              <div className="relative flex flex-col items-center mb-4">
                <h2 className="text-2xl mb-2 font-bold">Provide the details</h2>
                <button className="text-gray-400 hover:text-gray-100 absolute top-0 right-0" onClick={() => setContactFormVisible(false)}>
                  <FontAwesomeIcon icon={faTimes} className="ml-10" />
                </button>
              </div>
              <form>
                <div className="mb-4 space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      className="peer py-3 px-4 ps-11 block w-full bg-gray-800 bg-opacity-40 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter name"
                      required
                      onChange={e => setuserName(e.target.value)}
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      className="peer py-3 px-4 ps-11 block w-full bg-gray-800 bg-opacity-40 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter email"
                      required
                      onChange={e => setemailAdd(e.target.value)}
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM3 8l9 6 9-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mb-4 mt-4">
                  <textarea
                    className="py-3 px-4 block w-full bg-gray-800 bg-opacity-40 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter project details"
                    required
                    onChange={e => setDetails(e.target.value)}
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  type="button"
                  className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccessCard && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-sm"
        >
          <div className="border rounded-lg shadow-lg p-8 mb-32 relative text-white bg-gray-900 bg-opacity-80 backdrop-blur-lg border-green-500">
            <div className="text-center">
              <button
                className="absolute top-1 right-3 text-gray-100 hover:text-gray-300"
                onClick={() => setShowSuccessCard(false)}
              >
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </button>
              <div className="flex flex-row items-center justify-center mt-1">
                <FontAwesomeIcon icon={faCircleCheck} size="2x" className="text-green-400" />
                <span className="mt-1 ml-4">Your details have been submitted successfully!</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      <AnimatePresence>
        {userPresent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-sm"
        >
          <div className="border rounded-lg shadow-lg p-8 mb-32 relative text-white bg-gray-900 bg-opacity-80 backdrop-blur-lg border-red-500">
            <div className="text-center">
              <button
                className="absolute top-1 right-3 text-gray-100 hover:text-gray-300"
                onClick={() => setUserPresent(false)}
              >
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </button>
              <div className="flex flex-row items-center justify-center mt-1">
                <FontAwesomeIcon icon={faTimes} size="2x" className="text-red-400" />
                <span className="mt-1 ml-4">One project is there, Try again after completion of one!!</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default Footer;