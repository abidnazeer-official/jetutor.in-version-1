import React from "react";
import { useEffect } from "react";

export const MSearchedQ = () => {
    //manually control the scroll position when the component mounts.
    function Autoscrolltop_MSearchedQ(){
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    }
  return (
    <>
     <div><Autoscrolltop_MSearchedQ/></div>
      <div>Most Searched Questions</div>
      <br />
      <details>
        <br />
        <b>Why people search:</b> Java is a platform-independent, object-oriented programming
        language known for its robustness and scalability. Its "Write Once, Run
        Anywhere" philosophy is widely discussed.​
        <summary>Question-1: What is Java, and why is it so popular?</summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> These are foundational concepts in Java, frequently searched
        by beginners looking to understand the environment they are working
        with. ​
        <summary>
          Question-2: What is the difference between JDK, JRE, and JVM?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> Features like functional programming support and the Stream API have driven major interest among developers. ​
        <summary>
          Question-3: What are the key features introduced in Java 8 (e.g., lambda expressions, streams)?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> Topics like heap, stack, and method areas are commonly queried, especially in the context of garbage collection and memory management.        ​
        <summary>
          Question-4: What are the different types of memory areas allocated by JVM?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> Java’s automatic memory management using garbage collectors sparks frequent searches.        ​
        <summary>
          Question-5: How does garbage collection work in Java?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> Often searched by those preparing for interviews or optimizing their applications.        ​
        <summary>
          Question-6: What is the difference between ArrayList and LinkedList?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> This is a common question due to its importance in memory and performance optimization.        ​
        <summary>
          Question-7: What are the differences between String, StringBuilder, and StringBuffer?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> These similar-sounding keywords are frequently misunderstood, making them a hot topic.        ​
        <summary>
          Question-8: What is the purpose of the final, finally, and finalize keywords?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> Queries often focus on concepts like synchronization, deadlock, and thread-safe practices.        ​
        <summary>
          Question-9: How does multithreading work in Java?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> This question often arises among those learning about exception handling in Java.        ​
        <summary>
          Question-10: What is the difference between throw and throws?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> Popular since Java 8, functional interfaces and lambda expressions are widely searched.        ​
        <summary>
          Question-11: What is a functional interface, and how is it used?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> This is especially common among those troubleshooting performance issues.        ​
        <summary>
          Question-12: How is memory allocated in Java (stack vs. heap)?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> Topics like Singleton, Factory, and Observer patterns attract high search interest.        ​
        <summary>
          Question-13: What are common design patterns in Java?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> A classic OOP question often searched by developers at all levels.        ​
        <summary>
          Question-14: What is the difference between overloading and overriding?
        </summary>
      </details>
      <br />
      <details>
        <br />
        <b>Why people search:</b> Essential for understanding object comparison and hash-based collections like HashMap.        ​
        <summary>
          Question-15: What is the purpose of the hashCode() and equals() methods?
        </summary>
      </details>
      <br />
      <div style={{marginBottom: "250px"}}>

      </div>
    </>
  );
};
