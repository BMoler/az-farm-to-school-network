import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import "./Faq.css"

function Faq() {
  let navigate = useNavigate();

  const accordionData = {
    title: 'What are the three pillars of the AZ Farm to School Network?',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  };

  const { title, content } = accordionData;
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <h1>FAQ PAGE</h1>
      <button
        onClick={(e) => {
          navigate("/about");
        }}
      >
        About
      </button>
      <button
        onClick={(e) => {
          navigate("/account");
        }}
      >
        Account
      </button>
      <button
        onClick={(e) => {
          navigate("/calendar");
        }}
      >
        Calendar
      </button>
      <button
        onClick={(e) => {
          navigate("/contact-us");
        }}
      >
        Contact Us
      </button>
      <button
        onClick={(e) => {
          navigate("/faq");
        }}
      >
        FAQ
      </button>
      <button
        onClick={(e) => {
          navigate("/forum");
        }}
      >
        Forum
      </button>
      <button
        onClick={(e) => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={(e) => {
          navigate("/map");
        }}
      >
        Map
      </button>
      <button
        onClick={(e) => {
          navigate("/resources");
        }}
      >
        Resources
      </button>
      <button
        onClick={(e) => {
          navigate("/search");
        }}
      >
        Search
      </button>

      <div className="hero-img">
        <h1>FAQ</h1>
      </div>

      <div>
        <h2>For All Questions - </h2>
        <p>Here you can find answers to all of our most commonly asked questions.</p>
        <p>If your question is not answered here, please don't hesitate to contact us directly!</p>
        <button
        onClick={(e) => {
          navigate("/contact-us");
        }}
      >
        Contact Us
      </button>
      </div>

      <React.Fragment>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title"
            onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </React.Fragment>

    </>
  );
}

export default Faq;
