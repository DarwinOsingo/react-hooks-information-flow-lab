// src/components/App.js
import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import items from "../data/items";
import "./styles.css"; // Importing CSS file for styling

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light"; // ← class includes "light" or "dark"

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

