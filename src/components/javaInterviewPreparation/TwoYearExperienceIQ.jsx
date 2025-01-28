import React, { useState } from 'react';
import { useEffect } from "react";

const twoYearExperienceQuestions = [
  {
    category: 'Core Java Concepts - Deep Dive',
    items: [
      'How does Java achieve backward compatibility across different versions?',
      'Explain how enums work in Java and how they are different from constants.',
      'Can you define your own annotations? If yes, provide an example.',
      'What are the differences between deep cloning and shallow cloning in Java?',
      'How do varargs work in Java? What are their limitations?',
      'Can you create an immutable class in Java? Explain with an example.',
      'Why is Java’s System.arraycopy() faster than manually copying an array?',
      'How does the strictfp keyword affect floating-point calculations?',
      'What are daemon threads in Java, and when would you use them?',
      'What are marker interfaces in Java? Can you create your own?'
    ]
  },
  {
    category: 'JVM Internals - Unique Questions',
    items: [
      'What is the difference between a soft reference, a weak reference, and a phantom reference in Java?',
      'How do you analyze and troubleshoot OutOfMemoryError in Java applications?',
      'Explain the concept of "escape analysis" in JVM optimization.',
      'What is the role of the Java Native Interface (JNI), and when would you use it?',
      'How does the JVM inline methods, and what are the benefits?',
      'What is the role of the "eden space" in the JVM heap?',
      'Explain the difference between class-level and instance-level locks in Java.',
      'What are direct memory access (DMA) optimizations in JVM?',
      'What is the role of the rt.jar file in Java, and why was it removed in newer versions?',
      'How does the JVM handle method overloading and overriding at runtime?'
    ]
  },
  {
    category: 'Concurrency and Multithreading - Advanced Questions',
    items: [
      'How does the Phaser class work in Java, and how is it different from CyclicBarrier?',
      'What is the difference between StampedLock and ReentrantLock?',
      'Explain the purpose of the ForkJoinTask class in the Fork/Join framework.',
      'What are atomic variables, and how do they work internally in Java?',
      'How does the thread pool size impact the performance of an application?',
      'What is the difference between a CountDownLatch and a Semaphore?',
      'How does the CompletableFuture handle asynchronous programming in Java?',
      'Can deadlocks occur if you use only synchronized blocks? Why or why not?',
      'Explain how thread starvation differs from deadlock.',
      'How does the java.util.concurrent package handle thread safety?'
    ]
  },
  {
    category: 'Collections Framework - Unique Challenges',
    items: [
      'How does the IdentityHashMap work, and how is it different from a regular HashMap?',
      'Why is EnumSet considered more efficient than other Set implementations?',
      'How does TreeMap handle sorting with custom comparators?',
      'Explain why HashSet uses a HashMap internally.',
      'How would you design a custom collection class that supports both fail-fast and fail-safe iterators?',
      'Why doesn\'t ArrayList implement the Deque interface?',
      'How is the NavigableMap interface useful in Java?',
      'Explain the difference between IdentityHashMap and WeakHashMap.',
      'Why doesn\'t Java\'s ConcurrentHashMap allow null keys or values?',
      'How does the Spliterator interface differ from a regular iterator?'
    ]
  },
  {
    category: 'Java 8 and Beyond - Unique Topics',
    items: [
      'How does Stream.reduce() work? What are the possible pitfalls?',
      'What is the significance of Collectors.groupingBy()? How does it work under the hood?',
      'How would you write a custom collector in Java streams?',
      'What is the role of Parallel Streams, and when should you avoid using them?',
      'How do method references improve readability in Java?',
      'What is the difference between Optional.ifPresent() and Optional.orElse()?',
      'How does default and static methods in interfaces change multiple inheritance rules?',
      'Explain the role of the @Repeatable annotation in Java.',
      'How does Var in Java 10 impact type inference?',
      'What are the enhancements in the garbage collection mechanism in Java 11 and beyond?'
    ]
  },
  {
    category: 'Networking and Security',
    items: [
      'What is the difference between SSL and TLS in Java applications?',
      'How does the HttpClient API introduced in Java 11 work?',
      'Explain how you would handle large file uploads/downloads in Java.',
      'How do you implement secure authentication in Java applications?',
      'How does Java handle digital certificates with KeyStore?',
      'What is the role of the SecretKey interface in Java cryptography?',
      'How does Java handle WebSocket connections?',
      'What are the key differences between URLConnection and HttpURLConnection?',
      'How does Java manage cookies in HTTP connections?',
      'How would you use Java\'s NIO for non-blocking I/O operations in a chat application?'
    ]
  },
  {
    category: 'Real-World Problem-Solving',
    items: [
      'How would you design a multi-threaded web crawler in Java?',
      'Write a program to detect palindrome substrings in a given string using Java.',
      'How would you design a rate limiter using Java\'s concurrency utilities?',
      'Implement a custom thread pool from scratch in Java.',
      'Write a program to find duplicate numbers in an array without using extra space.',
      'How would you design a memory-efficient caching solution in Java?',
      'Write a program to generate Fibonacci numbers using Java streams.',
      'Implement a "retry mechanism" for failed tasks in Java.',
      'How would you analyze and optimize a memory-intensive Java application?',
      'How would you design a Java application to manage distributed transactions?'
    ]
  },
  {
    category: 'Behavioral and Advanced Application Scenarios',
    items: [
      'Describe a situation where Java’s garbage collection caused performance issues in your application. How did you solve it?',
      'Explain how you would debug a concurrency issue in a live Java application.',
      'What strategies do you use to improve startup time for Java applications?',
      'Have you ever refactored an existing Java application for better maintainability? Describe the process.',
      'How would you optimize a Java application handling millions of records per second?'
    ]
  }
];

const TwoYearExperienceIQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  const handleToggle = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredQuestions = twoYearExperienceQuestions.map((section) => ({
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
      <h1>2 Year Experience Interview Questions</h1>
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

export default TwoYearExperienceIQ;
