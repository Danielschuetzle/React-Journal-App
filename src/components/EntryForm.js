import React, { useState } from "react";

function EntryForm({ addEntry }) {
  const [motto, setMotto] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addEntry(motto, notes);
    setMotto("");
    setNotes("");
  };

  const cardStyle = {
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
    backgroundColor: "white",
  };

  return (
    <div style={cardStyle}>
      <form onSubmit={handleSubmit}>
        <label>
          Motto:
          <input
            type="text"
            value={motto}
            onChange={(e) => setMotto(e.target.value)}
          />
        </label>
        <label>
          Notes:
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EntryForm;
