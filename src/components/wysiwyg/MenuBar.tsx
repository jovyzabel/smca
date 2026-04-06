"use client"

import {Bold, Heading1, Heading2,Heading3, Highlighter
    , Italic, List, Quote, TextAlignCenter, 
    TextAlignEnd, TextAlignJustify, TextAlignStart} from "lucide-react"
import React from "react";

const MenuBar = ({ editor } ) => {
 
   if (!editor) {
    return null
  }

  const options = [

    {
        icon: <Heading1 size={18} />,
        onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: editor.isActive("heading", { level: 1 }),
    },
    {
        icon: <Heading2 size={18} />,
        onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: editor.isActive("heading", { level: 2 }),
    },
    {
        icon: <Heading3 size={18} />,
        onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        isActive: editor.isActive("heading", { level: 3 }),
    },
    // {
    //     icon: <Highlighter size={18} />,
    //     onClick: () => editor.chain().focus().toggleHighlight().run(),
    //     isActive: editor.isActive("highlight"),
    // }
    // ,
    {
        icon: <TextAlignCenter size={18} />,
        onClick: () => editor.chain().focus().setTextAlign("center").run(),
        isActive: editor.isActive({ textAlign: "center" }),
    },
    {
        icon: <TextAlignEnd size={18} />,
        onClick: () => editor.chain().focus().setTextAlign("right").run(),
        isActive: editor.isActive({ textAlign: "right" }),
    },
    {
        icon: <TextAlignJustify size={18} />,
        onClick: () => editor.chain().focus().setTextAlign("justify").run(),
        isActive: editor.isActive({ textAlign: "justify" }),
    },
    {
        icon: <TextAlignStart size={18} />,
        onClick: () => editor.chain().focus().setTextAlign("left").run(),
        isActive: editor.isActive({ textAlign: "left" }),   
    },
    {
      icon: <Bold size={18} />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
    },
    {
      icon: <Italic size={18} />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
    },
    {
      icon: <List size={18} />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      icon: <Quote size={18} />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive("blockquote"),
    },
  ];


  return (
    <div className="control-group">
      <div className="a-group flex flex-wrap gap-2 p-2 border-b border-base-300 bg-base-100">
        {options.map((option, index) => (
            <a key={index} onClick={option.onClick} className={`
            p-2 rounded-md transition-colors 
            ${option.isActive 
              ? 'bg-blue-100 text-blue-700 font-bold border border-blue-200' 
              : 'text-gray-500 hover:bg-gray-100'
            }
          `}>
                {option.icon}
            </a>    
        )) }
      </div>
    </div>
  );
};



export default MenuBar