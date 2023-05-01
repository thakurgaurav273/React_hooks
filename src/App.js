import React from "react";
import "./App.css";
function App() {
  const [textcolor, setTextcolor] = React.useState("black");
  const [bgcolor, setBgcolor] = React.useState("white");

  function change_black() {
    // checks the value of bgcolor and then accordingly sets its state to white or black
    bgcolor === "white" ? setBgcolor("black") : setBgcolor("white");
    textcolor === "black" ? setTextcolor("white") : setTextcolor("black");
  }
  return (
    <div className="container">
      <h1> Hello</h1>
      <input placeholder="What's your Name?" className="name" />
      <br />

      <button
        // used to write inline css and inside it the javascript code
        style={{ backgroundColor: bgcolor, color: textcolor }}
        type="submit"
        onMouseOut={change_black}
        //  when mouse is hovered over button
        onMouseOver={change_black}
        className="mybutton"
      >
        Submit
      </button>
    </div>
  );
}

export default App;
