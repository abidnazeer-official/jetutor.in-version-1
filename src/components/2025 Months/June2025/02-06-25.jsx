import React, { useEffect, useState } from "react";

export const MRD020625 = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F02-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250603_192839_0001.png?alt=media&token=af8f5e68-4d26-42ee-9621-fae103cf2b2b",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F02-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250603_192839_0002.png?alt=media&token=060a5fae-a159-44eb-bf56-cea1787c591f",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F02-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250603_192839_0003.png?alt=media&token=a8da7869-ee93-4334-80fe-3bd3d9cded7f",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F02-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250603_192840_0004.png?alt=media&token=4d650510-9b70-44c7-a16c-62fd89329c81",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F02-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250603_192840_0005.png?alt=media&token=7b8217b8-0cca-4888-890c-20fb66dfa31f",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F02-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250603_192840_0006.png?alt=media&token=afdb40c7-63c0-4fac-89f8-2e046fc6323b",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F02-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250603_192840_0007.png?alt=media&token=cbdd6e1a-ade4-4d5b-964a-8b15b1222889",
  ];

  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>02 June 2025</h2>

      {/* Image Grid */}
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
            onClick={() => setZoomImage(url)}
          />
        ))}
      </div>

      {/* Zoom Modal */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "zoom-out",
          }}
        >
          <img
            src={zoomImage}
            alt="Zoomed"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(255,255,255,0.3)",
            }}
          />
        </div>
      )}
    </div>
  );
};
