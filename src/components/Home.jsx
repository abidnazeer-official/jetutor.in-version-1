import React from "react";
import { Button, Divider } from "@mui/material";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import DynamicBoxes from "./DynamicBoxes";
import { Link } from "react-router-dom";


export const Home = () => {
  const imageUrlContactInfo =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2FTop%20image%20for%20all%2FJava%20Expert%20Tutor_20240909_065344_0000.png?alt=media&token=ba7003cd-6921-4768-888a-98793564bc37";

  const videoData = [
    {
      title:
        "Downloading and Installing JDK in 2024 || Lecture-9 || Java Full Stack Development || ABID NAZEER",
      url: "https://youtu.be/-dwnz3EP3fg?si=L0_W_1571nCNrSJN",
    },
    {
      title: "Inheritance in java || Program-10 || Java1000Programs || ABID NAZEER",
      url: "https://youtu.be/Kxa-r_vl1Q8?si=eO9S7_z_BnG1yjdk",
    },
    {
      title: "Java HashMap and Hashtable || Java Expert Tutor",
      url: "https://youtu.be/MQyZkKIvb40?si=y7Wc5XD_F6nloniy",
    },
  ];

  return (
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
          Monday Results Day [30-12-24] <br />
          <span style={{ color: "blue" }}>Status: Active</span>
        </Typography>
        <Box my={2}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2FCurrent%20Week%20Ranking%2FJetutor%20website%20version%201.0.0.13.png?alt=media&token=f5db27d4-abba-4cac-b67e-1c4414926add"
            alt="Current Week Ranking"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
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
        
        <Link to="/FreshersIQ" style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          marginBottom: "10px",
          marginTop: "10px",
        }}>
        Java Freshers Interview Questions
      </Link>

      <Link to="/OneYearExperienceIQ" style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          marginBottom: "10px",
          marginTop: "10px",
          marginLeft: "5px",
        }}>
        1 Year Experience Interview Questions
      </Link>

      <Link to="/TwoYearExperienceIQ" style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          marginBottom: "10px",
          marginTop: "10px",
          marginLeft: "5px",
        }}>
        2 Year Experience Interview Questions
      </Link>

      <Link to="/ThreeYearExperienceIQ" style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          marginBottom: "10px",
          marginTop: "10px",
          marginLeft: "5px",
        }}>
        3 Year Experience Interview Questions
      </Link>

      
        <DynamicBoxes />
      </Box>

      <hr style={{ margin: "40px 0" }} />

      {/* Video Lectures */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Java Questions with Solutions
        </Typography>
        <Grid container spacing={2}>
          {videoData.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <Card>
                  <div style={{ position: "relative", paddingTop: "56.25%" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${
                        new URL(video.url).searchParams.get("v") ||
                        video.url.split("/").pop()
                      }`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    ></iframe>
                  </div>
                  {/* <CardContent>
                    <Typography variant="h6" align="center">
                      {video.title}
                    </Typography>
                  </CardContent> */}
                </Card>

                <CardContent>
                  <Typography variant="body1" align="center">
                    {video.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <hr style={{ margin: "40px 0" }} />

      {/* Why Java Section */}
      {/* <Box textAlign="center">
        <Typography variant="h5" gutterBottom>
          Why Java?
        </Typography>
        <Typography color="textSecondary">
          Java is everywhere! From Android apps to enterprise systems, from web
          applications to games — Java powers some of the most critical
          technology of our time.
        </Typography>
      </Box> */}

       {/* Why Java */}
       <Box textAlign="center" sx={{ marginY: 4 }}>
        <Typography variant="h4" gutterBottom>
          Why Java?
        </Typography>
        <Typography variant="body1">
          Java is everywhere! From Android apps to enterprise systems, from web
          applications to games → Java powers some of the most critical
          technology of our time. Learn this versatile and robust language and
          unlock the key to infinite career opportunities, no matter your
          background or aspirations.
        </Typography>
      </Box>

      <Divider />

      {/* Call to Action */}
      <Box textAlign="center" sx={{ marginY: 4 }}>
        <Typography variant="h4" gutterBottom>
          Ready to Code?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Kickstart your Java journey with <strong>interactive lessons</strong>,{" "}
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
        style={{ backgroundColor: "#34495e", padding: "20px", color: "white" }}
      >
        <img
          src={imageUrlContactInfo}
          alt="Contact Info"
          style={{ height: "80px", borderRadius: "50%" }}
        />
        <Typography variant="body2" style={{ marginTop: "10px" }}>
          <b>Contact Us:</b> support@jetutor.in
        </Typography>
        <Typography variant="caption">Version: 1.0.0.13</Typography>
      </Box>
    </Container>
  );
};
