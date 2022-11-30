import { Tabs, Tab, Box, IconButton } from "@mui/material";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import f2sPlanning from "../resources/F2S-Planning-Kit.pdf";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

function Resources() {
  const [resourceTab, setResourceTab] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleChange = (event, newValue) => {
    setResourceTab(newValue);
  };

  return (
    <div className="m-12">
      <h1>RESOURCES PAGE</h1>
      <Tabs
        value={resourceTab}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons={false}
        TabIndicatorProps={{
          sx: {
            width: "100%",
            height: "100%",
            borderRadius: "99999px",
            opacity: 0.2,
          },
        }}
      >
        <Tab disableRipple label="Getting Started" />
        <Tab disableRipple label="Produce" />
        <Tab disableRipple label="Food Services" />
        <Tab disableRipple label="School Garden" />
        <Tab disableRipple label="Farms" />
        <Tab disableRipple label="Advocacy and Sustainability" />
        <Tab disableRipple label="Reports and Tools" />
      </Tabs>
      <div className="flex justify-between">
        <div className="w-fit">
          <h2>F2S Planning Guide</h2>
          <div className="border-2 border-solid border-light-green">
            <Document file={f2sPlanning} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
          <div className="flex justify-between mt-4">
            <IconButton
              aria-label="previous page"
              onClick={() => {
                setPageNumber(pageNumber - 1);
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              aria-label="next page"
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
        <div className="w-fit">
          <h2>SNT F2S Webcast</h2>
          <iframe
            src="https://dpi.wi.gov/school-nutrition/training/online-learning#f2s"
            title="SNT F2S Webcast"
            className="w-[612px] h-[792px]"
          />
        </div>
        <div className="w-fit">
          <h2>Planning Toolkit - Intro to Farm to School</h2>
          <iframe
            src="https://www.fns.usda.gov/f2s/planning-toolkit-intro-farm-school-planning-and-building-team"
            title="Planning Toolkit - Intro to Farm to School"
            className="w-[612px] h-[792px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Resources;
