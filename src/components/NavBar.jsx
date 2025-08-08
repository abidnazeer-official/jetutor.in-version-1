import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export const NavBar = () => {
  const jetutorinlogoUrl =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2FTop%20image%20for%20all%2FJava%20Expert%20Tutor_20240909_065344_0000.png?alt=media&token=ba7003cd-6921-4768-888a-98793564bc37";

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    letterSpacing: "0.5px",
    position: "relative",
    padding: "5px 0",
    transition: "color 0.3s ease, transform 0.2s ease",
  };

  const handleMouseOver = (e) => {
    e.target.style.color = "#1abc9c";
    e.target.style.transform = "translateY(-2px)";
  };

  const handleMouseOut = (e) => {
    e.target.style.color = "white";
    e.target.style.transform = "translateY(0)";
  };

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #2c3e50, #34495e)",
        padding: "10px 20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <Link to="/">
            <img
              src={jetutorinlogoUrl}
              alt="Jetutor Logo"
              height="50px"
              width="50px"
              style={{
                borderRadius: "50%",
                marginRight: "10px",
                border: "2px solid white",
              }}
            />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          style={{ gap: "20px" }}
        >
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Home
          </Link>
          <Link
            to="/MRS"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Monday Results Day [History]
          </Link>
          <Link
            to="/CurrentMondayResults"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Current Monday Results <br />
            <span style={{ color: "red", fontSize: "12px", fontWeight: "300" }}>04-08-25</span>
          </Link>
          <Link
            to="/Days100LearningPlan"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            90 Days Java Learning Plan
          </Link>
        </Box>
      </Box>
    </nav>
  );
};
