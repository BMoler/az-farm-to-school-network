import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const Navbar = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(200, 200, 200, 0.7)",
    "&.Mui-selected": {
      color: "#333",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  }));

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <StyledTab label="Home" />
        <StyledTab label="Resources" />
        <StyledTab label="FAQ" />
        <StyledTab label="About" />
        <StyledTab label="Contact Us" />
      </Tabs>
    </>
  );
};

export default Navbar;
