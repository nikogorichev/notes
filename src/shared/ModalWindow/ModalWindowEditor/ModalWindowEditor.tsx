/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./ModalWindowEditor.module.scss";
import { useCallback, useMemo, useState } from "react";
import { Descendant, createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { Element, Leaf } from "utils/slateEditor/toolbarElements";

const ModalWindowEditor = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const [value, setValue] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);

  const renderElement = useCallback((props: any) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);

  return (
    <>
      <Slate
        editor={editor}
        initialValue={value}
        onChange={setValue}
      >
        <div className={styles.wrapper}>
          {/* <Toolbar>
            <MarkButton format="bold" icon="format_bold" />
            <MarkButton format="italic" icon="format_italic" />
            <MarkButton format="underline" icon="format_underlined" />
            <MarkButton format="code" icon="code" />
            <BlockButton format="heading-one" icon="looks_one" />
            <BlockButton format="heading-two" icon="looks_two" />
            <BlockButton format="block-quote" icon="format_quote" />
            <BlockButton format="numbered-list" icon="format_list_numbered" />
            <BlockButton format="bulleted-list" icon="format_list_bulleted" />
            <LinkButton />
          </Toolbar> */}
          <Editable
            // onKeyDown={event => {
            //   if (event.key === "&") {
            //     // Prevent the ampersand character from being inserted.
            //     event.preventDefault();
            //     // Execute a command to insert text when the event occurs.
            //     editor.exec({ type: "insert_text", text: "and" });
            //   }
            //   toggleKeyboardShortcut(event, editor);
            // }}
            placeholder="Что нужно сделать"
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            // style={{
            //     backgroundColor: 'rgb(255, 230, 156)',
            //     minHeight: '200px',
            //     outline: 'none',
            //   }}
              className={styles.container}

          />
        </div>
      </Slate>
    </>
  );
};

export default ModalWindowEditor;
