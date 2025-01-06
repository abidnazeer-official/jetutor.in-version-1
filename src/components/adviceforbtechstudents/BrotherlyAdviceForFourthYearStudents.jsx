import React from 'react';
import './BrotherlyAdviceForFourthYearStudents.css';
import { useEffect } from 'react';

const BrotherlyAdviceForFourthYearStudents = () => {
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
        <h1>Brotherly Advice for B.Tech 4th-Year Students</h1>
        <p>Your final year is the most critical phase of your B.Tech journey. It’s the time to capitalize on everything you’ve learned, secure your future, and make the transition from student life to professional life.</p>
      </header>

      <main>
        <section className="section">
          <h2>1. Academics: Don’t Neglect Your Studies</h2>
          <ul>
            <li><strong>Maintain a Decent CGPA:</strong> Even if you’ve secured a job or are focusing on other goals, don’t let your grades slip. A CGPA above 7.5 or 8 can be helpful for future opportunities.</li>
            <li><strong>Finalize Your Core Knowledge:</strong> Revise key concepts in Data Structures and Algorithms, Operating Systems, DBMS, Computer Networks, and System Design. These are crucial for interviews.</li>
            <li><strong>For placements:</strong> Focus on topics like OOPs, SQL queries, and coding patterns.</li>
          </ul>
        </section>

        <section className="section">
          <h2>2. Placement Preparation: Secure Your Job</h2>
          <ul>
            <li><strong>Technical Preparation:</strong> Dedicate time to practicing coding problems daily. Focus on arrays, strings, trees, graphs, and dynamic programming.</li>
            <li><strong>Mock Interviews:</strong> Use platforms like Pramp or ask friends and seniors for help with mock interviews.</li>
            <li><strong>HR Round:</strong> Prepare answers for common HR questions like "Tell me about yourself" and "Why should we hire you?". Be honest and confident.</li>
            <li><strong>Apply to Multiple Companies:</strong> Don’t rely on just one company. Apply to as many opportunities as possible through campus placements, off-campus drives, or LinkedIn.</li>
          </ul>
        </section>

        <section className="section">
          <h2>3. Projects: Your Key to Standing Out</h2>
          <ul>
            <li><strong>Complete Your Final Year Project:</strong> Choose a project that aligns with industry trends or your interests. Make sure it’s well-documented and impactful.</li>
            <li><strong>Example Projects:</strong> A machine learning model, a cloud-based inventory management system, or a full-stack web application.</li>
            <li><strong>Highlight Your Projects in Interviews:</strong> Be ready to explain the problem you solved, the technologies used, and your contributions.</li>
          </ul>
        </section>

        <section className="section">
          <h2>4. Higher Studies: Prepare If Interested</h2>
          <ul>
            <li><strong>GATE Aspirants:</strong> Focus on Algorithms, Computer Networks, DBMS, and Operating Systems. Solve previous year papers.</li>
            <li><strong>GRE/TOEFL/IELTS for MS Abroad:</strong> Start preparing for the exams. Research universities, SOP requirements, and deadlines.</li>
            <li><strong>MBA Aspirants:</strong> Focus on quantitative aptitude, verbal ability, and logical reasoning for entrance exams like CAT.</li>
          </ul>
        </section>

        <section className="section">
          <h2>5. Networking: Open Doors for Opportunities</h2>
          <ul>
            <li><strong>LinkedIn Profile:</strong> Update your profile with a professional photo, skills, projects, and internships. Connect with alumni and professionals.</li>
            <li><strong>Attend Career Fairs:</strong> Participate in campus career fairs or external job expos to explore more opportunities.</li>
          </ul>
        </section>

        <section className="section">
          <h2>6. Internships and Freelancing</h2>
          <ul>
            <li><strong>PPO from Internships:</strong> Maintain good relationships with mentors. A pre-placement offer (PPO) can save you the stress of job hunting.</li>
            <li><strong>Freelancing:</strong> Consider freelancing to build your portfolio and earn extra income. Platforms like Upwork and Fiverr are great places to start.</li>
          </ul>
        </section>

        <section className="section">
          <h2>7. Personal Growth: Sharpen Your Soft Skills</h2>
          <ul>
            <li><strong>Work on Communication:</strong> Practice clear communication for interviews, presentations, and teamwork.</li>
            <li><strong>Time Management:</strong> Balance placement preparation, your final-year project, and personal goals. Stick to a daily schedule.</li>
            <li><strong>Leadership and Teamwork:</strong> Take initiative, lead your project, or participate in college events.</li>
          </ul>
        </section>

        <section className="section">
          <h2>8. Backup Plans: Be Prepared</h2>
          <ul>
            <li><strong>Off-Campus Placements:</strong> Apply for off-campus opportunities through platforms like LinkedIn, AngelList, Naukri.com, or Hirist.</li>
            <li><strong>Upskilling:</strong> Take short-term courses or certifications to improve your employability if needed.</li>
          </ul>
        </section>

        <section className="section">
          <h2>9. Health and Well-Being: Stay Strong</h2>
          <ul>
            <li><strong>Physical Health:</strong> Stay active, eat healthy, and ensure you’re getting enough sleep. Long hours of studying or coding can be exhausting.</li>
            <li><strong>Mental Health:</strong> Talk to friends, family, or mentors if you feel overwhelmed. Take breaks to recharge.</li>
          </ul>
        </section>

        <section className="checklist">
          <h2>Checklist for 4th-Year Students</h2>
          <ul>
            <li>✅ Secure at least one job or internship offer.</li>
            <li>✅ Complete a strong, industry-relevant final year project.</li>
            <li>✅ Practice at least 300 coding problems by the end of the year.</li>
            <li>✅ Attend mock interviews and group discussions.</li>
            <li>✅ Update your resume and LinkedIn profile.</li>
            <li>✅ Plan for higher studies (if applicable).</li>
            <li>✅ Build a professional network.</li>
            <li>✅ Stay healthy and focused.</li>
          </ul>
        </section>

        <section className="final-words">
          <h2>Final Words as Your Brother</h2>
          <p>This is the year where all your hard work pays off. Stay focused, give your best, and trust the process. Success doesn’t come overnight, but with consistency and effort, you’ll achieve your dreams. I’m always here to guide, support, and cheer you on. Let’s finish this journey strong and step into the next chapter of your life with confidence. You’ve got this, champ! 💪</p>
        </section>
      </main>
    </div>
  );
};

export default BrotherlyAdviceForFourthYearStudents;
