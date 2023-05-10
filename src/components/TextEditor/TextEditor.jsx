import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import { EditorContainerDiv } from 'pages/Blog/Post/post.styled';

const TextEditor = React.forwardRef(  ({defaultValue, readOnly = false}, ref) => {
  const [quill, setQuill] = useState(null);
  const editorRef = useRef();

  useEffect(() => {
    if (!quill) {
      const newQuill = new Quill(editorRef.current, {
        theme: 'bubble',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }, { align: [] }],
            [{ color: [] }, { background: [] }],
            ['link', 'image', 'video'],
            ['clean'],
          ]
        },
        editor: {
          '::before': {
            color: 'red'
          }
        },
        readOnly,
        placeholder: 'Enter text...'
      });

      if (defaultValue) {
        newQuill.root.innerHTML = defaultValue;
      }

      setQuill(newQuill);
    } else {
      quill.enable(!readOnly);
    }
  }, [quill, readOnly, defaultValue]);

  useImperativeHandle(ref, () => {
    return {
      getContent() {
        if (!quill) return "";
        return quill.root.innerHTML;
      },
      setContent(content) {
        if (quill) {
          quill.root.innerHTML = content;
        }
      }
    };
  }, [quill]);

  return (
    <EditorContainerDiv>
      <div
        ref={editorRef}
        style={{ border: readOnly ? 'none' : '1px solid #ffffff80', '.qlEditor::before': {color: 'red'} }}
        autoComplete="off"
      />
    </EditorContainerDiv>
  );
});

export default TextEditor;
