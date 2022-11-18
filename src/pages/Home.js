//import { useNavigate } from "react-router-dom";
import "./Home.css";
import placeholderImg from "./img/placeholder.png";

function Home() {
  //let navigate = useNavigate();

  return (
    <>
      <div className="hero-img">
        <div className="hero-box">
          <h1>Welcome!</h1>
          <p>
            Here is our site to help schools and farms connect with each other.
            Learn more by clicking the button below!
          </p>
          <button className="btn-green">
            <h2>Learn More</h2>
          </button>
        </div>
      </div>
      <div className="home-page">
        <div className="home-row">
          <div className="text-col">
            <h1>Latest Highlight</h1>
            <p>
              &emsp;This is our latest highlight of someone that has done good
              in the community and deserves to be recognized. Click below to
              learn more about this story.
            </p>
            <button className="btn-green">
              <h2>View Story</h2>
            </button>
          </div>
          <div className="row-img" />
        </div>
        <div className="horizontal-line" />
        <div className="home-center">
          <h1>What is the Farm-To-School Network?</h1>
          <p>
            &emsp;The Farm-To-School Network is a collection of teachers,
            farmers, schools, and Master Gardeners that want to teach children
            about sustainability and healthy eating habits.
          </p>
        </div>
        <div className="home-row">
          <div className="row-img" />
          <ul className="list">
            <li>
              <h1>Procurement</h1>
            </li>
            <li>
              <h1>Nutrition Education</h1>
            </li>
            <li>
              <h1>School Gardens</h1>
            </li>
          </ul>
        </div>
      </div>
      <div className="list-row">
        <ul className="list-long">
          <li>
            <h1>Community</h1>
          </li>
          <li>
            <h1>Get Involved</h1>
          </li>
          <li>
            <h1>Resources</h1>
          </li>
        </ul>
      </div>
      <div className="home-page">
        <div className="horizontal-line" />
      </div>

      <div className="carousel-holder">
        <div className="left-btn">
          <button className="circle-btn btn-left" />
        </div>
        <div className="right-btn">
          <button className="circle-btn btn-right" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" />
        </div>
      </div>
      <div className="home-page">
        <div className="horizontal-line" />

        <div className="home-row">
          <div className="row-img" />
          <div className="text-col reversed">
            <h1>Community Map</h1>
            <p>
              &emsp;Use this map to connect with our growing Farm-To-School
              community. Search for local farmers and master gardeners to help
              start your school garden.
            </p>
            <button className="btn-green">
              <h2>View Map</h2>
            </button>
          </div>
        </div>
        <div className="home-row">
          <div className="text-col">
            <h1>Forums</h1>
            <p>
              &emsp;Need help kickstarting a gardening program at your school?
              Use the forum to connect with local teachers, master gardeners,
              and more! Ask for help or simply browse an array of solutions and
              advice.
            </p>
            <button className="btn-green">
              <h2>View Story</h2>
            </button>
          </div>
          <div className="row-img" />
        </div>
      </div>
    </>
  );
}

export default Home;
