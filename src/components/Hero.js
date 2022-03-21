import React from "react";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Hero = () => {
  return (
    <div className="hero-contianer">
      <span style={{ fontSize: 62 }}>Hello, world!</span>
      <p style={{ marginTop: 20 }}>
        This is a template for a simple marketing or informational website. It
        includes a large callout called a jumbotron and three supporting pieces
        of content. Use it as a starting point to create something more unique.
      </p>
      <Button
        variant="contained"
        endIcon={<ChevronRightIcon />}
        style={{ marginTop: 20 }}
      >
        Learn more
      </Button>
    </div>
  );
};

export default Hero;
