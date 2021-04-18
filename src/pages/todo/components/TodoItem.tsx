import * as React from "react";

interface TodoProps {
  // completed: boolean;
  text: string;
  // onClick: () => any;
}

export default function TodoItem( { text }: TodoProps ) {
  return (
    <li>
      {text}
    </li>
  );
}