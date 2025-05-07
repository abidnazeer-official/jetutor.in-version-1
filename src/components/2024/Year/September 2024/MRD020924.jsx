import React, { useEffect } from "react";

export const MRD020924 = () => {
  const imageUrl020924_1 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FSeptember%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240902_141541_0000.png?alt=media&token=adc90c70-8f38-46f0-a5b8-20f559027bbe";
  const imageUrl020924_2 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FSeptember%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240902_141541_0001.png?alt=media&token=9399fa3b-8c8f-4bdb-8561-933a86affa77";
  const imageUrl020924_3 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FSeptember%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240902_141541_0002.png?alt=media&token=cca2ee33-8af5-4775-a18e-51e6c6b22488";
  const imageUrlCongrats020924_4 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FSeptember%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240902_141542_0003.png?alt=media&token=9e9c9da5-c452-4cef-82f7-411b5258295d";
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  }, []); // Empty dependency array ensures it runs once when the component is mounted
  return (
    <>
      <div>02 September 2024</div>
      <div align="center">
        <img
          src={imageUrl020924_1}
          alt="Failed to load, plrease refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl020924_2}
          alt="Failed to load, plrease refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrl020924_3}
          alt="Failed to load, plrease refresh the page"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imageUrlCongrats020924_4}
          alt="Failed to load, plrease refresh the page"
          height={450}
          width={400}
        />
      </div>
    </>
  );
};
