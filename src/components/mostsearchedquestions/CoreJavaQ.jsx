import React, { useEffect } from "react";
import "./CoreJavaQ.css"; // Import the CSS file

export const CoreJavaQ = () => {
  // Scroll to the top when the component mounts
  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  };

  return (
    <>
      <ScrollToTop />
      <div className="core-java-container"> 
        <header className="core-java-header">
          <h1>Core Java Questions</h1>
          <p>
            Frequently asked Java questions, covering key concepts, object-oriented programming,
            exception handling, collections, and multithreading.
          </p>
        </header>

        <main>
          <section>
            <h2 className="section-title blue">Core Java Concepts</h2>
            <ol>
              <li>
                <h3>What are the main features of Java?</h3>
                <p>Java is platform-independent, object-oriented, robust, secure, multithreaded, and distributed.</p>
              </li>
              <li>
                <h3>What is the difference between JDK, JRE, and JVM?</h3>
                <ul>
                  <li><b>JVM:</b> Java Virtual Machine, runs Java bytecode, enabling platform independence.</li>
                  <li><b>JRE:</b> Java Runtime Environment, provides runtime libraries and JVM for running Java applications.</li>
                  <li><b>JDK:</b> Java Development Kit, includes JRE plus development tools like compilers and debuggers.</li>
                </ul>
              </li>
              <li>
                <h3>What is the difference between == and .equals() in Java?</h3>
                <p>
                  <b>==:</b> Checks reference equality (whether two references point to the same object).<br />
                  <b>.equals():</b> Checks logical equality (whether two objects are equivalent in content).
                </p>
              </li>
              <li>
                <h3>What are wrapper classes in Java?</h3>
                <p>
                  Wrapper classes wrap primitive data types into objects, e.g., Integer (int), Double (double), Character (char).
                </p>
              </li>
              <li>
                <h3>What is the purpose of the final keyword in Java?</h3>
                <ul>
                  <li><b>Final Variables:</b> Value cannot be changed after initialization.</li>
                  <li><b>Final Methods:</b> Cannot be overridden by subclasses.</li>
                  <li><b>Final Classes:</b> Cannot be subclassed.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="section-title orange">Object-Oriented Programming (OOP)</h2>
            <ol start={6}>
              <li>
                <h3>What is polymorphism in Java?</h3>
                <p>
                  Polymorphism is the ability of an object or method to take multiple forms. Achieved through method overloading
                  (compile-time) and method overriding (runtime).
                </p>
              </li>
              <li>
                <h3>What is encapsulation in Java?</h3>
                <p>
                  Encapsulation is bundling data (variables) and methods operating on that data into a single unit (class), using
                  access modifiers to restrict direct access.
                </p>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="section-title pink">Exception Handling</h2>
            <ol start={8}>
              <li>
                <h3>What is the difference between checked and unchecked exceptions in Java?</h3>
                <p>
                  <b>Checked Exceptions:</b> Checked at compile-time (e.g., IOException).<br />
                  <b>Unchecked Exceptions:</b> Occur at runtime due to logical errors (e.g., NullPointerException).
                </p>
              </li>
              <li>
                <h3>How does Java handle exceptions?</h3>
                <p>
                  Java uses try-catch blocks. Code in the try block is executed, and if an exception occurs, it is handled in the
                  catch block.
                </p>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="section-title purple">Collections Framework</h2>
            <ol start={10}>
              <li>
                <h3>What is the difference between ArrayList and LinkedList in Java?</h3>
                <p>
                  <b>ArrayList:</b> Fast random access, slower insertions/deletions.<br />
                  <b>LinkedList:</b> Fast insertions/deletions, slower random access.
                </p>
              </li>
              <li>
                <h3>How does a HashSet work in Java?</h3>
                <p>
                  HashSet stores unique elements, backed by a hash table, and does not maintain order.
                </p>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="section-title blue-dark">Threads and Concurrency</h2>
            <ol start={12}>
              <li>
                <h3>What is multithreading in Java?</h3>
                <p>Multithreading allows concurrent execution of tasks, improving performance and efficiency.</p>
              </li>
              <li>
                <h3>What is synchronization in Java?</h3>
                <p>
                  Synchronization controls access to shared resources, preventing thread interference and data corruption.
                </p>
              </li>
            </ol>
          </section>
        </main>
      </div>
    </>
  );
};
