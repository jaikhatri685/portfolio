import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactIcon from "../assests/images/skills_reactjs.png";
import JavaScriptIcon from "../assests/images/skills_javascript.png";
import CPLUSPLUSIcon from "../assests/images/skills_c++.png";
import CSSIcon from "../assests/images/skills_css.png";
import HTMLIcon from "../assests/images/skills_html.png";
import MatplotlibIcon from "../assests/images/skills_matplotlib.png";
import NumpyIcon from "../assests/images/skills_numpy.png";
import PandasIcon from "../assests/images/skills_pandas.png";
import PythonIcon from "../assests/images/skills_python.png";
import SQLIcon from "../assests/images/skills_sql.png";
import TailwindIcon from "../assests/images/skills_tailwind.png";
import BackgroundImage from "../assests/images/color-sharp.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="skills">
    <div className="skills  pb-16 relative z-0 ">
      <div className="skills-section mb-16">
        <h1 className="mb-5 inter font-bold text-4xl tracking-wider">Skills</h1>
        <Carousel responsive={responsive} infinite={true}>
          <div className="flex flex-col justify-between items-center">
            <img className="mb-4 w-1/2" src={ReactIcon} />
            <h1 className="font-bold inter  text-lg md:text-3xl tracking-wider">
              ReactJS
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="mb-4 w-1/2" src={JavaScriptIcon} />
            <h1 className="font-bold  text-lg md:inter md:text-3xl tracking-wider">
              JavaScript
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="mb-4 w-1/2" src={CSSIcon} />
            <h1 className="font-bold inter  text-lg md:text-3xl tracking-wider">
              CSS
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="mb-4 w-1/2" src={HTMLIcon} />
            <h1 className="font-bold inter  text-lg md:text-3xl tracking-wider">
              HTML
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="mb-4 w-1/2" src={TailwindIcon} />
            <h1 className="font-bold inter  text-lg md:text-3xl tracking-wider">
              Tailwind
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="mb-4 w-1/2" src={CPLUSPLUSIcon} />
            <h1 className="font-bold inter  text-lg md:text-3xl tracking-wider">
              C++
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="mb-4 w-1/2" src={PythonIcon} />
            <h1 className="font-bold inter  text-lg md:text-3xl tracking-wider">
              Python
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="mb-4 w-1/2" src={NumpyIcon} />
            <h1 className="font-bold inter  text-lg md:text-3xl tracking-wider">
              Numpy
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="mb-4 w-1/2" src={PandasIcon} />
            <h1 className="font-bold inter  text-lg md:text-3xl tracking-wider">
              Pandas
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="mb-4 w-1/2" src={SQLIcon} />
            <h1 className="font-bold inter  text-lg md:text-3xl tracking-wider">
              SQL
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="mb-4 w-1/2" src={MatplotlibIcon} />
            <h1 className="font-bold  text-lg md:inter text-3xl">Matplotlib</h1>
          </div>
        </Carousel>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 overflow-y-hidden top-48"><img src={BackgroundImage}/></div>
    </div>
    </section>
  );
};

export default Skills;
