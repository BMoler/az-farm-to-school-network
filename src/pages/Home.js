//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
import placeholderImg from "./img/placeholder.png";

function Home() {
  const [img_car_index, set_img_car_index] = useState(0);
  //let navigate = useNavigate();

  useEffect(() => {
    shift_images(175);

    // eslint-disable-next-line
  }, []);

  const shift_images = (start_value) => {
    var img_arr = document.getElementsByName("img[]");
    var pix_value = start_value;

    for (var i = 0; i < img_arr.length; i++) {
      img_arr[i].style.left = String(pix_value) + "px";
      pix_value += 230;
    }
  };

  const right_btn_click = () => {
    var temp;
    var btn;
    if (img_car_index > -2) {
      if (img_car_index === 0) {
        btn = document.getElementById("left-arrow");
        btn.style.scale = "1";
      }
      temp = img_car_index - 1;
      set_img_car_index(img_car_index - 1);
      shift_images(temp * 230 + 175);
    } else {
      btn = document.getElementById("right-arrow");
      btn.style.scale = "0";
      temp = img_car_index - 1;
      set_img_car_index(img_car_index - 1);
      shift_images(temp * 230 + 175);
    }
  };

  const left_btn_click = () => {
    var temp;
    var btn;
    if (img_car_index < -1) {
      if (img_car_index === -3) {
        btn = document.getElementById("right-arrow");
        btn.style.scale = "1";
      }
      temp = img_car_index + 1;
      set_img_car_index(img_car_index + 1);
      shift_images(temp * 230 + 175);
    } else {
      btn = document.getElementById("left-arrow");
      btn.style.scale = "0";
      temp = img_car_index + 1;
      set_img_car_index(img_car_index + 1);
      shift_images(temp * 230 + 175);
    }
  };

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
          <button
            className="circle-btn btn-left"
            onClick={() => {
              left_btn_click();
            }}
            id="left-arrow"
          />
        </div>
        <div className="right-btn">
          <button
            className="circle-btn btn-right"
            onClick={() => {
              right_btn_click();
            }}
            id="right-arrow"
          />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" name="img[]" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" name="img[]" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" name="img[]" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" name="img[]" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" name="img[]" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" name="img[]" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" name="img[]" />
        </div>
        <div className="carousel-img">
          <img src={placeholderImg} alt="placehlder img" name="img[]" />
        </div>

        <div className="overlay" />
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
