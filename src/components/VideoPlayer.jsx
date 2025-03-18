// src/components/VideoPlayer.jsx
import React from "react";
import ReactPlayer from "react-player";  // Importing ReactPlayer

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="player-wrapper" style={{ position: "relative", padding: "150%" }}>
      <ReactPlayer
        url={videoUrl}  // Pass the video URL (e.g., YouTube video URL) as a prop
        className="react-player"
        playing={false}  // Auto-play the video when the component loads
        width="400px"    // Full width
        height="250px"   // Full height
        controls
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default VideoPlayer;
