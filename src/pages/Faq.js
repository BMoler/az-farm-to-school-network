import { useNavigate } from "react-router-dom";

function Faq() {
  let navigate = useNavigate();

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

    </>
  );
}

export default Faq;
