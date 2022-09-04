import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [name, setName] = useState("Your Name");
  const [profile, setProfile] = useState("Profile");
  const [address, setAddress] = useState("Address");

  return (
    <div className="App">
      <Card
        name={"Rabie Tabbessi"}
        profile={"Full Stack Developer"}
        address={"Gafsa"}
      />
    </div>
  );
}
export default App;
