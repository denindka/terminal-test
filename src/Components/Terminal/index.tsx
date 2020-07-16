import React, { useState } from "react";

import Header from "./Header";
import Main from "./Main";

interface TerminalType {
  isCurrentWindow: boolean;
  item?: number;
}

const Terminal = ({ isCurrentWindow, item }: TerminalType) => {
  const [fontColor, setFontColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [cursorColor, setCursorColor] = useState("");
  const [fontSize, setFontSize] = useState("");

  return (
    <div style={{ height: "100%" }}>
      <Header
        setFontColor={setFontColor}
        onChangeBackgroundColor={setBackgroundColor}
        setCursorColor={setCursorColor}
        setFontSize={setFontSize}
      />

      <Main
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        fontSize={fontSize}
        cursorColor={cursorColor}
        isCurrentWindow={isCurrentWindow}
      />
    </div>
  );
};

export default Terminal;
