import React, { useEffect } from "react";

export const Disclaimer = () => {
    // Scroll to the top when the component is mounted
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Adds smooth scrolling
        });
      }, []); // Empty dependency array ensures it runs once when the component is mounted
  return (
    <>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Disclaimer</h2>
        <p style={{ fontSize: "14px", color: "#555", fontWeight: "bold" }}>Effective Date: March 18, 2025</p>

        <p>
          <strong>Jetutor.in</strong> is an educational website dedicated to providing Java-related resources, tutorials, and learning materials.
          The information provided on Jetutor.in is for general informational and educational purposes only. While we strive to ensure
          accuracy, we make no representation or warranty, express or implied, regarding the accuracy, adequacy, validity, reliability,
          availability, or completeness of any content on our website.
        </p>

        <p>
          Under no circumstances shall <strong>Jetutor.in</strong> be liable for any loss or damage incurred as a result of using our website or relying on
          any information provided. Your use of Jetutor.in and your reliance on any information is solely at your own risk.
        </p>

        <p>
          We reserve the right to modify, update, or remove any content without prior notice.
        </p>
      </div>
    </>
  );
};
