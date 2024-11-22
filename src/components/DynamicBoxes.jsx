import React from "react";
import { Link } from "react-router-dom";

function DynamicBoxes() {
  // Define the boxes
  const boxes = [
    { color: "yellow", label: "Most Searched Questions" , path: "/MSearchedQ"},
    { color: "blue", label: "Core Java Questions" , path: "/CoreJavaQ"},
    { color: "green", label: "Adavance Java Questions" , path: "/AdvancedJavaQ" },
  ];
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap", // Allow boxes to wrap to the next line if needed
      }}
    >
      {boxes.map((box, index) => (
        <div
          key={index}
          style={{
            backgroundColor: box.color,
            width: "150px",
            height: "150px",
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: "5px",
          }}
        >
         <Link
            to={box.path}
            style={{
              textDecoration: "none", // Removes underline
              color: "black", // Text color
              fontWeight: "bold", // Makes the label bold
            }}
          >
            {box.label}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DynamicBoxes;
