import React from "react";

function Entry({ entry }) {
  const cardStyle = {
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
    backgroundColor: "white",
  };

  return (
    <div style={cardStyle}>
      <h2>{entry.motto}</h2>
      <p>{entry.notes}</p>
      <p>{entry.timestamp.toLocaleString()}</p>
    </div>
  );
}

export default Entry;
