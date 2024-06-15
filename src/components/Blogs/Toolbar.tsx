"use client";

import { type Editor } from "@tiptap/react";
import { Bold, Heading, Image, Strikethrough, Italic, List, ListOrdered, Code } from "lucide-react";

interface Props {
  editor: Editor | null;
}

export function Toolbar({ editor }: Props) {
  if (!editor) return null;

  function uploadExternalImage() {
    const url = window.prompt("URL");

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }

  return (
    <div className="flex items-center gap-[1rem] text-[1.3rem]">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`rounded-md px-2 py-1 ${editor.isActive("heading") ? "bg-gray-400" : "bg-gray-100"}`}
      >
        <Heading size={15} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`rounded-md px-2 py-1 ${editor.isActive("bold") ? "bg-gray-400" : "bg-gray-100"}`}
      >
        <Bold size={15} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`rounded-md px-2 py-1 ${editor.isActive("italic") ? "bg-gray-400" : "bg-gray-100"}`}
      >
        <Italic size={15} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`rounded-md px-2 py-1 ${editor.isActive("strike") ? "bg-gray-400" : "bg-gray-100"}`}
      >
        <Strikethrough size={15} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`rounded-md px-2 py-1 ${editor.isActive("code") ? "bg-gray-400" : "bg-gray-100"}`}
      >
        <Code size={15} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`rounded-md px-2 py-1 ${editor.isActive("bulletList") ? "bg-gray-400" : "bg-gray-100"}`}
      >
        <List size={15} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`rounded-md px-2 py-1 ${editor.isActive("orderedList") ? "bg-gray-400" : "bg-gray-100"}`}
      >
        <ListOrdered size={15} />
      </button>
      <button type="button" onClick={() => uploadExternalImage()} className={`rounded-md bg-gray-100 px-2 py-1`}>
        <Image size={15} />
      </button>
    </div>
  );
}
