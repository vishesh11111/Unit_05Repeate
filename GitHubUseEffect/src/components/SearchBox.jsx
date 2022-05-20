import React from "react";
import { useState } from "react";

export const SearchBox = ({ handelClick }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        //  onChange={(e)=>handelClick(e.target.value)}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handelClick(text)}>Search</button>
    </div>
  );
};
