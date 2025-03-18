import React, { useEffect } from "react";

export const CurrentMondayResults = () => {
  const imgUrlMRD170325_1 =
  "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMarch%202025%2F17-03-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250318_001700_0001.png?alt=media&token=809346fc-7d40-4f8b-bd2c-341d4f1a3288";
const imgUrlMRD170325_2 =
  "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMarch%202025%2F17-03-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250318_001700_0002.png?alt=media&token=95db27c7-36f0-4609-b17e-9969d6328cb4";
const imgUrlMRD170325_3 =
  "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMarch%202025%2F17-03-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250318_001700_0003.png?alt=media&token=f9217e07-346c-4f60-b9e4-0d695f230f3d";
const imgUrlMRD170325_4 =
  "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMarch%202025%2F17-03-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250318_001701_0004.png?alt=media&token=dba6b06c-a93a-4ce8-9c2e-e6666ee2ab0a";
const imgUrlMRD170325_5 =
  "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMarch%202025%2F17-03-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250318_001701_0005.png?alt=media&token=a0225656-339f-48be-a559-c6b9f9ee45eb";
const imgUrlMRD170325_6 =
  "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FMarch%202025%2F17-03-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250318_001701_0006.png?alt=media&token=65e42e4e-a131-4420-b5d9-cdaf771d7f01";
const imgUrlMRD170325_7 =
  "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2F2025%20%5BNew%20Year%5D%2FFebruary%202025%2F17-03-25%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Cop_20250217_162442_0007.png?alt=media&token=ea8834e8-1f8e-46f9-b32c-64e446cf25d4";

// Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  }, []); // Empty dependency array ensures it runs once when the component is mounted

  return (
     <>
      <div>17 March 2025</div>
      <div align="center">
        <img
          src={imgUrlMRD170325_1}
          alt="Failed to load, please check your internet!"
          height={450}
          width={400}
        />
        </div>
        <div align="center">
        <img
          src={imgUrlMRD170325_2}
          alt="Failed to load, please check your internet!"
          height={450}
          width={400}
        />
        </div>
        <div align="center">
        <img
          src={imgUrlMRD170325_3}
          alt="Failed to load, please check your internet!"
          height={450}
          width={400}
        />
        </div>
        <div align="center">
        <img
          src={imgUrlMRD170325_4}
          alt="Failed to load, please check your internet!"
          height={450}
          width={400}
        />
        </div>
        <div align="center">
        <img
          src={imgUrlMRD170325_5}
          alt="Failed to load, please check your internet!"
          height={450}
          width={400}
        />
        </div>
        <div align="center">
        <img
          src={imgUrlMRD170325_6}
          alt="Failed to load, please check your internet!"
          height={450}
          width={400}
        />
        </div>
        <div align="center">
        <img
          src={imgUrlMRD170325_7}
          alt="Failed to load, please check your internet!"
          height={450}
          width={400}
        />
      </div>
    </>
  );
};
