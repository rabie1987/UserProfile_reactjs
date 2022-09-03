import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [name, setName] = useState("Your Name");
  const [address, setAddress] = useState("Adrress");
  const [about, setAbout] = useState("Activity");

  return (
    <div className="App">
      <Card
        name={"Rabie Tabbessi"}
        address={"Gafsa"}
        about={"Full Stack Developer"}
      />
    </div>
  );
}

export default App;
