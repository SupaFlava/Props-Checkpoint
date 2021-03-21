import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
const user = {
  name: "Supa",
  bio:
    "Now this is the story all about how My life got flipped, turned upside down And I'd like to take a minute, just sit right there  I'll tell you how I became the prince of a town called Bel-Air",
  profession: "You know my steez",
  src: "/1.jpg",
};

function App() {
  const handleName = () => alert(user.name);

  return (
    <div className="App">
      <Profile
        name={user.name}
        bio={user.bio}
        profession={user.profession}
        src={user.src}
        handleName={handleName}
      />
    </div>
  );
}

export default App;
