import React, { useEffect } from "react";

export const MRD111124 = () => {
    const imgUrlMRD041124_1 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FNovember%202024%2F11-11-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241111_234834_0000.png?alt=media&token=09c0d8a4-b9b4-4042-af14-071cd6835227";
  const imgUrlMRD041124_2 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FNovember%202024%2F11-11-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241111_234834_0001.png?alt=media&token=36fbc896-5e67-498c-a30c-9077a01b41af";
  const imgUrlMRD041124_3 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FNovember%202024%2F11-11-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241111_234834_0002.png?alt=media&token=03d357ab-1dcc-4556-926b-ff3745efb1ef";
  const imgUrlMRD041124_4 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FNovember%202024%2F11-11-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241111_234835_0003.png?alt=media&token=5f91d57d-ff9c-4694-8327-f9d5996d58b4";

    // Scroll to the top when the component is mounted
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Adds smooth scrolling
        });
      }, []); // Empty dependency array ensures it runs once when the component is mounted
  return (
    <>
      <div>11 November 2024</div>
      <div align="center">
        <img
          src={imgUrlMRD041124_1}
          alt="Failed to load, please check your internet connection!"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imgUrlMRD041124_2}
          alt="Failed to load, please check your internet connection!"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imgUrlMRD041124_3}
          alt="Failed to load, please check your internet connection!"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imgUrlMRD041124_4}
          alt="Failed to load, please check your internet connection!"
          height={450}
          width={400}
        />
      </div>
    </>
  );
};
