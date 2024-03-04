/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import styles from "./EditorComponents.module.scss";

import {
  Ref,
  PropsWithChildren,
  forwardRef,
  LegacyRef,
  MouseEvent,
} from "react";
import { useSlate } from "slate-react";
import { BaseEditor, Editor, Element as SlateElement, Transforms } from "slate";

interface BaseProps {
  className: string;
  [key: string]: unknown;
}

const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];
const LIST_TYPES = ["numbered-list", "bulleted-list"];

export const Button = forwardRef(
  (
    {
      active,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
        reversed: boolean;
      } & BaseProps
    >,
    ref: LegacyRef<HTMLSpanElement>
  ) => (
    <span
      {...props}
      ref={ref}
      className={`${styles.button} ${active ? styles.button_isActive : ""}`}
    />
  )
);
Button.displayName = "Button";

export const Icon = forwardRef(
  (
    { ...props }: PropsWithChildren<BaseProps>,
    ref: LegacyRef<HTMLSpanElement>
  ) => <span {...props} ref={ref} className={"material-icons"} />
);

Icon.displayName = "Icon";

export const Menu = forwardRef(
  (
    { ...props }: PropsWithChildren<BaseProps>,
    ref: LegacyRef<HTMLDivElement>
  ) => <div {...props} data-test-id="menu" ref={ref} className={styles.menu} />
);

Menu.displayName = "Menu";

export const Toolbar = forwardRef(
  ({ ...props }: PropsWithChildren<BaseProps>, ref: Ref<HTMLDivElement>) => (
    <Menu {...props} ref={ref} />
  )
);

Toolbar.displayName = "Toolbar";

const isBlockActive = (
  editor: BaseEditor,
  format: string,
  blockType = "type"
) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (node) =>
        !Editor.isEditor(node) &&
        SlateElement.isElement(node) &&
        node[blockType] === format,
    })
  );

  return !!match;
};

const toggleBlock = (editor: BaseEditor, format: string) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (node) =>
      !Editor.isEditor(node) &&
      SlateElement.isElement(node) &&
      Editor.isBlock(editor, node) &&
      LIST_TYPES.includes(node.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties: Partial<SlateElement>;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

type BlockButtonProps = {
  format: string;
  icon: string;
};

export const BlockButton = ({ format, icon }: BlockButtonProps) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onMouseDown={(event: MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
