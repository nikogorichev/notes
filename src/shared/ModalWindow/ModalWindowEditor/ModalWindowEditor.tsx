/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./ModalWindowEditor.module.scss";
import { useCallback, useMemo, useState } from "react";
import { Descendant, createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { Element, Leaf } from "utils/slateEditor/toolbarElements";
import { BlockButton, Toolbar } from "./EditorComponents/EditorComponents";

type ModalWindowEditorProps = {
  value: Descendant[]
  setValue: (arg: Descendant[]) => void
}

const ModalWindowEditor = ({value, setValue}: ModalWindowEditorProps) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  // const [value, setValue] = useState<Descendant[]>([
  //   {
  //     children: [{ text: "" }],
  //   },
  // ]);

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
          <Toolbar>
            <BlockButton format="numbered-list" icon="format_list_numbered" />
            <BlockButton format="bulleted-list" icon="format_list_bulleted" />
          </Toolbar>
          <Editable
           
            placeholder="Что нужно сделать"
            renderElement={renderElement}
            renderLeaf={renderLeaf}
          
              className={styles.container}

          />
        </div>
      </Slate>
    </>
  );
};

export default ModalWindowEditor;
