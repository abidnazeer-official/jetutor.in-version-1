import React, { useEffect, useState } from "react";

export const MRD140725 = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJuly%202025%2F14-07-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250717_024505_0001.png?alt=media&token=709e0010-650a-4756-9d80-d9207179bce5",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJuly%202025%2F14-07-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250717_024505_0002.png?alt=media&token=368d73a8-1abc-4260-81bb-cd85e172bc94",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJuly%202025%2F14-07-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250717_024505_0003.png?alt=media&token=72a5804c-3f72-46f3-bb26-fbf206fb25f6",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJuly%202025%2F14-07-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250717_024505_0004.png?alt=media&token=c303a0e9-c704-49d9-ab98-0d982bd99be8",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJuly%202025%2F14-07-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250717_024505_0005.png?alt=media&token=4160b9cf-4d3b-44e6-8ef8-17a5f32d00fc",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJuly%202025%2F14-07-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250717_024505_0006.png?alt=media&token=2bdf6ea2-6996-4e3d-8d6a-e82f31ca047a",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJuly%202025%2F14-07-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250717_024505_0007.png?alt=media&token=efc8a3c3-afa1-4b83-a76a-fc958d2da301",
  ];

  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>14 July 2025</h2>

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
