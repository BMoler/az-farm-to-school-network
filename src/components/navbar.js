import { Tabs, Tab, AppBar, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const routes = [
  "/",
  "/resources",
  "/faq",
  "/about",
  "/contact-us",
  "/forum",
  "/calendar",
  "/map",
];

const Navbar = (props) => {
  const location = useLocation();
  const [value, setValue] = useState(routes.indexOf(location.pathname));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="sticky" color="background">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          color="secondary"
          className="grow"
        >
          AZ Farm To School Network
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab disableRipple label="Home" component={Link} to={routes[0]} />
          <Tab
            disableRipple
            label="Resources"
            component={Link}
            to={routes[1]}
          />
          <Tab disableRipple label="FAQ" component={Link} to={routes[2]} />
          <Tab disableRipple label="About" component={Link} to={routes[3]} />
          <Tab
            disableRipple
            label="Contact Us"
            component={Link}
            to={routes[4]}
          />
          <Tab disableRipple label="Forum" component={Link} to={routes[5]} />
          <Tab disableRipple label="Calendar" component={Link} to={routes[6]} />
          <Tab disableRipple label="Map" component={Link} to={routes[7]} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
