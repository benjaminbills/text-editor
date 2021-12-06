import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

function Edit() {
  const editor = useRef(null);
  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    axios.get("http://127.0.0.1:8000/post/get/8", config).then((response) => {
      console.log(response.data.body);
      setValue(response.data.body);
    });
  }, []);
  const [value, setValue] = useState("");
  const config = {
    readonly: false,
    height: 400,
  };
  const [title, setTitle] = useState("");
  return (
    <div className="App">
      <form>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
        {/* <CKEditor
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
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            setValue(data);
          }}
        /> */}
        <JoditEditor ref={editor} value={value} config={config} o />
        <button type="submit">Submit</button>
      </form>
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

export default Edit;
