import logo from "../assests/images/Jai.svg";
import navIcon1 from "../assests/images/nav-icon1.svg";
import navIcon2 from "../assests/images/nav-icon2.svg";
import navIcon3 from "../assests/images/nav-icon3.svg";

const Footer = () => {
 return( <section className="footer">
    <div className="flex flex-row justify-center items-center pb-10 pt-32  w-4/5 ml-auto mr-auto ">
      {/* <div>
        <img className="w-24" src={logo} alt="logo" />
      </div> */}
      <div className="flex flex-col items-center ">
      <div className="flex flex-row pb-4 footericons ">
        <a href="https://www.linkedin.com/in/jai-khatri-50668b193/" target="_blank" rel="noopener"><img  src={navIcon1} alt="linkedin" /></a>
        <a href="https://www.facebook.com/khatri.jai906/" target="_blank" rel="noopener"><img   src={navIcon2} alt="facebook" /></a>
        <a href="https://github.com/khatrijai" target="_blank" rel="noopener"><img src={navIcon3} alt="github" /></a>
      </div>
      <p className="font-bold tracking-wider " style={{fontFamily:"Centra, sans-serif", fontSize:"16px"}}>Copyright 2022. All Rights Reserved | Made with ❤️ by Jai Khatri</p>
      </div>
    </div>
  </section>)
};

export default Footer;
