import { useNavigate } from "react-router-dom";

function ContactUs() {
  let navigate = useNavigate();

  return (
    <>
      <h1>CONTACT US PAGE</h1>
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
    </>
  );
}

export default ContactUs;
