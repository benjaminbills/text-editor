import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

export default function Test() {
  const editor = useRef(null);
  const [content, setContent] = useState("Start writing");
  const config = {
    readonly: false,
    height: 400,
  };

  return (
    <div className="App">
      <h1>React Editors</h1>
      <h2>Start editing to see some magic happen!</h2>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => {
          console.log(newContent);
          setContent(newContent);
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
