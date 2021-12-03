import React, { useState } from "react";
import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
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
    </div>
  );
}

export default App;
