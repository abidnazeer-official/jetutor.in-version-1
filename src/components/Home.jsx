import React from "react";
import {
  Button,
  Divider,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import DynamicBoxes from "./DynamicBoxes";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const imageUrlContactInfo =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2FTop%20image%20for%20all%2FJava%20Expert%20Tutor_20240909_065344_0000.png?alt=media&token=ba7003cd-6921-4768-888a-98793564bc37";

  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="lg" sx={{ paddingY: 4 }}>
        {/* Welcome Section */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome to Java Expert Tutor
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Unlock the Power of Java — Start Your Coding Journey Today 🚀
          </Typography>
        </Box>

        {/* Instagram Toppers */}
        <Card sx={{ mb: 6, boxShadow: 3 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="primary" gutterBottom>
              📸 Instagram jetutor.in Toppers of the Last Week
            </Typography>
            <Typography variant="body1" mb={2}>
              Monday Results Day [05-05-25] <br />
              <span style={{ color: "green", fontWeight: "bold" }}>
                Status: Active
              </span>
            </Typography>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FHome%20Page%2FCurrent%20Week%20Ranking%2FYear%202025%2FMay2025%2FJetutor%20Version%201.0.0.21.jpg?alt=media&token=e48f5a9f-6941-4e46-92c8-c2fb1f02a82b"
              alt="Current Week Ranking"
              style={{
                width: "100%",
                borderRadius: "8px",
                maxWidth: "700px",
                margin: "auto",
              }}
            />
            <Typography variant="body2" color="text.secondary" mt={2}>
              <b>Note:</b> Rank will be automatically updated next Monday.
            </Typography>
          </CardContent>
        </Card>

        {/* Java Interview Preparation */}
        <Box mb={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            💼 Java Interview Preparation
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
            {[
              { to: "/FreshersIQ", label: "Java Freshers Interview Questions" },
              {
                to: "/OneYearExperienceIQ",
                label: "1 Year Experience Interview Questions",
              },
              {
                to: "/TwoYearExperienceIQ",
                label: "2 Year Experience Interview Questions",
              },
              {
                to: "/ThreeYearExperienceIQ",
                label: "3 Year Experience Interview Questions",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" color="primary">
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
          <DynamicBoxes />
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Video Lectures */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          🎥 Java Questions with Solutions
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            "nAweGFw81oo",
            "Z9USwANz00U",
            "Kxa-r_vl1Q8",
            "ffAzl69heoE",
          ].map((videoId, idx) => (
            <Grid item key={idx}>
              <iframe
                width="350"
                height="250"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video ${idx + 1}`}
                frameBorder="0"
                allowFullScreen
              />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6 }} />

        {/* Advice Section */}
        <Box mb={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            📚 Advice to B-Tech Students
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
            {[
              {
                to: "/BrotherlyAdviceForFirstYearStudents",
                label: "Brotherly Advice For 1st Year Students",
              },
              {
                to: "/BrotherlyAdviceForSecondYearStudents",
                label: "Brotherly Advice For 2nd Year Students",
              },
              {
                to: "/BrotherlyAdviceForThirdYearStudents",
                label: "Brotherly Advice For 3rd Year Students",
              },
              {
                to: "/BrotherlyAdviceForFourthYearStudents",
                label: "Brotherly Advice For 4th Year Students",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" color="primary">
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>

        {/* Why Java */}
        <Card sx={{ textAlign: "center", p: 3, mb: 6, boxShadow: 2 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            ☕ Why Java?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Java is everywhere! From Android apps to enterprise systems, from
            web applications to games → Java powers some of the most critical
            technology of our time. Learn this versatile and robust language
            and unlock the key to infinite career opportunities.
          </Typography>
        </Card>

        {/* Call to Action */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            🚀 Ready to Code?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Kickstart your Java journey with{" "}
            <strong>interactive lessons</strong>,{" "}
            <strong>coding challenges</strong>, and <strong>projects</strong>{" "}
            designed for all skill levels.
          </Typography>
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Start Learning Java
          </Button>
          <Button variant="outlined" color="secondary" sx={{ m: 1 }}>
            Explore Our Tutorials
          </Button>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            backgroundColor: "#34495e",
            padding: 3,
            color: "white",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          <img
            src={imageUrlContactInfo}
            alt="Contact Info"
            style={{ height: "80px", borderRadius: "50%" }}
          />
          <Typography variant="body2" mt={1}>
            <b>Contact Us:</b> support@jetutor.in
          </Typography>
          <Typography variant="caption">Version: 1.0.0.22</Typography>
        </Box>
      </Container>

      {/* Bottom Links */}
      <Box textAlign="center" sx={{ my: 2 }}>
        {[
          { label: "DISCLAIMER", path: "/Disclaimer" },
          { label: "PRIVACY POLICY", path: "/PrivacyPolicy" },
          { label: "TERMS & CONDITIONS", path: "/Termsconditions" },
        ].map((item, idx) => (
          <Button
            key={idx}
            variant="text"
            onClick={() => navigate(item.path)}
            sx={{ mx: 0.5 }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </>
  );
};
