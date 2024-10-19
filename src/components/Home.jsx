import React from "react";

export const Home = () => {
  const imageUrlContactInfo =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2FTop%20image%20for%20all%2FJava%20Expert%20Tutor_20240909_065344_0000.png?alt=media&token=ba7003cd-6921-4768-888a-98793564bc37";
  return (
    <>
      <div>Home</div>

      <div align="center">
        <h1>Welcome to Java Expert Tutor</h1>
      </div>
      <div align="center">
        <h3>Unlock the Power of Java —> Start Your Coding Journey Today</h3>
      </div>

      <div align="center"><p style={{color: 'red'}}><em><h4>Instagram jetutor.in Topper’s of the Last Week </h4></em></p><h4>[14-10-24]<p style={{color: 'blue'}}>Status: Active</p></h4></div>
      <div align="center"><p style={{color: 'blue'}}>Rank-1: rsandhya_89</p></div>
      <div align="center"><p style={{color: 'blue'}}>Rank-2: vasudav__05</p></div>
      <div align="center"><p style={{color: 'blue'}}>Rank-3: rameshwarramanwal</p></div>

      
      
      <div align="center">
        <img
          src={imageUrlContactInfo}
          alt="Failed to load, plrease refresh the page"
          height={100}
          width={100}
        />
      </div>

      

      <div align="center">
        <b>ContactUs:</b> info@jetutor.in
      </div>
      <div align="right">
        <h6> version: 1.0.0.4</h6>
      </div>
    </>
  );
};
