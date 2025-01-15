import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export const NavBar = () => {
  const jetutorinlogoUrl =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2FTop%20image%20for%20all%2FJava%20Expert%20Tutor_20240909_065344_0000.png?alt=media&token=ba7003cd-6921-4768-888a-98793564bc37";

  return (
    <nav style={{ backgroundColor: "#2c3e50", padding: "10px 20px" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Logo Section */}
        <Box display="flex" alignItems="center">
          <Link to="/">
            <img
              src={jetutorinlogoUrl}
              alt="Jetutor Logo"
              height="50px"
              width="50px"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box display="flex" alignItems="center" style={{ gap: "20px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#1abc9c")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Home
          </Link>
          <Link
            to="/MRS"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#1abc9c")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Monday Results Day [History]
          </Link>
          <Link
            to="/CurrentMondayResults"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#1abc9c")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Current Monday Results <br />
            <span style={{ fontSize: "12px" }}>13-01-25</span>
          </Link>
          <Link
            to="/Days100LearningPlan"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#1abc9c")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            90 Days Java Learning Plan
          </Link>
        </Box>
      </Box>
    </nav>
  );
};
