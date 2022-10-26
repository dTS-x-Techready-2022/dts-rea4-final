import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <div className="foot-wrap">
      <Box className="foot-bg">
        <Container maxWidth="lg">
          <div>
            <ul className="menu-foot">
              <li>About</li>
              <li>Contact</li>
              <li>Partners</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="copyright">
            <p>Copyright 2022 <b>&copy; <span style={{color: 'red'}}>DTS</span> NEWS</b></p>
          </div>
        </Container>
      </Box>
      {/* <img src={footbg} alt="footer" className="footer-bg" /> */}
    </div>
  );
};

export default Footer;
