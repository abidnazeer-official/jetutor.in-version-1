import React, { useEffect, useState } from "react";
import "./AdvancedJavaQ.css";

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

const QuestionSection = ({ title, questions, searchTerm }) => {
  const filteredQuestions = questions.filter((question) =>
    question.query.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="question-section">
      <h2>{title}</h2>
      <ol className="question-list">
        {filteredQuestions.map((question, index) => (
          <li key={index} className="question-item">
            <h3 className="question-title">{question.query}</h3>
            <ul className="answer-list">
              {question.answers.map((answer, i) => (
                <li key={i} className="answer-item">{answer}</li>
              ))}
            </ul>
          </li>
        ))}
        {filteredQuestions.length === 0 && <p className="no-results">No matching questions found.</p>}
      </ol>
    </section>
  );
};

export const AdvancedJavaQ = () => {
  useScrollToTop();

  const [searchTerm, setSearchTerm] = useState("");

  const advancedTopics = [
    {
      query: "What are lambda expressions?",
      answers: [
        "A feature introduced in Java 8 to simplify writing anonymous inner classes.",
      ],
    },
    {
      query: "What is the difference between ArrayList and LinkedList?",
      answers: [
        "ArrayList is backed by a dynamic array, while LinkedList uses a doubly linked list structure.",
      ],
    },
    {
      query: "What are functional interfaces?",
      answers: [
        "Interfaces with a single abstract method, commonly used with lambda expressions.",
      ],
    },
    {
      query: "What is the purpose of the transient keyword?",
      answers: ["Used to exclude fields from serialization."],
    },
    {
      query: "What is the difference between a thread and a process?",
      answers: [
        "A process is an independent program in execution with its own memory space, whereas a thread is a lightweight sub-process within a process that shares the process's memory.",
      ],
    },
    {
      query: "How can we create threads in Java?",
      answers: [
        "Threads can be created by:",
        "1. Extending the Thread class and overriding the run() method.",
        "2. Implementing the Runnable interface and passing an instance to a Thread object.",
      ],
    },
    {
      query: "What is the difference between Runnable and Callable interfaces?",
      answers: [
        "Runnable does not return a result or throw checked exceptions, while Callable can return a value and throw checked exceptions.",
      ],
    },
    {
      query: "What is a thread pool? How can you create one in Java?",
      answers: [
        "A thread pool is a collection of reusable threads. It can be created using the ExecutorService framework:",
        "ExecutorService executor = Executors.newFixedThreadPool(10);",
      ],
    },
    {
      query: "What are synchronized methods and blocks in Java?",
      answers: [
        "Synchronized methods or blocks prevent multiple threads from accessing critical code simultaneously to avoid race conditions.",
      ],
    },
    {
      query: "What is the difference between wait() and sleep() in multithreading?",
      answers: [
        "wait() releases the monitor lock and pauses the thread until notify() or notifyAll() is called.",
        "sleep() pauses the thread for a specified time but retains the lock.",
      ],
    },
    {
      query: "Explain the volatile keyword in Java.",
      answers: [
        "The volatile keyword ensures visibility and prevents threads from caching the value of a variable. It guarantees that the latest value is read from the main memory.",
      ],
    },
    {
      query: "What is a deadlock, and how can it be prevented?",
      answers: [
        "Deadlock occurs when two or more threads are waiting indefinitely for resources locked by each other. It can be prevented by:",
        "1. Acquiring locks in a consistent order.",
        "2. Using try-lock mechanisms like ReentrantLock.",
      ],
    },
  ];

  const miscellaneous = [
    {
      query: "Explain the final keyword in Java.",
      answers: [
        "It can be used with classes (to prevent inheritance), methods (to prevent overriding), and variables (to make them constant).",
      ],
    },
    {
      query: "What is the difference between String, StringBuilder, and StringBuffer?",
      answers: [
        "String is immutable, StringBuilder is mutable and not thread-safe, while StringBuffer is thread-safe.",
      ],
    },
    {
      query: "What is the purpose of the hashCode() and equals() methods?",
      answers: [
        "These methods are used for comparing objects and maintaining uniqueness in hash-based collections like HashMap.",
      ],
    },
    {
      query: "What is the difference between checked and unchecked exceptions?",
      answers: [
        "Checked exceptions are checked at compile-time (e.g., IOException), while unchecked exceptions are checked at runtime (e.g., NullPointerException).",
      ],
    },
    {
      query: "What is serialization, and how is it implemented in Java?",
      answers: [
        "Serialization is the process of converting an object into a byte stream for storage or transfer. It is implemented by implementing the Serializable interface.",
      ],
    },
    {
      query: "What is the role of the transient keyword during serialization?",
      answers: [
        "The transient keyword marks fields to be excluded from serialization.",
      ],
    },
    {
      query: "What is the Java heap, and how is it managed?",
      answers: [
        "The Java heap is a memory area where objects are allocated. It is managed by the garbage collector.",
      ],
    },
    {
      query: "Explain the concept of garbage collection in Java.",
      answers: [
        "Garbage collection automatically deallocates memory occupied by objects no longer in use, preventing memory leaks.",
      ],
    },
    {
      query: "What are strong, weak, soft, and phantom references in Java?",
      answers: [
        "Strong references prevent garbage collection.",
        "Weak references are collected when no strong references exist.",
        "Soft references are collected when memory is low.",
        "Phantom references are used for cleanup actions.",
      ],
    },
    {
      query: "What are annotations, and how can you create custom annotations?",
      answers: [
        "Annotations provide metadata for classes, methods, etc. Custom annotations are created using @interface:",
        "@interface MyAnnotation {\n    String value();\n}",
      ],
    },
  ];

  return (
    <main className="advanced-java">
      <header className="header">
        <h1 className="header-title">Advanced Java Questions</h1>
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </header>
      <QuestionSection
        title="Advanced Topics"
        questions={advancedTopics}
        searchTerm={searchTerm}
      />
      <QuestionSection
        title="Miscellaneous"
        questions={miscellaneous}
        searchTerm={searchTerm}
      />
    </main>
  );
};
