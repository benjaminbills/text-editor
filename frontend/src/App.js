import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import Edit from "./components/Edit";
import Test from "./components/Test";

function App() {
  const editor = useRef(null);
  const config = {
    readonly: false,
    height: 400,
  };

  const [value, setValue] = useState("start");
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log(title, value);
    axios.post(
      "http://127.0.0.1:8000/post/add",
      { title: title, body: value },
      config
    );
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
        <JoditEditor
          ref={editor}
          value={value}
          config={config}
          onBlur={(newContent) => setValue(newContent)}
        />
        <button type="submit">Submit</button>
      </form>

      <Edit />

      <Test />
    </div>
  );
}

export default App;
