import React, { useEffect } from "react";

export const MRD141024 = () => {
  const imageUrl141024_1 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FOctober%202024%2F14-10-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241014_191121_0000.png?alt=media&token=59de5ffc-5f01-4c51-a4ba-bc1ef5caec36";
  const imageUrl141024_2 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FOctober%202024%2F14-10-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241014_191121_0001.png?alt=media&token=a5f5e8c4-1345-419f-a144-59f3a93baca7";
  const imageUrl141024_3 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FOctober%202024%2F14-10-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241014_191121_0002.png?alt=media&token=73431112-8994-4de7-abcc-344f3bff4ced";
  const imageUrl141024_4 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FOctober%202024%2F14-10-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241014_191121_0003.png?alt=media&token=07462214-81ad-478f-a1af-8991d251415c";

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  }, []); // Empty dependency array ensures it runs once when the component is mounted
  return (
    <>
      <div>14 October 2024</div>
      <div align="center">
        <img
          src={imageUrl141024_1}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl141024_2}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl141024_3}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl141024_4}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
    </>
  );
};
