import { Tabs, Tab, AppBar, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [value, setValue] = useState(0);

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
          <Tab disableRipple label="Home" component={Link} to="/" />
          <Tab
            disableRipple
            label="Resources"
            component={Link}
            to="/resources"
          />
          <Tab disableRipple label="FAQ" component={Link} to="/faq" />
          <Tab disableRipple label="About" component={Link} to="/about" />
          <Tab
            disableRipple
            label="Contact Us"
            component={Link}
            to="/contact-us"
          />
          <Tab disableRipple label="Forum" component={Link} to="/forum" />
          <Tab disableRipple label="Calendar" component={Link} to="/calendar" />
          <Tab disableRipple label="Map" component={Link} to="/map" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
