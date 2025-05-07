import React from "react";
import { Button, Divider } from "@mui/material";
import { Container, Typography, Box } from "@mui/material";
import DynamicBoxes from "./DynamicBoxes";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const imageUrlContactInfo =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2FTop%20image%20for%20all%2FJava%20Expert%20Tutor_20240909_065344_0000.png?alt=media&token=ba7003cd-6921-4768-888a-98793564bc37";

  const navigate = useNavigate();

  return (
    <>
      <div>
        <Container maxWidth="lg" style={{ padding: "20px" }}>
          {/* Welcome Section */}
          <Box mt={4} textAlign="center">
            <Typography variant="h4" gutterBottom>
              Welcome to Java Expert Tutor
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Unlock the Power of Java — Start Your Coding Journey Today
            </Typography>
          </Box>

          <hr style={{ margin: "40px 0" }} />

          {/* Instagram Toppers */}
          <Box textAlign="center">
            <Typography variant="h5" color="primary" gutterBottom>
              Instagram jetutor.in Toppers of the Last Week
            </Typography>
            <Typography variant="body1">
              {/* Change Date Here  */}
              Monday Results Day [05-05-25] <br />
              <span style={{ color: "blue" }}>Status: Active</span>
            </Typography>
            <Box my={2}>
              <div>
                <img
                  //**************************************************************

                  //Change this image in every update**********************************************************************************************************

                  //**************************************************************
                  src="https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FHome%20Page%2FCurrent%20Week%20Ranking%2FYear%202025%2FMay2025%2FJetutor%20Version%201.0.0.21.jpg?alt=media&token=e48f5a9f-6941-4e46-92c8-c2fb1f02a82b"
                  alt="Failed to load Current Week Ranking"
                  style={{
                    position: "relative",
                    width: "100%",
                    minWidth: "400px",
                    maxWidth: "100%",
                    // height: "200px",
                    maxHeight: "100%",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                  // height={200}
                  // width={400}
                />
              </div>
            </Box>
            <Typography color="textSecondary">
              <b>Note:</b> Rank will be automatically updated next Monday.
            </Typography>
          </Box>

          <hr style={{ margin: "40px 0" }} />

          {/* Java Interview Preparation */}
          <Box>
            <Typography variant="h5" gutterBottom>
              Java Interview Preparation
            </Typography>

            <Link
              to="/FreshersIQ"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              Java Freshers Interview Questions
            </Link>

            <Link
              to="/OneYearExperienceIQ"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px",
                marginLeft: "5px",
              }}
            >
              1 Year Experience Interview Questions
            </Link>
            <Link
              to="/TwoYearExperienceIQ"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px",
                marginLeft: "5px",
              }}
            >
              2 Year Experience Interview Questions
            </Link>
            <Link
              to="/ThreeYearExperienceIQ"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px",
                marginLeft: "5px",
              }}
            >
              3 Year Experience Interview Questions
            </Link>

            <DynamicBoxes />
          </Box>

          <hr style={{ margin: "40px 0" }} />

          {/* Video Lectures */}

          <Typography variant="h5" gutterBottom>
            Java Questions with Solutions
          </Typography>
          <div style={{ textAlign: "center" }}>
            <iframe
              width="350"
              height="250"
              src="https://www.youtube.com/embed/nAweGFw81oo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <iframe
              width="350"
              height="250"
              src="https://www.youtube.com/embed/Z9USwANz00U"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <iframe
              width="350"
              height="250"
              src="https://www.youtube.com/embed/Kxa-r_vl1Q8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <iframe
              width="350"
              height="250"
              src="https://www.youtube.com/embed/ffAzl69heoE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <hr style={{ margin: "40px 0" }} />
          <Box>
            <Typography variant="h5" gutterBottom>
              Advice to B-Tech Students
            </Typography>

            <Link
              to="/BrotherlyAdviceForFirstYearStudents"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              Brotherly Advice For 1st Year Students
            </Link>

            <Link
              to="/BrotherlyAdviceForSecondYearStudents"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px",
                marginLeft: "5px",
              }}
            >
              Brotherly Advice For 2nd Year Students{" "}
            </Link>

            <Link
              to="/BrotherlyAdviceForThirdYearStudents"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px",
                marginLeft: "5px",
              }}
            >
              Brotherly Advice For 3rd Year Students{" "}
            </Link>

            <Link
              to="/BrotherlyAdviceForFourthYearStudents"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px",
                marginLeft: "5px",
              }}
            >
              Brotherly Advice For 4th Year Students
            </Link>
          </Box>

          <hr style={{ margin: "40px 0" }} />

          {/* Why Java */}
          <Box textAlign="center" sx={{ marginY: 4 }}>
            <Typography variant="h5" gutterBottom>
              Why Java?
            </Typography>
            <Typography variant="body1">
              Java is everywhere! From Android apps to enterprise systems, from
              web applications to games → Java powers some of the most critical
              technology of our time. Learn this versatile and robust language
              and unlock the key to infinite career opportunities, no matter
              your background or aspirations.
            </Typography>
          </Box>

          <Divider />

          {/* Call to Action */}
          <Box textAlign="center" sx={{ marginY: 4 }}>
            <Typography variant="h4" gutterBottom>
              Ready to Code?
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Kickstart your Java journey with{" "}
              <strong>interactive lessons</strong>,{" "}
              <strong>coding challenges</strong>, and <strong>projects</strong>{" "}
              designed for every skill level — from beginners to advanced
              developers. Start today and become a Java pro in no time.
            </Typography>
            <Button variant="contained" color="primary" sx={{ margin: 1 }}>
              Start Learning Java
            </Button>
            <Button variant="outlined" color="secondary" sx={{ margin: 1 }}>
              Explore Our Tutorials
            </Button>
          </Box>

          {/* Footer */}
          <Box
            mt={4}
            textAlign="center"
            style={{
              backgroundColor: "#34495e",
              padding: "20px",
              color: "white",
            }}
          >
            <img
              src={imageUrlContactInfo}
              alt="Contact Info"
              style={{ height: "80px", borderRadius: "50%" }}
            />
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              <b>Contact Us:</b> support@jetutor.in
            </Typography>
            <Typography variant="caption">Version: 1.0.0.21</Typography>
          </Box>
        </Container>
      </div>
      {/* Disclaimer,PrivacyPolicy and Terms & Conditions  */}
      <div style={{ textAlign: "center" }}>
        <button
          style={{ margin: "1px" }}
          onClick={() => navigate("/Disclaimer")}
        >
          DISCLAIMER
        </button>
        <button
          style={{ margin: "1px" }}
          onClick={() => navigate("/PrivacyPolicy")}
        >
          PRIVACY POLICY
        </button>
        <button
          style={{ margin: "1px" }}
          onClick={() => navigate("/Termsconditions")}
        >
          TERMS & CONDITIONS
        </button>
      </div>
    </>
  );
};
