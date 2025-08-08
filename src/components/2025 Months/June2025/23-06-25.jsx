import React, { useEffect, useState } from "react";

export const MRD230625 = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F23-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250626_104815_0001.png?alt=media&token=35139621-d0f8-4c37-a28c-31166db463d9",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F23-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250626_104815_0002.png?alt=media&token=cfbfa2f2-3ddf-4709-931a-df5f1579cbed",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F23-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250626_104815_0003.png?alt=media&token=fd853e5c-a5e8-4cc7-b769-5b1ea899b8b9",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F23-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250626_104815_0004.png?alt=media&token=fd8f0306-acd5-4fab-867a-457b8217a47c",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F23-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250626_104815_0005.png?alt=media&token=d20ba4ac-22f9-4285-b1a8-0eee5e782aa2",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F23-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250626_104816_0006.png?alt=media&token=b0f937b8-4945-4328-ab9b-3dd69c7e6be7",
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FJune%202025%2F23-06-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250626_104816_0007.png?alt=media&token=25562f31-7a74-42fb-a8fb-e1b8120e8a19",
  ];

  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>23 June 2025</h2>

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
