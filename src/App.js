import psgm from "./psgm.jpg";
import "./App.css";
import Component from "./profile/Component.js";

function App() {
  const handleName = (FullName) =>
    alert(` The Name of the Profile is ${FullName}`);
  return (
    <div className="App">
      <Component
        FullName="Lionel Andrés Messi Cuccitini"
        Bio={{
          Profession: "Football Player",
          Clubs: ["FC Barcelone", "/Paris Saint-Germain"],
          Goals: 750,
          Languages: ["Spanish", "/Catalan"],
        }}
        handleName={handleName}
      >
        <img
          src={psgm}
          style={{
            display: "block",
            margin: "0px 0px 0px 100px",
            width: "200px",
            height: "200px",
          }}
        />
      </Component>
    </div>
  );
}

export default App;
