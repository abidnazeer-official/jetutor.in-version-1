import React, { useEffect } from "react";

export const MRD120824 = () => {
  const imageUrl120824_1 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FAugust%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240812_151547_0000.png?alt=media&token=aeebe33f-c613-4809-aeea-094f79668355";
  const imageUrl120824_2 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FAugust%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240812_151547_0001.png?alt=media&token=cccda1cc-3c4a-4a71-b7e1-714c24d93f1b";
  const imageUrl120824_3 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FAugust%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240812_151547_0002.png?alt=media&token=50f80bec-4430-43e0-a1ff-092ef783aa1b";
  const imageUrlCongrats_4 =
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
      <div>12 August 2024</div>
      <div align="center">
        <img
          src={imageUrl120824_1}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl120824_2}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl120824_3}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrlCongrats_4}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
    </>
  );
};
