import React, { useEffect } from "react";

export const MSearchedQ = () => {
    // Manually control the scroll position when the component mounts.
    function Autoscrolltop_MSearchedQ() {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    }

    return (
        <>
            <div><Autoscrolltop_MSearchedQ /></div>
            <div style={styles.header}>Most Searched Questions in Java</div>
            <br />
            <div style={styles.container}>
                {/* Java Memory Management */}
                <details style={styles.details}>
                    <b style={styles.bold}>What is the purpose of the garbage collector?</b>
                    The garbage collector automatically reclaims memory from objects that are no longer reachable by the application.
                    <summary style={styles.summary}>What is the purpose of the garbage collector?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What are the types of garbage collectors in Java?</b>
                    Java provides different garbage collectors like Serial, Parallel, CMS (Concurrent Mark-Sweep), and G1 (Garbage-First).
                    <summary style={styles.summary}>What are the types of garbage collectors in Java?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What is the heap in Java?</b>
                    The heap is an area of memory used for dynamic memory allocation, where objects are stored.
                    <summary style={styles.summary}>What is the heap in Java?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What is the stack in Java?</b>
                    The stack is a memory area where method calls and local variables are stored.
                    <summary style={styles.summary}>What is the stack in Java?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What is Metaspace?</b>
                    Metaspace is a memory area introduced in Java 8 that replaces the PermGen space for class metadata storage.
                    <summary style={styles.summary}>What is Metaspace?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What are JVM tuning parameters?</b>
                    JVM tuning parameters such as `-Xms`, `-Xmx`, `-XX:NewRatio` can help optimize performance.
                    <summary style={styles.summary}>What are JVM tuning parameters?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What is memory leak in Java?</b>
                    A memory leak occurs when an object is no longer used but still referenced, preventing it from being garbage collected.
                    <summary style={styles.summary}>What is memory leak in Java?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What is a PhantomReference in Java?</b>
                    A PhantomReference is a special type of reference used for garbage collection tracking when objects are finalized.
                    <summary style={styles.summary}>What is a PhantomReference in Java?</summary>
                </details>
                <br />

                {/* Java Best Practices */}
                <details style={styles.details}>
                    <b style={styles.bold}>What is the best way to handle exceptions in Java?</b>
                    Handle exceptions using specific catch blocks, avoid empty catch blocks, and log exceptions appropriately.
                    <summary style={styles.summary}>What is the best way to handle exceptions in Java?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>How do you make a class immutable in Java?</b>
                    To make a class immutable, declare it `final`, make fields `private` and `final`, and don't provide setters.
                    <summary style={styles.summary}>How do you make a class immutable in Java?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What are some common pitfalls in Java?</b>
                    Common pitfalls include using `==` instead of `equals()`, forgetting to close resources, and inefficient string concatenation.
                    <summary style={styles.summary}>What are some common pitfalls in Java?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>Why is the `toString()` method important in Java?</b>
                    The `toString()` method provides a string representation of an object, useful for debugging and logging.
                    <summary style={styles.summary}>Why is the `toString()` method important in Java?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>How can you avoid deadlocks in Java?</b>
                    Avoid deadlocks by ensuring a consistent lock ordering, reducing synchronized blocks, and using timeouts.
                    <summary style={styles.summary}>How can you avoid deadlocks in Java?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What is the use of logging frameworks in Java?</b>
                    Logging frameworks such as Log4j, SLF4J, or java.util.logging provide efficient and standardized logging mechanisms.
                    <summary style={styles.summary}>What is the use of logging frameworks in Java?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What are SOLID principles in Java?</b>
                    SOLID principles include: 
                    - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
                    <summary style={styles.summary}>What are SOLID principles in Java?</summary>
                </details>
                <br />

                {/* Java 8 Features */}
                <details style={styles.details}>
                    <b style={styles.bold}>What is method reference in Java 8?</b>
                    Method references in Java 8 provide a shorthand way to refer to methods of functional interfaces.
                    <summary style={styles.summary}>What is method reference in Java 8?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What is Optional in Java 8?</b>
                    `Optional` is a container object which may or may not contain a value, used to avoid `NullPointerException`.
                    <summary style={styles.summary}>What is Optional in Java 8?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What is the default method in Java 8 interfaces?</b>
                    Default methods allow interfaces to have concrete methods with a body, introduced in Java 8.
                    <summary style={styles.summary}>What is the default method in Java 8 interfaces?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What is the Stream API in Java 8?</b>
                    The Stream API enables processing of sequences of elements in a functional style, such as filtering and mapping.
                    <summary style={styles.summary}>What is the Stream API in Java 8?</summary>
                </details>
                <br />

                {/* Java 9 Features */}
                <details style={styles.details}>
                    <b style={styles.bold}>What is JShell in Java 9?</b>
                    JShell is an interactive tool for evaluating Java expressions, statements, and programs without a full class structure.
                    <summary style={styles.summary}>What is JShell in Java 9?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What are modules in Java 9?</b>
                    Java 9 introduced a modular system allowing for better encapsulation and dependency management.
                    <summary style={styles.summary}>What are modules in Java 9?</summary>
                </details>
                <br />
                <details style={styles.details}>
                    <b style={styles.bold}>What is the var keyword in Java 10?</b>
                    `var` is a type inference keyword, introduced in Java 10, that allows the compiler to infer the type of a variable.
                    <summary style={styles.summary}>What is the var keyword in Java 10?</summary>
                </details>
                <br />

                {/* Java Memory Management */}
                <details style={styles.details}>
                    <b style={styles.bold}>What is the finalize() method in Java?</b>
                    The `finalize()` method is called by the garbage collector before an object is destroyed, but its use is generally discouraged.
                    <summary style={styles.summary}>What is the finalize() method in Java?</summary>
                </details>
                <br />

                {/* Final Section */}
                <div style={styles.footer}>
                    <div style={{ marginBottom: "250px" }}></div>
                </div>
            </div>
        </>
    );
};

// Adding styles as a JS object for convenience
const styles = {
    header: {
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "20px",
        color: "#2c3e50",
    },
    container: {
        margin: "0 auto",
        maxWidth: "900px",
        padding: "20px",
    },
    details: {
        backgroundColor: "#f9f9f9",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    summary: {
        fontSize: "1.1rem",
        fontWeight: "bold",
        cursor: "pointer",
        color: "#2980b9",
    },
    bold: {
        fontWeight: "bold",
        color: "#34495e",
    },
    footer: {
        textAlign: "center",
        color: "#7f8c8d",
    }
};

