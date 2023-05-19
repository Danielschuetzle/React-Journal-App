import React from "react";
import Entry from "./Entry";

function EntryList({ entries }) {
  return (
    <div>
      {entries.map((entry, index) => (
        <Entry key={index} entry={entry} />
      ))}
    </div>
  );
}

export default EntryList;
