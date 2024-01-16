"use client";

// Import React dependencies.
import React, { useState } from "react";
// Import the Slate editor factory.
import { createEditor, Descendant } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const TestPage = () => {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable />
    </Slate>
  );
};

export default TestPage;
