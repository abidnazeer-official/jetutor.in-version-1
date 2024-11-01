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

      <hr />

      <div align="center">
        <p style={{ color: "red" }}>
          <em>
            <h4>Instagram jetutor.in Topper’s of the Last Week </h4>
          </em>
        </p>
        <h4>
        Monday Results Day [28-10-24]<p style={{ color: "blue" }}>Status: Active</p>
        </h4>
      </div>
      <div align="center">
        <p style={{ color: "green" }}>Rank-1: vasudav__05</p>
      </div>
      <div align="center">
        <p style={{ color: "green" }}>Rank-2: c_e_o_tech</p>
      </div>
      <div align="center">
        <p style={{ color: "green" }}>Rank-3: headgapure_ratnadeep</p>
      </div>
      <br />
      <br />
      <div align="center">
        <p><b>Note:</b> Rank will be automatically updated next Monday.</p>
      </div>

      <br />
      <hr />
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
        <b>ContactUs:</b> info@jetutor.in
      </div>
      <div align="right">
        <h6> version: 1.0.0.6</h6>
      </div>
    </>
  );
};
