import React, { useEffect } from "react";
import "./BrotherlyAdviceForSecondYearStudents.css";

const BrotherlyAdviceForSecondYearStudents = () => {
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  }, []); // Empty dependency array ensures it runs once when the component is mounted

  return (
    <div className="container">
      {/* Header */}
      <header id="top" className="header">
        <h1>Brotherly Advice for B.Tech 2nd-Year Students</h1>
        <p>Your second year is when you start building on your foundation!</p>
      </header>

      {/* Content Sections */}
      <main>
        <section className="section">
          <h2>1. Academics: Dive Deeper into Core Subjects</h2>
          <ul>
            <li>
              Master Core Subjects:
              <ul>
                <li>Focus on Data Structures and Algorithms (DSA). Practice daily on platforms like LeetCode, Codeforces, or HackerRank.</li>
                <li>Understand subjects like DBMS, Operating Systems, and Computer Networks.</li>
                <li>Always implement theoretical concepts practically.</li>
              </ul>
            </li>
            <li>Stay Consistent: Revise daily and clarify doubts immediately.</li>
            <li>Use resources like GeeksforGeeks, CS50, or YouTube for extra understanding.</li>
          </ul>
        </section>

        <section className="section">
          <h2>2. Coding and Problem-Solving: Level Up</h2>
          <ul>
            <li>Solve Problems Regularly: Aim to solve 50+ coding problems every month.</li>
            <li>Participate in online contests on platforms like CodeChef, Codeforces, or AtCoder.</li>
            <li>Learn Competitive Programming: Dedicate time to understanding concepts like greedy algorithms, dynamic programming, and backtracking.</li>
            <li>Learn New Programming Languages: Consider learning Java or C++ to expand your skill set.</li>
          </ul>
        </section>

        <section className="section">
          <h2>3. Projects: Build Your Portfolio</h2>
          <ul>
            <li>Start Building Projects: Choose small, meaningful projects that solve real-world problems or showcase your skills.</li>
            <li>Example Projects:
              <ul>
                <li>A personal portfolio website.</li>
                <li>A to-do list app using a framework like React or Django.</li>
                <li>A simple chat application.</li>
              </ul>
            </li>
            <li>Collaborate with Peers: Work on group projects to learn teamwork and version control tools like Git.</li>
            <li>Host Projects Online: Use GitHub to showcase your work.</li>
          </ul>
        </section>

        <section className="section">
          <h2>4. Explore Career Options</h2>
          <ul>
            <li>Identify Your Interests: Explore fields like web development, app development, AI/ML, data science, cybersecurity, or cloud computing.</li>
            <li>Take online courses on platforms like Coursera, Udemy, or edX to learn more about these fields.</li>
            <li>Certifications: Complete at least one certification this year in a technology or domain that excites you.</li>
            <li>Attend Webinars and Seminars: Participate in tech events, webinars, or workshops to stay updated with industry trends.</li>
          </ul>
        </section>

        <section className="section">
          <h2>5. Internships and Training</h2>
          <ul>
            <li>Start Looking for Internships: Even if it’s a small unpaid internship, the experience matters.</li>
            <li>Contribute to Open Source: Join programs like Hacktoberfest or contribute to open-source projects on GitHub.</li>
          </ul>
        </section>

        <section className="section">
          <h2>6. Personal Growth: Build Your Confidence</h2>
          <ul>
            <li>Work on Communication Skills: Join clubs or participate in group discussions and presentations.</li>
            <li>Build a Professional Network: Connect with seniors, professors, and professionals on LinkedIn.</li>
            <li>Create Your Resume: Start building a professional resume and keep updating it regularly.</li>
          </ul>
        </section>

        <section className="section">
          <h2>7. Time Management: Stay Disciplined</h2>
          <ul>
            <li>Daily Routine:
              <ul>
                <li>Morning: Revise subjects or practice coding.</li>
                <li>Afternoon: Focus on project development or learning new concepts.</li>
                <li>Evening: Work on assignments or participate in coding contests.</li>
              </ul>
            </li>
            <li>Avoid Wasting Time: Reduce time spent on social media or gaming. Set limits and stick to them.</li>
          </ul>
        </section>

        <section className="section">
          <h2>8. Health and Lifestyle</h2>
          <ul>
            <li>Stay Active: Exercise regularly to keep your mind and body sharp.</li>
            <li>Get enough sleep (7-8 hours) to stay productive.</li>
            <li>Mental Health Matters: Talk to friends, meditate, or journal your thoughts to stay balanced.</li>
          </ul>
        </section>

        {/* Checklist */}
        <section className="checklist">
          <h2>Checklist for 2nd-Year Students</h2>
          <ul>
            <li>✅ Master DSA basics (arrays, trees, graphs).</li>
            <li>✅ Build at least 2-3 meaningful projects.</li>
            <li>✅ Solve 100+ coding problems on platforms like LeetCode.</li>
            <li>✅ Complete 1-2 certifications.</li>
            <li>✅ Participate in 1 hackathon or coding competition.</li>
            <li>✅ Secure a small internship or contribute to open-source.</li>
          </ul>
        </section>

        {/* Final Words */}
        <section className="final-words">
          <h2>Final Words as Your Brother</h2>
          <p>This is the year where you truly start shaping your career. The hard work you put in now will make the next two years smoother and more rewarding. Stay focused, stay curious, and remember that success comes to those who are consistent and disciplined.</p>
          <p>And remember, I’m always here for you—whether it’s for guidance, motivation, or just to cheer you on. Let’s make this year your turning point! 💪</p>
        </section>
      </main>
    </div>
  );
};

export default BrotherlyAdviceForSecondYearStudents;
