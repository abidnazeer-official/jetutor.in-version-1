import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material'; // Added MUI imports

import { useEffect } from "react";

const questions = [
  {
    category: 'Core Java Basics',
    items: [
      'What are the main features of Java?',
      'Explain the concept of object-oriented programming (OOP).',
      'What is the difference between JDK, JRE, and JVM?',
      'Explain the concept of "platform independence" in Java.',
      'What are access modifiers in Java?',
      'What is the difference between == and .equals()?',
      'Explain the concept of a constructor. How is it different from a method?',
      'What is the difference between final, finally, and finalize()?',
      'How does garbage collection work in Java?',
      'What is a static keyword in Java?'
    ]
  },
  {
    category: 'Object-Oriented Programming (OOP)',
    items: [
      'What is inheritance? How does Java support it?',
      'Explain the concept of polymorphism with examples.',
      'What is encapsulation?',
      'What is abstraction, and how is it implemented in Java?',
      'What are abstract classes and interfaces? How are they different?',
      'Can a class implement multiple interfaces?'
    ]
  },
  {
    category: 'Advanced Topics',
    items: [
      'What is multithreading, and how does Java handle it?',
      'Explain the concept of synchronization in Java.',
      'What is the difference between Thread and Runnable?',
      'How does the volatile keyword work?',
      'Explain the concept of deadlock and how to avoid it.',
      'What is a lambda expression in Java?'
    ]
  },
  {
    category: 'Collections Framework',
    items: [
      'What is the Java Collections Framework?',
      'Explain the difference between ArrayList and LinkedList.',
      'What is the difference between HashMap and HashSet?',
      'Explain the concept of fail-fast and fail-safe iterators.',
      'What is the difference between Comparable and Comparator?',
      'How does a HashMap work internally?'
    ]
  },
  {
    category: 'Exception Handling',
    items: [
      'What is exception handling in Java?',
      'What is the difference between checked and unchecked exceptions?',
      'Explain the try, catch, finally blocks.',
      'Can we have multiple catch blocks in Java?'
    ]
  },
  {
    category: 'Java 8 and Beyond',
    items: [
      'What are the new features introduced in Java 8?',
      'What is the difference between Stream and Collection?',
      'What are functional interfaces?',
      'What is the purpose of the Optional class?',
      'Explain the forEach method in Java.'
    ]
  },
  {
    category: 'Design Patterns and Best Practices',
    items: [
      'What are the most commonly used design patterns in Java?',
      'Explain the Singleton pattern.',
      'What is Dependency Injection?',
      'How do you handle memory leaks in Java?'
    ]
  },
  {
    category: 'JVM and Performance',
    items: [
      'What is the Java Memory Model?',
      'Explain the difference between stack and heap memory.',
      'How do you optimize performance in Java applications?',
      'What are the different types of class loaders in Java?'
    ]
  },
  {
    category: 'Real-world Scenarios',
    items: [
      'How would you implement a thread-safe singleton?',
      'How would you reverse a linked list in Java?',
      'How do you sort an array of objects based on multiple fields?',
      'Write a program to find the largest/smallest number in an array.',
      'How would you handle large amounts of data efficiently in Java?'
    ]
  },
  {
    category: 'Behavioral Questions',
    items: [
      'Have you ever worked on a project involving Java? Explain your role.',
      'How do you debug and troubleshoot Java applications?',
      'Can you describe a challenging bug you encountered and how you resolved it?'
    ]
  }
];

const FreshersIQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const navigate = useNavigate();

  const handleToggle = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredQuestions = questions.map((section) => ({
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
      <h1>Java Freshers Interview Questions</h1>
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

export default FreshersIQ;
