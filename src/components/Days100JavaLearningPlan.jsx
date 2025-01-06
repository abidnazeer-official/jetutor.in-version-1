import React from "react";
import "./Days100JavaLearningPlan.css"; // Import the CSS file for styling

export const Days100JavaLearningPlan = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>📅 90-Day Java Learning Plan</h1>
        <p>
          This plan is divided into daily chunks, covering key concepts, practice exercises, and projects to build confidence. Perfect for those who want a structured way to gain both core and advanced Java programming skills.
        </p>
      </div>

      {/* Phase 1: Core Java Basics */}
      <div className="phase">
        <h2>Phase 1: Core Java Basics (Day 1-30)</h2>
        <p className="focus"><b>Focus:</b> Learn Java syntax, data structures, and basic problem-solving.</p>
      </div>

      {/* Week 1 */}
      <div className="week">
        <h3>Week 1 (Days 1-7): Java Setup and Basics</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 1:</b></td>
                <td>Set up Java Development Kit (JDK) and IntelliJ/Eclipse/VSCode</td>
              </tr>
              <tr>
                <td></td>
                <td>Learn how to compile & run a "Hello World" program.</td>
              </tr>
              <tr>
                <td></td>
                <td>Concepts: Basic Syntax, Variables, Data Types</td>
              </tr>
              <tr>
                <td><b>Day 2:</b></td>
                <td>Input/Output in Java</td>
              </tr>
              <tr>
                <td><b>Day 3:</b></td>
                <td>Control Statements (if-else, switch-case)</td>
              </tr>
              <tr>
                <td><b>Day 4:</b></td>
                <td>Loops (for, while, do-while)</td>
              </tr>
              <tr>
                <td><b>Day 5:</b></td>
                <td>Introduction to Arrays (1D, 2D arrays)</td>
              </tr>
              <tr>
                <td><b>Day 6:</b></td>
                <td>String Handling (String class, StringBuilder, StringBuffer)</td>
              </tr>
              <tr>
                <td><b>Day 7:</b></td>
                <td>Functions & Methods (static, non-static)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Week 2 */}
      <div className="week">
        <h3>Week 2 (Days 8-14): Object-Oriented Programming (OOP)</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 8:</b></td>
                <td>What is OOP? Classes & Objects</td>
              </tr>
              <tr>
                <td><b>Day 9:</b></td>
                <td>Constructors & Method Overloading</td>
              </tr>
              <tr>
                <td><b>Day 10:</b></td>
                <td>Encapsulation, Getters, and Setters</td>
              </tr>
              <tr>
                <td><b>Day 11:</b></td>
                <td>Inheritance & Super Keyword</td>
              </tr>
              <tr>
                <td><b>Day 12:</b></td>
                <td>Polymorphism (Method Overriding)</td>
              </tr>
              <tr>
                <td><b>Day 13:</b></td>
                <td>Abstraction (Abstract Classes & Interfaces)</td>
              </tr>
              <tr>
                <td><b>Day 14:</b></td>
                <td>OOP Practice: Create a Student Management System (CLI-based)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Week 3 */}
      <div className="week">
        <h3>Week 3 (Days 15-21): Collections Framework</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 15:</b></td>
                <td>Introduction to Lists (ArrayList, LinkedList)</td>
              </tr>
              <tr>
                <td><b>Day 16:</b></td>
                <td>Set Interface (HashSet, TreeSet)</td>
              </tr>
              <tr>
                <td><b>Day 17:</b></td>
                <td>Maps (HashMap, TreeMap)</td>
              </tr>
              <tr>
                <td><b>Day 18:</b></td>
                <td>Generics and Iterators</td>
              </tr>
              <tr>
                <td><b>Day 19:</b></td>
                <td>Sorting Collections (Comparable, Comparator)</td>
              </tr>
              <tr>
                <td><b>Day 20:</b></td>
                <td>Streams API (Filter, Map, Collect)</td>
              </tr>
              <tr>
                <td><b>Day 21:</b></td>
                <td>Mini Project: Book Library Management</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Week 4 */}
      <div className="week">
        <h3>Week 4 (Days 22-30): Exception Handling and File I/O</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 22:</b></td>
                <td>Introduction to Exceptions (try-catch-finally)</td>
              </tr>
              <tr>
                <td><b>Day 23:</b></td>
                <td>Custom Exceptions</td>
              </tr>
              <tr>
                <td><b>Day 24:</b></td>
                <td>File Handling (Reading & Writing Files)</td>
              </tr>
              <tr>
                <td><b>Day 25:</b></td>
                <td>Serialization & Deserialization</td>
              </tr>
              <tr>
                <td><b>Day 26:</b></td>
                <td>Java Date/Time API</td>
              </tr>
              <tr>
                <td><b>Day 27-28:</b></td>
                <td>JDBC Basics (Connecting to MySQL/PostgreSQL)</td>
              </tr>
              <tr>
                <td><b>Day 29:</b></td>
                <td>Mini Project: Inventory Management System using Files</td>
              </tr>
              <tr>
                <td><b>Day 30:</b></td>
                <td>Quiz + Revision</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Phase 2: Intermediate Java */}
      <div className="phase">
        <h2>Phase 2: Intermediate Java (Day 31-60)</h2>
        <p className="focus"><b>Focus:</b> Multi-threading, Streams, Networking, and Design Patterns.</p>
      </div>

      {/* Week 5 */}
      <div className="week">
        <h3>Week 5 (Days 31-37): Threads and Concurrency</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 31:</b></td>
                <td>Introduction to Multithreading</td>
              </tr>
              <tr>
                <td><b>Day 32:</b></td>
                <td>Thread Lifecycle and States</td>
              </tr>
              <tr>
                <td><b>Day 33:</b></td>
                <td>Synchronization in Java</td>
              </tr>
              <tr>
                <td><b>Day 34:</b></td>
                <td>Executors & Thread Pools</td>
              </tr>
              <tr>
                <td><b>Day 35:</b></td>
                <td>Atomic Classes & Locks</td>
              </tr>
              <tr>
                <td><b>Day 36:</b></td>
                <td>Practice Problem: Producer-Consumer Problem</td>
              </tr>
              <tr>
                <td><b>Day 37:</b></td>
                <td>Mini Project: Threaded Chat Application (CLI)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Week 6 */}
      <div className="week">
        <h3>Week 6 (Days 38-44): Networking and Web Services</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 38:</b></td>
                <td>Networking Basics (Sockets, HTTP)</td>
              </tr>
              <tr>
                <td><b>Day 39:</b></td>
                <td>URL and InetAddress Classes</td>
              </tr>
              <tr>
                <td><b>Day 40:</b></td>
                <td>Java HTTP Client API</td>
              </tr>
              <tr>
                <td><b>Day 41:</b></td>
                <td>REST API Basics</td>
              </tr>
              <tr>
                <td><b>Day 42:</b></td>
                <td>Consume Public APIs using Java</td>
              </tr>
              <tr>
                <td><b>Day 43-44:</b></td>
                <td>Mini Project: Weather App using a Public API</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Week 7 */}
      <div className="week">
        <h3>Week 7 (Days 45-51): Functional Programming in Java</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 45:</b></td>
                <td>Introduction to Functional Interfaces (Predicate, Supplier)</td>
              </tr>
              <tr>
                <td><b>Day 46:</b></td>
                <td>Lambda Expressions</td>
              </tr>
              <tr>
                <td><b>Day 47:</b></td>
                <td>Streams API (map, filter, reduce)</td>
              </tr>
              <tr>
                <td><b>Day 48:</b></td>
                <td>Optional Class</td>
              </tr>
              <tr>
                <td><b>Day 49:</b></td>
                <td>Functional Programming Practice Problems</td>
              </tr>
              <tr>
                <td><b>Day 50:</b></td>
                <td>Mini Project: Employee Management System using Functional Programming</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Week 8 */}
      <div className="week">
        <h3>Week 8 (Days 52-58): Design Patterns</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 52:</b></td>
                <td>Introduction to Design Patterns</td>
              </tr>
              <tr>
                <td><b>Day 53:</b></td>
                <td>Singleton Pattern</td>
              </tr>
              <tr>
                <td><b>Day 54:</b></td>
                <td>Factory Pattern</td>
              </tr>
              <tr>
                <td><b>Day 55:</b></td>
                <td>Observer Pattern</td>
              </tr>
              <tr>
                <td><b>Day 56:</b></td>
                <td>Decorator Pattern</td>
              </tr>
              <tr>
                <td><b>Day 57:</b></td>
                <td>Strategy Pattern</td>
              </tr>
              <tr>
                <td><b>Day 58:</b></td>
                <td>Mini Project: Design Pattern-based Shopping Cart System</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Week 9 */}
      <div className="week">
        <h3>Week 9 (Days 59-65): Spring Boot Introduction</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 59:</b></td>
                <td>Introduction to Spring Boot</td>
              </tr>
              <tr>
                <td><b>Day 60:</b></td>
                <td>Setting Up Spring Boot Application</td>
              </tr>
              <tr>
                <td><b>Day 61:</b></td>
                <td>Spring Boot Annotations</td>
              </tr>
              <tr>
                <td><b>Day 62:</b></td>
                <td>Spring Boot RESTful Services</td>
              </tr>
              <tr>
                <td><b>Day 63:</b></td>
                <td>Connecting Spring Boot with Databases</td>
              </tr>
              <tr>
                <td><b>Day 64:</b></td>
                <td>Spring Boot Security Basics</td>
              </tr>
              <tr>
                <td><b>Day 65:</b></td>
                <td>Mini Project: Task Management Application</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Week 10 */}
      <div className="week">
        <h3>Week 10 (Days 66-72): Hibernate ORM</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 66:</b></td>
                <td>Introduction to Hibernate ORM</td>
              </tr>
              <tr>
                <td><b>Day 67:</b></td>
                <td>Setting Up Hibernate with Spring</td>
              </tr>
              <tr>
                <td><b>Day 68:</b></td>
                <td>Mapping Entities to Tables</td>
              </tr>
              <tr>
                <td><b>Day 69:</b></td>
                <td>Hibernate CRUD Operations</td>
              </tr>
              <tr>
                <td><b>Day 70:</b></td>
                <td>Many-to-One, One-to-Many Relationships</td>
              </tr>
              <tr>
                <td><b>Day 71:</b></td>
                <td>Hibernate Caching</td>
              </tr>
              <tr>
                <td><b>Day 72:</b></td>
                <td>Mini Project: User Registration System</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Week 11 */}
      <div className="week">
        <h3>Week 11 (Days 73-79): Microservices Architecture</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 73:</b></td>
                <td>Introduction to Microservices</td>
              </tr>
              <tr>
                <td><b>Day 74:</b></td>
                <td>Setting up Spring Cloud</td>
              </tr>
              <tr>
                <td><b>Day 75:</b></td>
                <td>RESTful Microservices with Spring Boot</td>
              </tr>
              <tr>
                <td><b>Day 76:</b></td>
                <td>Service Discovery with Eureka</td>
              </tr>
              <tr>
                <td><b>Day 77:</b></td>
                <td>Spring Cloud Config Server</td>
              </tr>
              <tr>
                <td><b>Day 78:</b></td>
                <td>Microservices Communication with REST and Feign</td>
              </tr>
              <tr>
                <td><b>Day 79:</b></td>
                <td>Mini Project: Online Shopping Cart System</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Week 12 */}
      <div className="week">
        <h3>Week 12 (Days 80-90): Advanced Topics and Final Project</h3>
        <div className="table-container">
          <table className="learning-table">
            <tbody>
              <tr>
                <td><b>Day 80:</b></td>
                <td>Introduction to Java 17+ Features</td>
              </tr>
              <tr>
                <td><b>Day 81:</b></td>
                <td>Reactive Programming with Spring WebFlux</td>
              </tr>
              <tr>
                <td><b>Day 82:</b></td>
                <td>Spring Boot Testing</td>
              </tr>
              <tr>
                <td><b>Day 83:</b></td>
                <td>Unit Testing with JUnit</td>
              </tr>
              <tr>
                <td><b>Day 84:</b></td>
                <td>Integration Testing</td>
              </tr>
              <tr>
                <td><b>Day 85:</b></td>
                <td>Dockerizing Spring Boot Applications</td>
              </tr>
              <tr>
                <td><b>Day 86-88:</b></td>
                <td>Final Project: E-commerce Web Application (Microservices-based)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
