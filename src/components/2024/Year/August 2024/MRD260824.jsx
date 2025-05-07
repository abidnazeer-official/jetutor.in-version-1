import React, { useEffect } from "react";

export const MRD260824 = () => {
  const imageUrl260824_1 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FAugust%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240826_122825_0000.png?alt=media&token=396c8d57-a051-4ec9-9d0a-2f11d8087d26";
  const imageUrl260824_2 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FAugust%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240826_122825_0001.png?alt=media&token=530ae117-f184-4559-976d-3f2cdaae4020";
  const imageUrl260824_3 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FAugust%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240826_122825_0002.png?alt=media&token=ccd00b98-12b1-410e-89c0-c9848f6f4fec";
  const imageUrlCongrats260824_4 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FAugust%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240805_160622_0003.png?alt=media&token=7e6cd0a7-9e45-483a-a8ee-6a141856eea2";

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  }, []); // Empty dependency array ensures it runs once when the component is mounted
  return (
    <>
      <div>26 August 2024</div>
      <div align="center">
        <img
          src={imageUrl260824_1}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl260824_2}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl260824_3}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrlCongrats260824_4}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
    </>
  );
};
