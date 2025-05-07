import React, { useEffect } from "react";

export const MRD071024 = () => {
  const imageUrl071024_1 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FOctober%202024%2F07-10-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241007_181455_0000.png?alt=media&token=d13dfd43-dbb8-446b-970d-d4635b2baf6a";
  const imageUrl071024_2 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FOctober%202024%2F07-10-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241007_181456_0001.png?alt=media&token=00f37ce8-5082-444b-aec6-aff64342b498";
  const imageUrl071024_3 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FOctober%202024%2F07-10-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241007_181456_0002.png?alt=media&token=d37aadeb-8973-44e7-99b2-40a9cf4e952d";
  const imageUrl071024_4 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FOctober%202024%2F07-10-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241007_181456_0003.png?alt=media&token=0427027d-809c-4ddb-bb8b-e1ab45e90d92";

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  }, []); // Empty dependency array ensures it runs once when the component is mounted
  return (
    <>
      <div>07 October 2024</div>
      <div align="center">
        <img
          src={imageUrl071024_1}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl071024_2}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl071024_3}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl071024_4}
          alt="Failed to load, please refresh the page"
          height={450}
          width={400}
        />
      </div>
    </>
  );
};
