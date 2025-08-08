import React, { useEffect } from "react";

export const MRD120525 = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMay2025%2F12-05-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250512_182946_0001.png?alt=media&token=5a7ec1c4-66f8-4dcd-8e42-bb2d4a70352a",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMay2025%2F12-05-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250512_182947_0002.png?alt=media&token=0ef0f0cc-772c-4219-befb-8b33aad2c60c",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMay2025%2F12-05-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250512_182947_0003.png?alt=media&token=835ea89c-4c11-48ea-bb35-0662607b63ee",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMay2025%2F12-05-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250512_182947_0004.png?alt=media&token=6d9033ef-8bb6-4db1-93d9-68b2aeabb029",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMay2025%2F12-05-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250512_182947_0005.png?alt=media&token=88a239e3-f8ca-4baf-983e-a730f9977dc4",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMay2025%2F12-05-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250512_182947_0006.png?alt=media&token=8599ba7c-7253-416e-bb03-9d7cad9bc92f",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMay2025%2F12-05-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250512_182947_0007.png?alt=media&token=ca9e86d0-83e9-4c72-9fed-23283d720da5",
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>12 May 2025</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyItems: "center",
        }}
      >
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Result ${index + 1}`}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.03)";
              e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
            }}
          />
        ))}
      </div>
    </div>
  );
};
