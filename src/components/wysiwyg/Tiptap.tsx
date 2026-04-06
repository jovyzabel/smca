"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import MenuBar from './MenuBar'

const Tiptap = () => {
    const editor = useEditor({
      extensions: [StarterKit, 
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
        Highlight
    
    ],
      content: "",
      editorProps: {
        attributes: {
          class:
            "min-h-[200px] border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        },
      },
      immediatelyRender: false,
    });
  return (
    <div className="border border-base-300 rounded-box overflow-hidden">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="prose max-w-none p-4 min-h-[200px]"
      />
    </div>
  );
}

export default Tiptap