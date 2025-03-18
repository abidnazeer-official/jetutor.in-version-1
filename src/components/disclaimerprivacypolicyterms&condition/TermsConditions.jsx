import React, { useEffect } from "react";

export const TermsConditions = () => {
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
          textAlign: "justify"
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Terms & Conditions</h2>
        <p style={{ fontSize: "14px", color: "#555", fontWeight: "bold", marginBottom: "20px" }}>
          Effective Date: March 18, 2025
        </p>

        <h3>Introduction</h3>
        <p>
          By accessing <strong>Jetutor.in</strong>, you agree to these Terms & Conditions. If you do not agree, please discontinue the use of our website.
        </p>

        <h3>Use of Services</h3>
        <ul style={{ paddingLeft: "20px", marginTop: "0px" }}>
          <li><strong>Jetutor.in</strong> is an educational platform focused on Java programming and related content.</li>
          <li>Users must be at least 13 years old to access the website.</li>
          <li>You agree to use <strong>Jetutor.in</strong> lawfully and refrain from engaging in unauthorized activities, including hacking, spamming, or violating any laws.</li>
        </ul>

        <h3>Intellectual Property</h3>
        <p>
          All content, including articles, code samples, images, and logos, is the property of <strong>Jetutor.in</strong> or used with permission. Reproduction, modification, or distribution without prior consent is prohibited.
        </p>

        <h3>Limitation of Liability</h3>
        <p>
          <strong>Jetutor.in</strong> is not responsible for any technical issues, data loss, or damages arising from your use of our website.
        </p>

        <h3>Changes to Terms</h3>
        <p>
          <strong>Jetutor.in</strong> reserves the right to update these Terms & Conditions at any time. Continued use of the website implies acceptance of any changes.
        </p>

        <h3>Contact Us</h3>
        <p>
          For any inquiries or concerns, please reach out to us at <a href="mailto:support@jetutor.in">support@jetutor.in</a>.
        </p>
      </div>
    </>
  );
};
