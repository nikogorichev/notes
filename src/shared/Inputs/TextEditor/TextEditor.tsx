import styles from "./TextEditor.module.scss";
import { useCallback, useMemo } from "react";
import { Descendant, createEditor } from "slate";
import { withHistory } from "slate-history";
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from "slate-react";
import { Element, Leaf } from "utils/slateEditor/toolbarElements";
import { BlockButton, Toolbar } from "./EditorComponents/EditorComponents";

type TextEditorProps = {
  value: Descendant[];
  setValue: (arg: Descendant[]) => void;
};

const TextEditor = ({ value, setValue }: TextEditorProps) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  );
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  return (
    <>
      <Slate editor={editor} initialValue={value} onChange={setValue}>
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

export default TextEditor;
