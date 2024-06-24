import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./Toolbar";
import Heading from "@tiptap/extension-heading";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import DOMPurify from "isomorphic-dompurify";
import ReactLenis from "lenis/react";
interface Props {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export default function Tiptap({ setDescription, description }: Props) {
  const sanitiziedDescription = description === "" ? "" : DOMPurify.sanitize(description);
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
          class: "max-w-full max-h-full object-contain mt-[1rem]",
        },
      }),
      Placeholder,
    ],
    content: description === "" ? "" : sanitiziedDescription,
    editorProps: {
      attributes: {
        class:
          "prose-2xl prose-a:text-blue-600 prose-img:rounded h-[30rem] border-2 border-gray-300 px-[1.5rem] outline-none rounded-[.5rem] prose-h1:text-[2.5rem] md:h-[40rem] overflow-auto prose-h1:mt-[1rem] dark:bg-white",
      },
    },
    onUpdate({ editor }) {
      setDescription(editor.getHTML());
    },
  });

  return (
    <>
      <Toolbar editor={editor} />
      <ReactLenis options={{ prevent: true }}>
        <EditorContent editor={editor} />
      </ReactLenis>
    </>
  );
}
