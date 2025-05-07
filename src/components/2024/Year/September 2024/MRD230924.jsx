import React from "react";
import { useEffect } from "react";

export const MRD230924 = () =>{
    const imageUrl230824_1 = 
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FSeptember%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Mon_20240923_041905_0000.png?alt=media&token=f78f74e6-9dd5-4745-9bcb-0d2ebd7703e4";
    const imageUrl230824_2 = 
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FSeptember%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Mon_20240923_041905_0001.png?alt=media&token=29599707-688a-4fd9-8e64-2b766d963805";
    const imageUrl230824_3 = 
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FSeptember%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Mon_20240923_041905_0002.png?alt=media&token=6ec73875-52d0-42f3-b98b-9b8463ad42bb";
    const imageUrlCongrats230824_4 = 
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2FMondayResultsDay%20%5BMRD%5D%2FSeptember%202024%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Results%20Day_20240902_141542_0003.png?alt=media&token=9e9c9da5-c452-4cef-82f7-411b5258295d";
    // Scroll to the top when the component is mounted
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Adds smooth scrolling
        });
      }, []); // Empty dependency array ensures it runs once when the component is mounted
    return(
        <>
            <div>23 September 2024</div>
            <div align="center">
                <img src={imageUrl230824_1} alt="Failed to load, please refresh the page" height={450} width={400}/>
            </div>
            <div align="center">
                <img src={imageUrl230824_2} alt="Failed to load, please refresh the page" height={450} width={400}/>
            </div>
            <div align="center">
                <img src={imageUrl230824_3} alt="Failed to load, please refresh the page" height={450} width={400}/>
            </div>
            <div align="center">
                <img src={imageUrlCongrats230824_4} alt="Failed to load, please refresh the page" height={450} width={400}/>
            </div>
        </>
    )
}