import React, { useEffect } from "react";

export const PrivacyPolicy = () => {
    // Scroll to the top when the component is mounted
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Adds smooth scrolling
        });
      }, []); // Empty dependency array ensures it runs once when the component is mounted
  return (
    <>
      <div
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "auto",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Privacy Policy</h2>
        <p style={{ fontSize: "14px", color: "#555", fontWeight: "bold" }}>
          Effective Date: March 18, 2025
        </p>

        <p>
          This Privacy Policy explains how <strong>Jetutor.in</strong> collects,
          uses, discloses, and protects your information when you visit our
          website.
        </p>

        <h3>Information We Collect</h3>
        <ul style={{ paddingLeft: "20px", marginTop: "0px" }}>
          <li>
            <p>
              <strong>Personal Data:</strong> We may collect personal
              information, such as your name, email address, or other contact
              details when you voluntarily provide them.
            </p>
          </li>
          <li>
            <p>
              <strong>Usage Data:</strong> We collect data regarding how users
              interact with our website, including IP addresses, browser type,
              pages visited, and time spent on our site.
            </p>
          </li>
        </ul>

        <h3>How We Use Your Information</h3>
        <ul style={{ paddingLeft: "20px", marginTop: "0px" }}>
          <li>
            To provide, improve, and personalize our educational resources.
          </li>
          <li>
            To communicate with users about updates, promotions, and support
            inquiries.
          </li>
          <li>To analyze user behavior and improve website functionality.</li>
        </ul>

        <h3>Sharing Your Information</h3>
        <p>
          <strong>Jetutor.in</strong> does not sell, trade, or rent personal
          data to third parties. We may share information with trusted service
          providers who assist in operating our website and improving our
          services.
        </p>

        <h3>Security Measures</h3>
        <p>
          We implement appropriate security measures to safeguard your personal
          information. However, no online transmission or storage method is
          entirely secure, and we cannot guarantee absolute protection.
        </p>

        <h3>Your Rights</h3>
        <p>
          You have the right to access, update, or delete your personal data. If
          you wish to make any changes, please contact us at{" "}
          <a href="mailto:support@jetutor.in">support@jetutor.in</a>.
        </p>
      </div>
    </>
  );
};
