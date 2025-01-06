import React from 'react';
import './BrotherlyAdviceForThirdYearStudents.css';
import { useEffect } from 'react';

const BrotherlyAdviceForThirdYearStudents = () => {
     // Scroll to the top when the component is mounted
          useEffect(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth", // Adds smooth scrolling
            });
          }, []); // Empty dependency array ensures it runs once when the component is mounted

  return (
    <div className="container">
      <header className="header">
        <h1>Brotherly Advice for B.Tech 3rd-Year Students</h1>
        <p>The third year is a critical phase in your B.Tech journey. It’s where the groundwork laid in the first two years begins to take shape, and the stakes get higher as you prepare for internships, placements, and future opportunities.</p>
      </header>

      <main>
        <section className="section">
          <h2>1. Academics: Strengthen Core Knowledge</h2>
          <ul>
            <li><strong>Master Core Subjects:</strong> Focus deeply on Operating Systems, DBMS, Computer Networks, and Software Engineering. Understand System Design Basics.</li>
            <li><strong>Continue with Data Structures and Algorithms (DSA):</strong> Dedicate 1-2 hours daily to solving problems on LeetCode, HackerRank, or Codeforces.</li>
            <li><strong>Study for Exams Smartly:</strong> Focus on scoring subjects but maintain a GPA/CGPA above 7.5 or 8 for placement opportunities.</li>
          </ul>
        </section>

        <section className="section">
          <h2>2. Placement Preparation: Start Early</h2>
          <ul>
            <li><strong>Acing Aptitude Tests:</strong> Practice quantitative aptitude, logical reasoning, and verbal ability on platforms like IndiaBix or PrepInsta.</li>
            <li><strong>Mock Interviews:</strong> Start practicing mock technical and HR interviews with platforms like Pramp or through feedback from seniors.</li>
            <li><strong>Resume Building:</strong> Keep your resume concise and highlight skills, projects, and internships. Clean up your GitHub profile.</li>
            <li><strong>Networking:</strong> Build connections on LinkedIn. Many opportunities come through referrals.</li>
          </ul>
        </section>

        <section className="section">
          <h2>3. Projects: Build What Matters</h2>
          <ul>
            <li><strong>Work on Advanced Projects:</strong> Build real-world applications like a real-time chat app or a recommendation system using machine learning.</li>
            <li><strong>Collaborate:</strong> Work on team projects using GitHub for version control.</li>
            <li><strong>Focus on Depth:</strong> Build 2-3 robust, well-documented projects rather than many small ones.</li>
          </ul>
        </section>

        <section className="section">
          <h2>4. Internships: Get Real-World Experience</h2>
          <ul>
            <li><strong>Apply for Internships:</strong> Apply early on platforms like LinkedIn, Internshala, or AngelList. Internships provide valuable experience.</li>
            <li><strong>Summer Internship:</strong> Focus on internships aligned with your career goals. A good internship can lead to a pre-placement offer (PPO).</li>
            <li><strong>Learn from Experience:</strong> Take your internship seriously and seek feedback from mentors.</li>
          </ul>
        </section>

        <section className="section">
          <h2>5. Coding and Competitive Programming</h2>
          <ul>
            <li><strong>Improve Speed and Accuracy:</strong> Participate in coding contests on Codeforces, CodeChef, or AtCoder.</li>
            <li><strong>Prepare for Specific Companies:</strong> Solve previous year questions for companies like Amazon, Google, or TCS using GeeksforGeeks or InterviewBit.</li>
          </ul>
        </section>

        <section className="section">
          <h2>6. Explore Career Options</h2>
          <ul>
            <li><strong>Choose a Path:</strong> Focus on the field that excites you—software development, data science, AI/ML, cybersecurity, or cloud computing.</li>
            <li><strong>Certifications:</strong> Add certifications like AWS Certified Solutions Architect, Google Data Analytics, or Certified Ethical Hacker (CEH).</li>
            <li><strong>Research Higher Studies:</strong> Start preparing for MS, MBA, or GATE exams if you plan on higher studies.</li>
          </ul>
        </section>

        <section className="section">
          <h2>7. Personal Growth: Balance and Confidence</h2>
          <ul>
            <li><strong>Improve Soft Skills:</strong> Work on communication, presentation skills, and attend workshops or debates.</li>
            <li><strong>Build Confidence:</strong> Mock interviews and group discussions will help you build confidence.</li>
            <li><strong>Time Management:</strong> Balance academics, projects, coding practice, and relaxation by prioritizing tasks daily.</li>
          </ul>
        </section>

        <section className="section">
          <h2>8. Stay Healthy and Focused</h2>
          <ul>
            <li><strong>Physical Health:</strong> Exercise regularly to keep your mind sharp. Even a 20-minute workout or yoga session helps.</li>
            <li><strong>Mental Health:</strong> Third year can be stressful, so don’t hesitate to take breaks or talk to someone if needed.</li>
          </ul>
        </section>

        <section className="checklist">
          <h2>Checklist for 3rd-Year Students</h2>
          <ul>
            <li>✅ Master advanced DSA topics (dynamic programming, graphs).</li>
            <li>✅ Build 2-3 strong, real-world projects.</li>
            <li>✅ Solve at least 200 coding problems on LeetCode or similar platforms.</li>
            <li>✅ Participate in 2-3 coding competitions or hackathons.</li>
            <li>✅ Secure an internship or actively apply for one.</li>
            <li>✅ Network with alumni and professionals on LinkedIn.</li>
            <li>✅ Prepare a strong, tailored resume.</li>
            <li>✅ Start placement and aptitude preparation early.</li>
          </ul>
        </section>

        <section className="final-words">
          <h2>Final Words as Your Brother</h2>
          <p>This year is about pushing yourself out of your comfort zone. The work you put in now will define your career path. Remember, hard work and consistency always pay off. Even if things don’t go as planned, don’t lose hope. I’m always here to guide and support you. Let’s work together to make this year the stepping stone to your success! 💪</p>
        </section>
      </main>
    </div>
  );
};

export default BrotherlyAdviceForThirdYearStudents;
