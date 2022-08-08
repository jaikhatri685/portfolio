import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assests/images/Jai.svg";
import React, { useState, useEffect } from "react";
import NavIcon1 from "../assests/images/nav-icon1.svg";
import NavIcon2 from "../assests/images/nav-icon2.svg";
import NavIcon3 from "../assests/images/nav-icon3.svg";

const NavbarTop = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 z-10 w-full ">
    <Navbar collapseOnSelect expand="lg" variant="light" className={`p-4  ${scrolled ? "scrolled" : "unscrolled"}`}>
      <Container className="m-0">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-white  bg-white"
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse id="basic-navbar-nav">
           
          <Nav className="">
            <Nav.Link
              href="#home"
              onClick={() => setActiveLink("home")}
              className={` text-white  ${
                activeLink === "home" ? "active" : ""
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => setActiveLink("skills")}
              className={` text-white ${
                activeLink === "skills" ? "active" : ""
              }`}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => setActiveLink("projects")}
              className={` text-white ${
                activeLink === "projects" ? "active" : ""
              }`}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1TLvwJHUgGMZK1oZpTbSwiO4TeiXSlGKY/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Nav.Link>
          </Nav>
          <div className="right-nav">
            <div className="icons">
            <a href="https://www.linkedin.com/in/jai-khatri-50668b193/" target="_blank">
              <img src={NavIcon1} alt="Linkedin" />
            </a>
            <a href="https://www.facebook.com/khatri.jai906/" target="_blank">
              <img src={NavIcon2} alt="Facebook" />
            </a>
            <a href="https://github.com/khatrijai" target="_blank">
              <img src={NavIcon3} alt="github" />
            </a>
            </div>  
              <a href="#contact">
            <button  onClick={() => console.log("Button Clicked")}>
              Let's Connect
            </button>
            </a>
          </div>
     
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  );
};

export default NavbarTop;
