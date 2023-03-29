import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import Underline from "@tiptap/extension-underline";
import {
    FaBold,
    FaItalic,
    FaStrikethrough,
    FaHeading,
    FaListOl,
    FaListUl,
    FaQuoteLeft,
    FaRedo,
    FaUndo,
    FaUnderline,
    FaParagraph,
} from "react-icons/fa";

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="menu-bar">
            <div>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={editor.isActive("bold") ? "is-active" : ""}
                >
                    <FaBold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can().chain().focus().toggleItalic().run()
                    }
                    className={editor.isActive("italic") ? "is-active" : ""}
                >
                    <FaItalic />
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleUnderline().run()
                    }
                    disabled={
                        !editor.can().chain().focus().toggleUnderline().run()
                    }
                    className={editor.isActive("underline") ? "is-active" : ""}
                >
                    <FaUnderline />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can().chain().focus().toggleStrike().run()
                    }
                    className={editor.isActive("strike") ? "is-active" : ""}
                >
                    <FaStrikethrough />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editor.can().chain().focus().toggleCode().run()}
                    className={editor.isActive("code") ? "is-active" : ""}
                >
                    {/* <FaCode /> */}
                </button>
                {/* <button
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
            >
                clear marks
            </button>
            <button onClick={() => editor.chain().focus().clearNodes().run()}>
                clear nodes
            </button> */}
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive("paragraph") ? "is-active" : ""}
                >
                    <FaParagraph />
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 1 })
                            ? "is-active"
                            : ""
                    }
                >
                    <FaHeading />
                </button>

                <button
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    className={editor.isActive("bulletList") ? "is-active" : ""}
                >
                    <FaListUl />
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                    className={
                        editor.isActive("orderedList") ? "is-active" : ""
                    }
                >
                    <FaListOl />
                </button>

                <button
                    onClick={() =>
                        editor.chain().focus().toggleBlockquote().run()
                    }
                    className={editor.isActive("blockquote") ? "is-active" : ""}
                >
                    <FaQuoteLeft />
                </button>
            </div>
            <div>
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                >
                    <FaUndo />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                >
                    <FaRedo />
                </button>
            </div>
        </div>
    );
};

const Tiptap = ({ setDesc }) => {
    const editor = useEditor({
        extensions: [StarterKit, Underline],
        content: ``,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            setDesc(html);
        },
    });

    return (
        <div className="text-editor">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};

export default Tiptap;
