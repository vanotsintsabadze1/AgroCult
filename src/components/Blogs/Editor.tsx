"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./Toolbar";
import Heading from "@tiptap/extension-heading";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";

interface Props {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const Tiptap = ({ setDescription }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: "min-h-[1rem] mt-[1rem]",
          },
        },
      }),
      Heading,
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc",
        },
      }),
      ListItem,
      Image.configure({
        HTMLAttributes: {
          class: "w-[30rem] h-[30rem]",
        },
      }),
      Placeholder,
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose-2xl prose-a:text-blue-600 prose-img:rounded h-[30rem] border-2 border-gray-300 px-[1.5rem] outline-none rounded-[.5rem] prose-h1:text-[2.5rem] md:h-[40rem] overflow-auto",
      },
    },
    onUpdate({ editor }) {
      setDescription(editor.getHTML());
    },
  });

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
