import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Accordion from '../components/Accordion';
import "./Faq.css"

function Faq() {
  let navigate = useNavigate();

  const accordionData = [
    {
      title: 'Does Arizona Farm to School Network have internship opportunities?',
      content: `Yes! Please, visit our Internship Interest Form for further details and to apply!`
    },
    {
      title: 'Does Arizona Farm to School Network have volunteer based opportunties that I can receive credit for?',
      content: `Yes! We can work with you to find a project based volunteer opportunity that can count towards school credit or class credit.  Visit our Internship Interest Form for further details and to apply!`
    },
    {
      title: 'How do I receive your newsletter?',
      content: `You can subscribe here. Please, ensure you've also filled out the annual membership form too. You can access previous newsletters here.`
    },
    {
      title: 'Where can I ask questions to the Network for techinal support or advice?',
      content: `You can add a question to our discussion forum here.`
    },
    {
      title: 'How do I get started with Farm to School?',
      content: `You can visit our Resource Library for where to get started or visit our Events Calendar to attend one of our Work Group sessions for more direct support.`
    },
    {
      title: 'Do you want someone from Farm to School leadership to present at your conference, workshop or in your class?',
      content: `Please, reach out to us via email with: date of the event, summary of the event and work group, topic and/or person you're requesting.`
    },
    {
      title: 'Are you applying for a grant and need a letter of support?',
      content: `Please, reach out to us via email! The link can be found at the bottom of this page.`
    }
  ];

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
      
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>



    </>
  );
}

export default Faq;
