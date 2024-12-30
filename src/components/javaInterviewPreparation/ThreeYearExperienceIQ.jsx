import React, { useState } from 'react';

const threeYearExperienceQuestions = [
  {
    category: 'Java Core - Advanced and Uncommon Questions',
    items: [
      'How do you ensure immutability in a class that has mutable fields like collections?',
      'What is the difference between lazy initialization and eager initialization in Java?',
      'Why are wrapper classes in Java immutable?',
      'Can you explain what happens internally when you use reflection to access a private field?',
      'How does the final keyword affect method overriding in Java?',
      'What happens when you call the start() method of a thread multiple times?',
      'How is a volatile variable different from a synchronized block?',
      'Can you create a custom class loader? If yes, provide an example scenario.',
      'Why is the equals() method in Object not suitable for comparing contents of objects?',
      'What is the purpose of the strictfp modifier in Java?'
    ]
  },
  {
    category: 'JVM Internals - Deep Dive',
    items: [
      'What are the different phases of the JVM class loading process?',
      'How does the JVM handle multiple class loaders in an application?',
      'What is method area memory in JVM, and how does it differ from heap memory?',
      'How does JVM determine whether an object is eligible for garbage collection?',
      'What are the differences between Serial, Parallel, CMS, and G1 garbage collectors?',
      'What is metaspace in Java, and how is it different from PermGen?',
      'How does JVM handle inline caching for dynamic method invocations?',
      'Explain JVM\'s Just-In-Time (JIT) compiler optimizations like inlining and loop unrolling.',
      'How does the JVM\'s hotspot compiler differ from traditional compilers?',
      'What are stack frames in JVM, and how are they managed during recursive calls?'
    ]
  },
  {
    category: 'Concurrency and Multithreading - Complex Scenarios',
    items: [
      'What are the challenges of implementing a lock-free data structure in Java?',
      'How do you detect and resolve thread starvation in a multithreaded application?',
      'What is the purpose of a CyclicBarrier? Provide a use case.',
      'Explain how the Thread.yield() method works and when to use it.',
      'What is the difference between live lock, deadlock, and thread starvation?',
      'How does Java implement the double-checked locking pattern?',
      'Explain the purpose and use of the AtomicStampedReference class.',
      'What are the differences between optimistic and pessimistic locking in Java?',
      'How would you implement a thread-safe singleton in Java using enums?',
      'How do you prevent race conditions in Java?'
    ]
  },
  {
    category: 'Java 8 and Beyond - Lesser-Known Features',
    items: [
      'How does the takeWhile() and dropWhile() methods work in Java 9 streams?',
      'Explain how Collectors.partitioningBy() works with examples.',
      'What is the difference between Stream.collect() and Stream.toArray()?',
      'What are Stream pipelines, and how are they optimized internally?',
      'What are private methods in interfaces introduced in Java 9? How are they useful?',
      'How does the try-with-resources statement improve exception handling in Java?',
      'How does Java\'s Optional handle null safety in a functional way?',
      'What is the purpose of the @SafeVarargs annotation?',
      'How do sealed classes introduced in Java 15 help in designing secure hierarchies?',
      'How does Java\'s VarHandle improve low-level concurrency?'
    ]
  },
  {
    category: 'Data Structures and Algorithms in Java',
    items: [
      'How would you implement a custom doubly-linked list in Java?',
      'Explain how to implement a binary search tree in Java.',
      'How would you design a thread-safe circular buffer?',
      'Write a program to merge two sorted arrays without using extra space.',
      'How does Java\'s PriorityQueue differ from a standard heap implementation?',
      'How would you implement a trie data structure in Java?',
      'Write a program to find the Kth smallest element in an unsorted array.',
      'How would you design a custom HashMap without using Java\'s built-in classes?',
      'Implement Dijkstra’s shortest path algorithm in Java.',
      'How do you handle collisions in a hash table using Java?'
    ]
  },
  {
    category: 'Java Frameworks and Libraries - Challenging Questions',
    items: [
      'How does Spring achieve dependency injection using reflection?',
      'Explain how Hibernate’s caching mechanism works.',
      'What are the differences between Spring’s @Transactional annotation and manual transaction management?',
      'How does Java’s Servlet API handle thread safety?',
      'What is the difference between @Component, @Service, and @Repository annotations in Spring?',
      'How does Spring Boot differ from traditional Spring MVC?',
      'How would you debug a Hibernate lazy initialization exception?',
      'Explain the differences between Hibernate’s save() and persist() methods.',
      'How does Spring’s AOP module enable cross-cutting concerns like logging and transactions?',
      'What are the benefits of using Spring WebFlux over traditional Spring MVC?'
    ]
  },
  {
    category: 'Networking and I/O - Advanced Questions',
    items: [
      'How does Java handle asynchronous socket communication using NIO?',
      'What is the role of selectors in Java NIO?',
      'How would you implement a custom protocol handler in Java?',
      'Explain how non-blocking I/O works in Java.',
      'What are the differences between Java\'s Path and File APIs?',
      'How would you handle file chunk uploads in Java?',
      'Explain how Java handles HTTPS connections securely.',
      'How does Java manage large file processing using streams?',
      'How would you implement a simple HTTP server in Java?',
      'What is the purpose of the WatchService API in Java NIO?'
    ]
  },
  {
    category: 'Behavioral and Practical Problem-solving Questions',
    items: [
      'Describe a time when you had to improve the performance of a Java application. What steps did you take?',
      'How do you debug and troubleshoot memory leaks in a Java application?',
      'Have you ever implemented a microservice in Java? Explain your approach.',
      'How do you optimize database interactions in Java applications?',
      'What techniques do you use to ensure thread safety in high-concurrency Java applications?',
      'Have you worked with any NoSQL databases using Java? Describe your experience.',
      'Explain a situation where Java’s garbage collection impacted performance and how you resolved it.',
      'How do you handle distributed transactions in Java applications?',
      'How do you design scalable and resilient REST APIs in Java?',
      'Describe your process for profiling and analyzing Java application performance.'
    ]
  },
  {
    category: 'Out-of-the-Box Questions',
    items: [
      'How would you implement your own custom annotations and process them using reflection?',
      'What is the difference between a memory barrier and a volatile keyword in Java?',
      'How would you implement a real-time messaging application in Java?',
      'How do you ensure the portability of Java applications across platforms?',
      'How does Java\'s modular system (introduced in Java 9) affect application design?',
      'Write a program to solve a producer-consumer problem using Lock and Condition.',
      'How do you handle dynamic class loading at runtime in Java?',
      'How does Java handle type erasure in generics?',
      'What are the limitations of Java’s serialization mechanism, and how can you overcome them?',
      'Explain how Java manages thread pools internally in the Executors framework.'
    ]
  }
];

const ThreeYearExperienceIQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  const handleToggle = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredQuestions = threeYearExperienceQuestions.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>3 Year Experience Interview Questions</h1>
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

export default ThreeYearExperienceIQ;
