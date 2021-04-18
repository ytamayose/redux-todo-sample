import * as React from "react";

interface TodoProps {
  text: string;
}

export default function TodoItem( { text }: TodoProps ) {
  return (
    <li>
      {text}
    </li>
  );
}