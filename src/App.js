import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (motto, notes) => {
    setEntries([
      ...entries,
      { motto: motto, notes: notes, timestamp: new Date() },
    ]);
  };

  return (
    <div className="App" style={{ margin: "0 auto", maxWidth: "800px" }}>
      <Header />
      <Menu />
      <EntryForm addEntry={addEntry} />
      <EntryList entries={entries} />
    </div>
  );
}

export default App;
