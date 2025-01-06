import React from 'react';
import './BrotherlyAdviceForFirstYearStudents.css';
import { useEffect } from 'react';

const BrotherlyAdviceForFirstYearStudents = () => {
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
      <header className="header">
        <h1>Brotherly Advice for B.Tech 1st-Year Students</h1>
        <p>Your foundation for success starts here!</p>
      </header>

      {/* Content Sections */}
      <main>
        <section className="section">
          <h2>1. Academics: Build Your Base</h2>
          <ul>
            <li><strong>Master Programming Basics:</strong>
              <ul>
                <li>Start with C, Python, or Java. Practice daily on platforms like HackerRank or GeeksforGeeks.</li>
                <li>Example Goals: Write programs to calculate factorials, reverse numbers, or print patterns.</li>
                <li>Learn to debug your code.</li>
              </ul>
            </li>
            <li><strong>Mathematics is Key:</strong> Practice Calculus, Linear Algebra, and Discrete Mathematics.</li>
            <li><strong>Understand Core Subjects:</strong> Focus on Physics, Basic Electrical Engineering, and Mechanics.</li>
            <li><strong>Focus on Problem-Solving:</strong> Break down problems into smaller, manageable parts.</li>
          </ul>
        </section>

        <section className="section">
          <h2>2. Skills: Start Early, Stay Ahead</h2>
          <ul>
            <li><strong>Time Management:</strong> Create a daily schedule balancing study, classes, and relaxation.</li>
            <li><strong>Soft Skills:</strong> Practice communication via presentations or group discussions.</li>
            <li><strong>Tools to Learn:</strong> GitHub, basic Linux commands, and Google Docs.</li>
            <li><strong>Online Learning:</strong> Platforms like Coursera and edX are great for beginners.</li>
          </ul>
        </section>

        <section className="section">
          <h2>3. Explore: Find What You Love</h2>
          <ul>
            <li>Experiment with fields like Web Development, App Development, Data Science, or Robotics.</li>
            <li>Build Small Projects: Start with a simple calculator app or a portfolio website.</li>
          </ul>
        </section>

        <section className="section">
          <h2>4. Social Life: Choose Wisely</h2>
          <ul>
            <li>Make Good Friends: Surround yourself with motivated, hardworking people.</li>
            <li>Participate in Clubs: Join coding clubs, robotics groups, or cultural societies.</li>
            <li>Avoid Toxic Distractions: Stay focused on your goals.</li>
          </ul>
        </section>

        <section className="section">
          <h2>5. Personal Growth: Balance is Key</h2>
          <ul>
            <li><strong>Health:</strong> Exercise regularly (even 15-20 minutes a day), eat healthy, and sleep for 7-8 hours.</li>
            <li><strong>Mental Strength:</strong> Practice mindfulness and handle failures positively.</li>
          </ul>
        </section>

        <section className="section">
          <h2>6. Make the Most of Opportunities</h2>
          <ul>
            <li>Participate in hackathons and competitions.</li>
            <li>Complete 1-2 certifications in your first year (e.g., Python, Web Development, or SQL).</li>
            <li>Network with seniors and professors for guidance.</li>
          </ul>
        </section>

        <section className="section">
          <h2>7. Discipline: The Key to Success</h2>
          <ul>
            <li><strong>Daily Routine:</strong> Revise notes in the morning, practice coding in the evening, and plan your tasks at night.</li>
            <li><strong>Consistency Beats Intensity:</strong> Study or code for 1-2 hours daily instead of cramming.</li>
          </ul>
        </section>

        <section className="section">
          <h2>8. Enjoy the Journey</h2>
          <ul>
            <li>Celebrate Small Wins: Appreciate your achievements to stay motivated.</li>
            <li>Take Breaks: Relax with movies, games, or friends.</li>
            <li>Stay Curious: Keep asking questions and seeking answers.</li>
          </ul>
        </section>

        <section className="section checklist">
          <h2>Checklist for 1st-Year Students</h2>
          <ul>
            <li>✅ Master at least one programming language (C, Python, or Java).</li>
            <li>✅ Solve at least 50 coding problems by the end of the year.</li>
            <li>✅ Build 1-2 small projects.</li>
            <li>✅ Complete 1 online certification.</li>
            <li>✅ Participate in at least 2 extracurricular activities.</li>
            <li>✅ Develop a habit of daily study and coding practice.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Final Words: Work hard, stay humble, and never give up on your dreams. You’ve got this! 💪</p>
      </footer>
    </div>
  );
};

export default BrotherlyAdviceForFirstYearStudents;
