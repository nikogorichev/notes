/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */

import { Attributes } from "react";

type ElementType = {
  element: any;
  children: string;
  attributes: Attributes;
};

type LeafType = {
  leaf: any;
  children: JSX.Element;
  attributes: Attributes;
};

export const Element = ({ attributes, children, element }: ElementType) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;

    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;

    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;

    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;

    case "link":
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );

    case "list-item":
      return <li {...attributes}>{children}</li>;

    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;

    default:
      return <p {...attributes}>{children}</p>;
  }
};

export const Leaf = ({ attributes, children, leaf }: LeafType) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
