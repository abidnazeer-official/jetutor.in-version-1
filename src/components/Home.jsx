import React from "react";
import DynamicBoxes from "./DynamicBoxes";
import VideoPlayer from "./VideoPlayer";

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

      <hr />

      <div align="center">
        <p style={{ color: "red" }}>
          <em>
            <h2>Instagram jetutor.in Topper’s of the Last Week </h2>
          </em>
        </p>
        <h1>
          Monday Results Day [16-12-24]
          <p style={{ color: "blue" }}>Status: Active</p>
        </h1>
      </div>
      <div align="center">
        <img
        //Current Week Ranking
          src="https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2FCurrent%20Week%20Ranking%2FJetutor%20Version%201.0.0.10.jpeg?alt=media&token=c70d18f8-3ca7-4321-a7be-c3fa64dbc729"
          alt="Check your Internet connection!"
          height={450}
          width={800}
        />
      </div>
      <br />
      <br />
      <div align="center">
        <p>
          <b>Note:</b> Rank will be automatically updated next Monday.
        </p>
      </div>

      <br />
      <hr />

      {/* <Router>
        {/* Dynamic Boxes */}
      <div>
        <h1>Java Interview Preparation</h1>
        <DynamicBoxes />
      </div>


      {/* Horizontal Line */}
      <hr />
      <div>
        <h1>Java Questions with Solution</h1>
        <table width={500} height={500}>
          <tr style={{display: "flex", gap: "350px"}}>
            <td><h3>Lecture-1</h3></td>
            <td><h3>Lecture-2</h3></td>
            <td><h3>Lecture-3</h3></td>
          </tr>
          <tr style={{display: "flex", gap: "100px"}}>
            <td>
              <VideoPlayer videoUrl="https://youtu.be/chjo4rHhUxQ?si=0Fd4Mx8HYaTq-HSo" />
            </td>
            <td>
              <VideoPlayer videoUrl="https://youtu.be/RYPl-I1MesE?si=ZtQft5NaS0e_GTcv" />
            </td>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/lW_vqoOxu4E?si=wfaCgL-FdpK1mwIX" />
            </td>
          </tr>


          <tr style={{display: "flex", gap: "350px"}}>
            <td><h3>Lecture-4</h3></td>
            <td><h3>Lecture-5</h3></td>
            <td><h3>Lecture-6</h3></td>
          </tr>
          <tr style={{display: "flex", gap: "100px"}}>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/voFzU9kL4d0?si=5XFU63jExEasejMB" />
            </td>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/4ueFoRnA9-k?si=E7PLmMo6jbht_qsL" />
            </td>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/Rq_uaosqKhk?si=HB1-DMT1eRxhThAp" />
            </td>
          </tr>
          <tr style={{display: "flex", gap: "350px"}}>
            <td><h3>Lecture-7</h3></td>
            <td><h3>Lecture-8</h3></td>
            <td><h3>Lecture-9</h3></td>
          </tr>
          <tr style={{display: "flex", gap: "100px"}}>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/sSD8dbwNB7o?si=YVw63t99L-X6XXhn" />
            </td>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/zdUtZWF533M?si=_nIVwZEtRJ_3dX-H" />
            </td>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/h1b-9WUIaIk?si=MTsNM-rYB3rFMcRh" />
            </td>
          </tr>
          <tr style={{display: "flex", gap: "350px"}}>
            <td><h3>Lecture-10</h3></td>
            <td><h3>Lecture-11</h3></td>
            <td><h3>Lecture-12</h3></td>
          </tr>
          <tr style={{display: "flex", gap: "100px"}}>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/DLfA1op84Ls?si=fTDipBpFDctCYrtp" />
            </td>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/NjP0ZRnXLC4?si=V6XCl7MrzPqHRj2o" />
            </td>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/LfZuRQmaRRU?si=epspAzhRHxV-x_Tc" />
            </td>
          </tr>
          <tr style={{display: "flex", gap: "350px"}}>
            <td><h3>Lecture-13</h3></td>
            <td><h3>Lecture-14</h3></td>
            <td><h3>Lecture-15</h3></td>
          </tr>
          <tr style={{display: "flex", gap: "100px"}}>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/X2wI3XZUq9Y?si=ptAP7T20YTrgQKQ0" />
            </td>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/Mhv3fG_VUDo?si=pa19KbxOuXt3ARLb" />
            </td>
            <td>
            <VideoPlayer videoUrl="https://youtu.be/bUldJ2xvqLo?si=oKoIwYNhj9qlRcCD" />
            </td>
          </tr>
        </table>
      </div>
     
    
      {/* Horizontal Line */}
      <hr />

      <div align="center">
        <h3>Why Java ?</h3>
        <p>
          Java is everywhere! <br />
          From Android apps to enterprise systems, from web applications to
          games —> Java powers some of the most critical technology of our time.
          <br /> Learn this versatile and robust language and unlock the key to
          infinite career opportunities, no matter your background or
          aspirations.
        </p>
      </div>

      <div align="center">
        <h3>Begin Your Java Journey:</h3>
        <p>
          <b>Learn by Doing:</b> Hands-on coding challenges that simulate
          real-world problems. <br />
          <b>Career Focused:</b> Master the skills employers want. From core
          Java to advanced frameworks.
          <br /> <b>Community Support:</b> Get help from a vibrant, experienced
          community of developers. <br />
          <b>Always Up-to-Date:</b> Stay ahead of the curve with the latest Java
          features and updates.
        </p>
      </div>

      <div align="center">
        <h3>What Can You Build with Java?</h3>
        <p>
          <b>Android Apps:</b> Build mobile applications with ease. Web Apps:
          Create robust, scalable backend systems.
          <br />
          <b>Enterprise Solutions:</b> Develop systems that power global
          businesses.
          <br />
          <b>AI & Machine Learning:</b> Tap into the world of AI with powerful
          Java libraries.
        </p>
      </div>

      <div align="center">
        <h3>Ready to Code?</h3>
        <p>
          Kickstart your Java journey with <b>interactive lessons</b>,{" "}
          <b>coding challenges</b>, and <b>projects</b> designed for every skill
          level — from beginners to advanced developers. Start today and become
          a Java pro in no time.
        </p>
      </div>

      <div align="center">
        <h3>Get Started for Free!</h3>
        <p>
          Join thousands of Java learners today. Whether you're starting from
          scratch or leveling up, we've got the resources and tools you need to
          succeed.
          <br />
          <br />
          <b>
            [Start Learning Java] [Explore Our Tutorials] [Join Our Community]
          </b>
          <br />
          <br />
          <br />
          <b>
            Java Expert Tutor — Empowering Developers, One Line of Code at a
            Time
          </b>
        </p>
      </div>

      <hr />
      <div align="center">
        <img
          src={imageUrlContactInfo}
          alt="Failed to load, plrease refresh the page"
          height={100}
          width={100}
        />
      </div>

      <div align="center">
        <b>ContactUs:</b> support@jetutor.in
      </div>
      <div align="right">
        <h6> version: 1.0.0.10</h6>
      </div>
    </>
  );
};
