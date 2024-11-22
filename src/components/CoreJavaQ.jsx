import React from "react";
import { useEffect } from "react";



export const CoreJavaQ = () => {
    //manually control the scroll position when the component mounts.
    function Autoscrolltop_corejavaQ(){
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    }
  return (
    <>
        <div><Autoscrolltop_corejavaQ/></div>
      <div>Core Java Questions</div>
      <h1>Core Java Concepts</h1>
      <div style={{marginBottom: "200px"}}>
        <ol>
          {/* Quiestion-1 */}
          <li>
            <h3>What are the main features of Java?</h3>
            <ul>
              Platform independence, Object-Oriented, Robust, Secure,
              Multi-threaded, and Distributed.
            </ul>
          </li>
          {/* Quiestion-2 */}
          <li>
            <h3>Explain the difference between JDK, JRE, and JVM?</h3>
            <ul>
              JDK is the development kit, JRE provides runtime, and JVM is the
              engine running Java bytecode.
            </ul>
          </li>
          {/* Quiestion-3 */}
          <li>
            <h3>What is the difference between == and .equals() in Java?</h3>
            <ul>
              == checks for reference equality, while .equals() checks for
              content equality.
            </ul>
          </li>
          {/* Quiestion-4 */}
          <li>
            <h3>What are wrapper classes in Java?</h3>
            <ul>
              Classes like Integer, Double, etc., wrap primitive data types into
              objects.
            </ul>
          </li>
        </ol>
        <h1>Object-Oriented Programming</h1>
        <ol start={5}>
          {/* Quiestion-5 */}
          <li>
            <h3>
              What is the difference between an abstract class and an interface?
            </h3>
            <ul>
              Abstract classes can have both abstract and non-abstract methods,
              while interfaces only define abstract methods (with exceptions
              after Java 8, like default methods).
            </ul>
          </li>
          {/* Quiestion-6 */}
          <li>
            <h3>What is polymorphism in Java?</h3>
            <ul>
              The ability of an object to take multiple forms, demonstrated
              through method overloading (compile-time) and overriding
              (runtime).
            </ul>
          </li>
          {/* Quiestion-7 */}
          <li>
            <h3>
            Explain the concept of inheritance.
            </h3>
            <ul>
            It allows one class to acquire the properties and behaviors of another using the extends keyword.
            </ul>
          </li>
        </ol>
        {/* part-3 */}
        <h1>Memory and Performance</h1>
        <ol start={8}>
            {/* Quiestion-8 */}
          <li>
            <h3>
            What is garbage collection in Java?
            </h3>
            <ul>
            The process of reclaiming memory from objects that are no longer in use.
            </ul>
          </li>   
           {/* Quiestion-9 */}
           <li>
            <h3>
            What are the differences between stack and heap memory?
            </h3>
            <ul>
            Stack memory is used for method execution, while heap memory stores objects and JRE classes.
            </ul>
          </li>   
           {/* Quiestion-10 */}
           <li>
            <h3>
            What are strong, weak, soft, and phantom references?
            </h3>
            <ul>
            Different types of references in Java used for memory management and garbage collection.
            </ul>
          </li>   
        </ol>
        <h1>Multithreading and Concurrency</h1>
        <ol start={11}>
             {/* Quiestion-11 */}
           <li>
            <h3>
            What are strong, weak, soft, and phantom references?
            </h3>
            <ul>
            Different types of references in Java used for memory management and garbage collection.
            </ul>
          </li>   
           {/* Quiestion-12 */}
           <li>
            <h3>
            What is synchronization in Java?
            </h3>
            <ul>
            A mechanism to control access to shared resources in a multithreaded environment.
            </ul>
          </li>   
        </ol>
      </div>
    </>
  );
};
