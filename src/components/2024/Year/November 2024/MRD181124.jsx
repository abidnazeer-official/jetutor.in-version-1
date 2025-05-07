import React from "react";
import { useEffect } from "react";

export const MRD181124 = () => {
  const imgUrlMRD181124_1 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FNovember%202024%2F18-11-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241118_082442_0000.png?alt=media&token=62f156f6-9011-4bf7-b2d1-a98cb7ca8a08";
  const imgUrlMRD181124_2 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FNovember%202024%2F18-11-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241118_082442_0001.png?alt=media&token=51468a24-aa38-4d4d-8709-f7db83aee41d";
  const imgUrlMRD181124_3 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FNovember%202024%2F18-11-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241118_082442_0002.png?alt=media&token=6a847ce3-c651-457e-9e51-6717ab060415";
  const imgUrlMRD181124_4 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FNovember%202024%2F18-11-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20241118_082442_0003.png?alt=media&token=925de931-594a-464f-aa75-8fff47c2ddbf";
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  }, []); // Empty dependency array ensures it runs once when the component is mounted
  return (
    <>
      <div>18 November 2024</div>
      <div align="center">
        <img
          src={imgUrlMRD181124_1}
          alt="Failed to load, please check your internet connection!"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imgUrlMRD181124_2}
          alt="Failed to load, please check your internet connection!"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imgUrlMRD181124_3}
          alt="Failed to load, please check your internet connection!"
          height={450}
          width={400}
        />
      </div>
      <div align="center">
        <img
          src={imgUrlMRD181124_4}
          alt="Failed to load, please check your internet connection!"
          height={450}
          width={400}
        />
      </div>
    </>
  );
};
