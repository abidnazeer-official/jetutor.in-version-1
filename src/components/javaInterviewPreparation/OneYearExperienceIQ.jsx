import React, { useState } from 'react';
import { useEffect } from "react";

const oneYearExperienceQuestions = [
  {
    category: 'Core Java - Advanced',
    items: [
      'What are Java annotations? How are they used?',
      'What is autoboxing and unboxing in Java?',
      'Explain the difference between String, StringBuilder, and StringBuffer.',
      'What is the transient keyword in Java?',
      'What is the purpose of the assert keyword?',
      'What is the difference between shallow copy and deep copy?',
      'What are the differences between Java’s == operator and .equals() for reference types?',
      'How does Java handle immutability with the String class?',
      'What are the rules for overriding and overloading methods in Java?',
      'Can you override a private or static method in Java?'
    ]
  },
  {
    category: 'Collections Framework - Advanced',
    items: [
      'What are the differences between HashMap, TreeMap, and LinkedHashMap?',
      'How does a TreeSet ensure order?',
      'How would you implement a custom hash function for a key in HashMap?',
      'Explain the differences between ConcurrentHashMap and Collections.synchronizedMap().',
      'What is the purpose of the PriorityQueue class in Java?',
      'How does CopyOnWriteArrayList work?',
      'What is the difference between HashTable and ConcurrentHashMap?'
    ]
  },
  {
    category: 'Concurrency and Multithreading - Advanced',
    items: [
      'What are Callable and Future in Java?',
      'How is the Executor framework different from creating threads manually?',
      'What is a ThreadLocal variable?',
      'What are ReentrantLock and ReadWriteLock?',
      'How does the synchronized block differ from the Lock interface?',
      'Explain how ForkJoinPool works.',
      'What is the difference between wait(), notify(), and notifyAll()?',
      'What is a thread-safe class? Give examples from Java\'s standard library.'
    ]
  },
  {
    category: 'JVM Internals',
    items: [
      'What is the role of the class loader in Java?',
      'What are the different memory areas allocated by JVM?',
      'Explain the concept of "Just-In-Time" (JIT) compilation.',
      'What is the difference between stack memory and heap memory?',
      'What is a memory leak in Java, and how can it be avoided?',
      'What is the purpose of the PermGen and Metaspace areas in JVM?',
      'How does the JVM perform garbage collection?',
      'What are the types of garbage collectors in Java?',
      'What is the role of the JVM’s HotSpot compiler?'
    ]
  },
  {
    category: 'Java 8 and Beyond - Advanced',
    items: [
      'What is the difference between map() and flatMap() in streams?',
      'How are Streams and Parallel Streams different?',
      'What is the difference between Predicate, Function, and Consumer functional interfaces?',
      'How does the Collectors utility work in streams?',
      'What is the significance of the @FunctionalInterface annotation?',
      'How does the default method in interfaces improve backward compatibility?',
      'How are method references used in Java 8?'
    ]
  },
  {
    category: 'Networking and I/O',
    items: [
      'How does Java handle socket programming?',
      'What is the difference between InputStream and Reader in Java?',
      'How does BufferedReader improve performance?',
      'What is the purpose of Serializable in Java?',
      'How do you implement file locking in Java?',
      'Explain the role of NIO (New I/O) and NIO.2 in Java.',
      'What is the difference between synchronous and asynchronous I/O in Java?'
    ]
  },
  {
    category: 'Java Design Patterns',
    items: [
      'Explain the Factory Design Pattern with an example.',
      'How does the Builder pattern differ from a Factory?',
      'What is the Observer pattern, and where is it used in Java?',
      'Explain the Decorator pattern and provide an example.',
      'What is the Strategy Design Pattern?',
      'How would you implement the DAO (Data Access Object) pattern in Java?'
    ]
  },
  {
    category: 'Real-world Scenarios and Problem-solving',
    items: [
      'How would you implement a thread-safe LRU (Least Recently Used) cache in Java?',
      'Write code to detect if a linked list has a cycle.',
      'How would you implement a Producer-Consumer problem using blocking queues?',
      'How do you design a system to manage concurrency in a bank transaction system?',
      'Write a program to count the frequency of words in a large text file using Java Streams.'
    ]
  },
  {
    category: 'Behavioral and Application-oriented',
    items: [
      'Have you worked with Java frameworks like Spring or Hibernate? Explain your experience.',
      'How do you handle performance bottlenecks in Java applications?',
      'Describe a scenario where you had to refactor poorly written Java code.',
      'What is your approach to debugging multithreaded Java applications?'
    ]
  }
];

const OneYearExperienceIQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  const handleToggle = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredQuestions = oneYearExperienceQuestions.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

 useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>1 Year Experience Interview Questions</h1>
      <input
        type="text"
        placeholder="Search questions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
      />
      {filteredQuestions.map((section) => (
        <div key={section.category} style={{ marginBottom: '20px' }}>
          <h2
            onClick={() => handleToggle(section.category)}
            style={{ cursor: 'pointer', color: '#007BFF' }}
          >
            {section.category}
          </h2>
          {expandedCategories[section.category] && (
            <ul>
              {section.items.map((item, index) => (
                <li key={index} style={{ margin: '5px 0' }}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default OneYearExperienceIQ;
