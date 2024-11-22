import React, { useEffect } from "react";

export const AdvancedJavaQ = () => {

    //Manually controlling the focus of the page
    function Autoscrolltop_AdvancedJavaQ(){
        useEffect(() => {
            window.scrollTo(0, 0);
        })
    }

  return (
    <>
        <Autoscrolltop_AdvancedJavaQ/>
      <div>Advanced java Questions</div>
      <div style={{marginBottom: "250px"}}>
        {/* part-1 */}
        <h1>Advanced Topics</h1>
        <ol>
          {/* Question-1 */}
          <li>
            <h3>What are lambda expressions?</h3>
          </li>
          <ul>
            <li>
              A feature introduced in Java 8 to simplify writing anonymous inner
              classes.
            </li>
          </ul>
          {/* Question-2 */}
          <li>
            <h3>What is the difference between ArrayList and LinkedList?</h3>
          </li>
          <ul>
            <li>
              ArrayList is backed by a dynamic array, while LinkedList uses a
              doubly linked list structure.
            </li>
          </ul>
          {/* Question-3 */}
          <li>
            <h3>What are functional interfaces?</h3>
          </li>
          <ul>
            <li>
              Interfaces with a single abstract method, commonly used with
              lambda expressions.
            </li>
          </ul>
          {/* Question-4 */}
          <li>
            <h3>What is the purpose of the transient keyword?</h3>
          </li>
          <ul>
            <li>Used to exclude fields from serialization.</li>
          </ul>

          <h1>Miscellaneous</h1>
          {/* Question-5 */}
          <li>
            <h3>Explain the final keyword in Java.</h3>
          </li>
          <ul>
            <li>
              It can be used with classes (to prevent inheritance), methods (to
              prevent overriding), and variables (to make them constant).
            </li>
          </ul>
          {/* Question-6 */}
          <li>
            <h3>
              What is the difference between String, StringBuilder, and
              StringBuffer?
            </h3>
          </li>
          <ul>
            <li>
              String is immutable, StringBuilder is mutable and not thread-safe,
              while StringBuffer is thread-safe.
            </li>
          </ul>
          {/* Question-7 */}
          <li>
            <h3>What is the purpose of the hashCode() and equals() methods?</h3>
          </li>
          <ul>
            <li>
              These methods are used for comparing objects and maintaining
              uniqueness in hash-based collections like HashMap.
            </li>
          </ul>
          {/* Question-8 */}
          <li>
            <h3>
              What is the difference between checked and unchecked exceptions?
            </h3>
          </li>
          <ul>
            <li>
              Checked exceptions are checked at compile-time (e.g.,
              IOException), while unchecked exceptions are checked at runtime
              (e.g., NullPointerException).
            </li>
          </ul>
        </ol>
      </div>
    </>
  );
};
