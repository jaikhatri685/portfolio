import AmazonCloneIcon from "../assests/images/amazon_full_stack_clone.png";
import SpotifyCloneIcon from "../assests/images/Spotify-clone.png";
import ExpenseTrackerIcon from "../assests/images/Expense_tracker.png";
import LeadTrackerIcon from "../assests/images/LeadTracker.png";
import HousePredictionIcon from "../assests/images/HousePricePrediction.png";

const Projects = () => {
  const projects = [
    {
      title: "Amazon Full Stack Clone",
      description:
        "Implemented Add to Cart, Custom login using OAuth,and payment functionality. Used ReactJS with functional components and React Hooks to build the front-end. The payment mechanism is supported by implementing Stripe library",
      imageURL: AmazonCloneIcon,
      github: "https://github.com/khatrijai/Amazon-Full-Stack-Clone",
    },
    {
      title: "Spotify Clone",
      description:
        "Developed Spotify Clone using HTML, Javascript and CSS. User is enabled with standard functionalities of Spotify such as play, pause, change songs and increase volume.",
      imageURL: SpotifyCloneIcon,
      github: "https://github.com/khatrijai/SpotifyClone",
    },
    {
      title: "Expense Tracker",
      description:
        "Developed easy to use Expense Tracker. Used ReactJS to develop the various components along with CSS styling",
      imageURL: ExpenseTrackerIcon,
      github: "https://github.com/khatrijai/Expense-Tracker",
    },
    {
      title: "LeadTracker-Chrome Extension",
      description:
        "Used Javascript, HTML and CSS. Useful Chrome Extension to save various information from sites",
      imageURL: LeadTrackerIcon,
      github: "https://github.com/khatrijai/LeadTracker",
    },
    {
      title: "House-Price-Prediction-Model",
      description:
        "Used Python, Scikit-learn, Pandas, Numpy, Matplotlib. Used GridSearchCV to find the best-score ML Model along with the best-paramters.",
      imageURL: HousePredictionIcon,
      github: "https://github.com/khatrijai/House-Price-Prediction-Model",
    },
  ];
  return (
    <section id="projects">
    <div className="projects py-32 px-14 bg-black z-0 ">
      <div className="flex flex-col justify-between items-center">
        <h2 className=" mb-4  inter font-bold text-4xl tracking-wider">
          Projects
        </h2>
        <p className="mb-16  inter font-normal text-2xl tracking-wider" style={{color:"rgb(122, 122, 122)"}}>Take a look at the different projects I've done!</p>

        {/* <p className=" tracking-wider">Below are some of my projects</p> */}
        <div className="grid   grid-cols-1  lg:grid-cols-3 gap-10">
          {projects.map((item) => {
            return (
              <div className="rounded-3xl proj-imgbx relative ">
                <img className="rounded-3xl" src={item.imageURL} />
                <a className="text-white" href={item.github} target="_blank">
                <div className="proj-tx h-full w-full cursor-pointer flex  flex-row items-center justify-center" >
                    <div>
                    <h1 className="text-xl font-bold lg:text-3xl inter tracking-wider">{item.title}</h1>
                    <p className=" text-lg font-normal inter tracking-wider text-center italic " >{item.description}</p>
                    </div>
                </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;
