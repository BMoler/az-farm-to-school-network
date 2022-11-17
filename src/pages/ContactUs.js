import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <div className="hero-img">
        <h1>Contact Us</h1>
      </div>
      <div className="description-section">
        <div className="description-section-left">
          <h2>Description goes here</h2>
          <p>
            &emsp;Here at AZ Farm to School Network, we want to help you connect
            with local schools, farmers, and resources to help teach the next
            generation about sustainability and healthy eating habits.
            <br />
            &emsp;Please contact us from the form below for any additional
            questions. Or find more contact info in the About Us page!
          </p>
        </div>
        <div className="description-section-right" />
      </div>
      <div className="form-section">
        <div className="form-section-left"></div>
        <div className="form-section-right">
          <h2>Contact Us</h2>
          <form action="php/contact.php" method="POST">
            <div className="form-questions">
              <div className="form-item">
                <label for="first-name">First Name</label>
                <input
                  aria-required="true"
                  aria-invalid="true"
                  type="text"
                  placeholder="First name"
                  id="first-name"
                  name="first_name"
                  autocomplete="on"
                />
              </div>
              <div className="form-item">
                <label for="last-name">Last Name</label>
                <input
                  aria-required="true"
                  aria-invalid="true"
                  type="text"
                  placeholder="Last name"
                  id="last-name"
                  name="last_name"
                  autocomplete="on"
                />
              </div>
              <div className="form-item">
                <label for="email">Email</label>
                <input
                  aria-required="true"
                  aria-invalid="true"
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  autocomplete="on"
                />
              </div>
              <div className="form-item">
                <label for="questions">Questions &amp; Comments</label>
                <textarea
                  aria-required="true"
                  aria-invalid="true"
                  id="questions"
                  name="questions"
                />
              </div>
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
