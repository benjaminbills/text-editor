import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

function Edit() {
  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    axios.get("http://127.0.0.1:8000/post/get/1", config).then((response) => {
      setValue(response.data.body);
    });
  }, []);
  const [value, setValue] = useState("");

  const [title, setTitle] = useState("");
  return (
    <div className="App">
      <form>
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
          data={value}
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

export default Edit;
