import React, { useState } from "react";
import { MdWhatsapp } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";
import { CiMail } from "react-icons/ci";
import { FiInstagram } from "react-icons/fi";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async () => {
    if (name.trim().length > 0 && message.trim().length > 0) {
      axios
        .post("https://formspree.io/f/xgejonqj", { name, email, message })
        .then((data) => {
          alert("Message sent successfully!");
        })
        .catch((err) => {
          alert("error occurred: ", err);
        });
    } else {
      alert("Enter valid name and message!");
    }
  };

  return (
    <>
      <div className="bg-contact">
        <div className="nav-cnt1">
          {" "}
          <Navbar />
        </div>
        <div className="contact-cntr">
          <h1 className="contact-heading">
            GET <span className="s1">IN TOUCH</span>
          </h1>
          <div className="subhead">
            <div className="linecnt"></div>
            <p>
              I.m always open to discussing Web Development & Data Structures.
            </p>
            <div className="linecnt2"></div>
          </div>
          <div className="contact-detail-cntr">
            <div className="info-dest">
              <div className="phn-cnt">Phone</div>
              <div className="phn-cnt">
                <MdWhatsapp className="icon-cnt" /> +91-6203321160
              </div>
              <div className="email-cnt1">Email</div>
              <div className="email-cnt1">
                <AiOutlineMail className="icon-cnt" />{" "}
                abhishekpandey1480@gmail.com
              </div>
              <div className="address-cnt">Address</div>
              <div className="address-cnt">
                <ImLocation2 className="icon-cnt" />
                PandeyMuhalla, Near BLC Hirapur, Dhanbad, Jharkhand
              </div>
              <div className="social-cnt">Social Profile</div>
              <div className="icon-cnt-social">
                {" "}
                <div>
                  <a
                    href={
                      "https://www.facebook.com/profile.php?id=100006377015116"
                    }
                  >
                    <FaFacebook className="icon-f" />
                  </a>
                </div>{" "}
                <div>
                  <a href={"https://www.instagram.com/abhishekpandey22/"}>
                    <FiInstagram className="icon-f" />
                  </a>
                </div>{" "}
                <div>
                  <a href={"https://twitter.com/abhishe14002262"}>
                    <FaTwitter className="icon-f" />
                  </a>
                </div>
                <div>
                  <a
                    href={
                      "https://www.linkedin.com/in/abhishek-pandey-6953201b7/"
                    }
                  >
                    <FaLinkedin className="icon-f" />
                  </a>
                </div>
              </div>
            </div>
            <div className="input-desk">
              <p>
                If you have any suggestion, project or even you want to say
                Hello.. please fill out the form below and I will reply you
                shortly.
              </p>
              <form
                className="input-cntr"
                onSubmit={(E) => {
                  E.preventDefault();
                  submitForm();
                }}
                // action="https://formspree.io/f/xgejonqj"
                // method="POST"
              >
                <div className="input-cntr1">
                  <label className="name-cnt">
                    <BsPersonFill />
                    <input
                      required
                      className="input-box"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name*"
                    ></input>{" "}
                  </label>
                  <label className="name-cnt">
                    <CiMail />
                    <input
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-box"
                      name="email"
                      type="email"
                      placeholder="Your Email*"
                    ></input>
                  </label>
                </div>
                <label className="name-cnt">
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message*"
                    className="input-box"
                    name="message"
                    rows="10"
                  ></textarea>
                </label>

                <button className="btn-cnt" type="submit">
                  <BsSend /> SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
