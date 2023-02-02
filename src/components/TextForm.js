import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const array = [];
  array.push(text.split(""));

  //   console.log(array);
  //   console.log(text.split(""));
  const handleOnChange = (event) => {
    //  console.log("On Change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    //  console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "primary");
  };
  const handleLoClick = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "info");
  };
  const handleClearText = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Textbox cleared", "danger");
  };
  const handleExtraSpace = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces removed", "warning");
  };
  const handleRemoveNumbers = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.replace(/\d+/g, "").trim();
    setText(newText);
    props.showAlert("Numbers removed from text", "info");
  };
  const handleCopyText = () => {
    //  console.log(text);
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  //   setText("New Text");//Correct way to update text state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#021330" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#141b32",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "success"
          } mx-2 my-2`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "success"
          } mx-2 my-2`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "success"
          } mx-2 my-2`}
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "success"
          } mx-2 my-2`}
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "success"
          } mx-2 my-2`}
          onClick={handleRemoveNumbers}
        >
          Remove Numbers
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "success"
          } mx-2 my-2`}
          onClick={handleCopyText}
        >
          Copy
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "#021330" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>You took {0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
