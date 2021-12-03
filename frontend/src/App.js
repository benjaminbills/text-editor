import React, { useEffect, useState } from "react";
import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Edit from "./components/Edit";
function App() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    // console.log(title);
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
        <CKEditor
          editor={ClassicEditor}
          // config={{
          //   removePlugins: [
          //     "Image",
          //     "ImageCaption",
          //     "ImageStyle",
          //     "ImageToolbar",
          //     "ImageUpload",
          //     "MediaEmbed",
          //   ],
          // }}
          data="<p>Hello from CKEditor 5!</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            setValue(data);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <Edit />
    </div>
  );
}

export default App;
