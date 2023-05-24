import { useState, useEffect } from "react";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { uid } from "uid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];

function App() {
  // First, it tries to get the "entries" from localStorage. If they exist, it parses the JSON string to an object and uses that.
  // If no data exists in localStorage under the key "entries", it uses the initialEntries.
  const [entries, setEntries] = useState(() => {
    const localData = localStorage.getItem("entries");
    return localData ? JSON.parse(localData) : initialEntries;
  });

  const [filter, setFilter] = useState("all"); // "all" or "favorites"

  // useEffect hook triggers when 'entries' state changes
  useEffect(() => {
    // It serializes the entries state to a JSON string and stores it in localStorage under the key "entries".
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  // not working: function App() {
  // const [entries, setEntries] = useLocalStorageState("entries", initialEntries);
  // const [filter, setFilter] = useState("all");

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ id: uid(), date, ...newEntry }, ...entries]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  const favoriteEntries = entries?.filter((entry) => entry.isFavorite);

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection
          entries={filter === "favorites" ? favoriteEntries : entries}
          filter={filter}
          allEntriesCount={entries?.length}
          favoriteEntriesCount={favoriteEntries?.length}
          onToggleFavorite={handleToggleFavorite}
          onShowAllEntries={handleShowAllEntries}
          onShowFavoriteEntries={handleShowFavoriteEntries}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
