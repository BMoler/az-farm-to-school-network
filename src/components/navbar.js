import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const Navbar = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" value="1" />
        <Tab label="Resources" value="2" />
        <Tab label="FAQ" value="3" />
        <Tab label="About" value="4" />
        <Tab label="Contact Us" value="5" />
      </Tabs>
    </>
  );
};

export default Navbar;
