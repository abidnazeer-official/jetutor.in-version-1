import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";

const App = () => {
  const jetutorinlogoUrl =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2FTop%20image%20for%20all%2FJava%20Expert%20Tutor_20240909_065344_0000.png?alt=media&token=ba7003cd-6921-4768-888a-98793564bc37";
  const imageUrl =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2F16-09-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Resu_20240916_144115_0000.png?alt=media&token=e4bca1c1-776c-4426-ba11-96d73b8ef4bb";
  const imageUr2 =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2F16-09-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Resu_20240916_144115_0001.png?alt=media&token=20183251-0d09-4dd1-91e9-244bc4ac7bfe";
    const imageUr3 ="https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2F16-09-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Resu_20240916_144115_0002.png?alt=media&token=dfb8d84b-e0f7-412d-a051-1ca8c43a46d6";
    const imageUr4 ="https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2F16-09-24%2FCopy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Monday%20Resu_20240916_144115_0003.png?alt=media&token=c5b9a3fe-fb3a-4fca-a588-9e7a71482f74";
  return (
    <>
      <NavBar/>

      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/MRD090924" element={<About/>}/>
        </Routes>
      </div>

      <div align="center">
        <img
          src={jetutorinlogoUrl}
          alt="Remote Image"
          height="200px"
          width="200px"
        ></img>
      </div>
      <div align="center">
        <img
          src={imageUrl}
          alt="Remote Image"
          height="400px"
          width="400px"
        ></img>
      </div>
      <div align="center">
        <img
          src={imageUr2}
          alt="Remote Image"
          height="400px"
          width="400px"
        ></img>
      </div>
      <div align="center">
        <img
          src={imageUr3}
          alt="Remote Image"
          height="400px"
          width="400px"
        ></img>
      </div>
      <div align="center">
        <img
          src={imageUr4}
          alt="Remote Image"
          height="400px"
          width="400px"
        ></img>
      </div>
    </>
  );
};
export default App;
