import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import HeaderIcon from "../assests/images/header-img.svg";

const Banner = () => {
  const rotate = ["Frontend WebDeveloper", " Data Analyst", "Coder"];
  const [loopnum, setLoopNum] = useState(0);
  const [isdeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopnum;

    let fullText = rotate[i];
    let updatedText = isdeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isdeleting && updatedText !== "") {
      setDelta((prevdelta) => {
        return prevdelta * 0.9;
      });
    } else if (isdeleting && updatedText === "") {
      setDelta(300 - Math.random() * 100);
      setLoopNum((loopnum + 1) % rotate.length);
      setIsDeleting(false);
    } else if (!isdeleting && updatedText === rotate[i]) {
      setIsDeleting(true);
    }
  };

  return (
    <section id="home">
      <div className=" pt-48 lg:pt-20 pb-32  inter z-0 relative banner">
        <div className="flex  flex-col lg:flex-row lg:justify-between items-center w-full">
          <div className="w-full lg:w-1/2 px-8 lg:px-16">
            <div className="flex flex-row justify-start ">
              <h1
                className=" text-left inline-block px-2 py-2.5 text-2xl font-bold mb-4 tracking-wider"
                style={{
                  background:
                    "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                }}
              >
                Welcome to my Portfolio
              </h1>
            </div>
            <h1 className="text-left font-bold  lg:text-5xl mb-4 tracking-wider">
              Hi I'm Jai Khatri
            </h1>
            <h1
              className="text-left font-bold lg:text-5xl mb-4 tracking-wider"
              style={{ minHeight: "48px" }}
            >
              <span>{text}</span>
            </h1>
            <p
              className="text-justify text-xl leading-7 tracking-wider mb-4"
              style={{ color: "#B8B8B8" }}
            >
              I am a pre-final year B.E Computer Science & M.Sc Economics
              Undergraduate student at BITS Goa. Having developed a keen interest
              in Frontend WebD and Data Analysis, I would like to delve further
              into these fields. Apart from that, I love travelling, gyming,
              and have a knack of finance too.
            </p>
            <div className="flex justify-start  mt-3 items-center banner-button">
              <a href="#contact">
                <button className=" flex flex-row tracking-wider text-2xl font-bold">
                  Let's Connect
                  <ArrowRightCircle
                    className="banner-button-svg pl-2 w-9 h-9"
                    style={{ background: "transparent", border: "none" }}
                  />
                </button>{" "}
              </a>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-1/2 mt-12 ">
            <img alt="Header Image" src={HeaderIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
