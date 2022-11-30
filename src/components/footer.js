import "./footer.css";
import f2s_logo from "./f2s_logo_large.png";

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <img src={f2s_logo} alt="Farm To School Logo" />
            <div className="search-bar">
              <span className="search-title" id="search-title">
                Search
              </span>
              <span className="search-icon" id="search-icon">
                {" "}
              </span>
              <input
                type="text"
                id="search-bar"
                onFocus={() => {
                  document.getElementById("search-icon").style.width = "290px";
                  document.getElementById("search-title").style.scale = "0";
                }}
                onBlur={() => {
                  if (
                    document.getElementById("search-bar").value.length === 0
                  ) {
                    document.getElementById("search-icon").style.width = "30px";
                    document.getElementById("search-title").style.scale = "1";
                  }
                }}
              />
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-row">
              <h2 className="footer-title">Resources</h2>
              <p className="footer-text">Lesson Plans</p>
              <p className="footer-text">Member Data</p>
              <p className="footer-text">Other Resources</p>
            </div>
            <div className="vert-line-large" />
            <div className="footer-row">
              <h2 className="footer-title">About Us</h2>
              <p className="footer-text">Contact Us</p>
              <p className="footer-text">F2S Groups</p>
              <p className="footer-text">Community</p>
            </div>
            <div className="vert-line-large" />
            <div className="footer-row">
              <h2 className="footer-title">Connect</h2>
              <p className="footer-text">Forum</p>
              <p className="footer-text">Future Events</p>
              <p className="footer-text">Another option</p>
              <p className="footer-text">Second option</p>
            </div>
            <div className="vert-line-large" />
            <div className="footer-row">
              <h2 className="footer-title">Learn More</h2>
              <p className="footer-text">Learn stuff</p>
              <p className="footer-text">More stuff</p>
              <p className="footer-text">Placeholder</p>
              <p className="footer-text"></p>
            </div>
          </div>
        </div>
        <div className="hz-line" />
        <div className="footer-bottom">
          <h5>&#169;2022 AZ Farm-To-School Network</h5>
          <div className="link-row">
            <h5>Contact Us</h5>
            <div className="vert-line-small" />
            <h5>Privacy Policy</h5>
            <div className="vert-line-small" />
            <h5>Terms of Service</h5>
            <div className="vert-line-small" />
            <h5>Accessibility</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
