import React, { useRef, useEffect, useState } from "react";

import "./main.css";

interface MainType {
  isCurrentWindow: boolean;
  backgroundColor: string;
  fontColor: string;
  cursorColor: string;
  fontSize: string;
}

interface HistoryTerminalType {
  command: string;
  data: Array<string>;
}

const Main = ({
  isCurrentWindow,
  backgroundColor,
  fontColor,
  cursorColor,
  fontSize,
}: MainType) => {
  const [terminalValue, setTerminalValue] = useState("");
  const [historyTerminal, setHistoryTerminal]:
    | HistoryTerminalType[]
    | Array<any> = useState([]);
  const [numnberCommand, setNumnberCommand] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      if (isCurrentWindow) {
        inputRef.current.focus();
      } else {
        inputRef.current.blur();
      }
    }
  }, [isCurrentWindow]);

  const runCommand = (value: string) => {
    const lastCommand = historyTerminal.length;
    setNumnberCommand(lastCommand);

    let response = [
      "Hit1: http://localhost3000/djsfkajsf/adfdasf/1",
      "Git2: http://localhost3000/djsfkajsf/adfdasf/2",
      "Hit2: http://localhost3000/djsfkajsf/adfdasf/3",
      "Git3 http://localhost3000/djsfkajsf/adfdasf/4",
      "Hit4 http://localhost3000/djsfkajsf/adfdasf/5",
      "Hit4 http://localhost3000/djsfkajsf/adfdasf/6",
      "Hit5 http://localhost3000/djsfkajsf/adfdasf/7",
      "Hit5 http://localhost3000/djsfkajsf/adfdasf/8",
      "Hit6 http://localhost3000/djsfkajsf/adfdasf/9",
    ];

    if (value !== "npm install") {
      setTimeout(() => {
        setHistoryTerminal([
          ...historyTerminal,
          { command: value, data: [`${value}: command not found`] },
        ]);
      }, 1000);
      return;
    }

    setTimeout(() => {
      setHistoryTerminal([
        ...historyTerminal,
        { command: value, data: response },
      ]);
      setTimeout(() => {
        response = [...response, "Reading package list... 10%"];
        setHistoryTerminal([
          ...historyTerminal,
          { command: value, data: response },
        ]);
        setTimeout(() => {
          response = [...response, "Reading package list... 90%"];
          setHistoryTerminal([
            ...historyTerminal,
            { command: value, data: response },
          ]);
        }, 100);
      }, 200);
    }, 1000);
  };

  const onBlur = () => {
    if (inputRef.current) {
      if (isCurrentWindow) {
        inputRef.current.focus();
      }
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerminalValue(e.target.value);
  };

  const onSubmit = (
    e: React.KeyboardEvent<HTMLDivElement> & React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (e.keyCode == 13 && e.target.value) {
      setTerminalValue("");
      runCommand(e.target.value);
    }
  };

  const onShowPreviusCommand = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      e.keyCode == 38 &&
      numnberCommand >= 0 &&
      historyTerminal[numnberCommand]
    ) {
      if (numnberCommand > 0) {
        setNumnberCommand(numnberCommand - 1);
      }
      setTerminalValue(historyTerminal[numnberCommand].command);
    }
  };

  return (
    <main style={{ backgroundColor: backgroundColor, fontSize }}>
      <div className="container-data">
        {historyTerminal.length > 0 &&
          historyTerminal.map((history: HistoryTerminalType, i: number) => {
            return (
              <div
                key={`${i} - ${Date.now()}`}
                className="container-data-items"
              >
                <label>
                  Your nickname Mac-2018<span className="symbol">:</span>
                  <span className="tilda">~</span>
                  <span className="symbol">$</span>
                  <span style={{ color: fontColor }}>{history.command}</span>
                </label>
                {history.data.map((item: string) => {
                  return (
                    <span style={{ color: fontColor }} key={item + i}>
                      {item}
                    </span>
                  );
                })}
              </div>
            );
          })}
      </div>
      <div className="form" onKeyDown={onShowPreviusCommand} onKeyUp={onSubmit}>
        <label>
          Your nickname Mac-2018<span className="symbol">:</span>
          <span className="tilda">~</span>
          <span className="symbol">$</span>
        </label>
        <input
          onChange={onChange}
          value={terminalValue}
          style={{
            color: fontColor,
            caretColor: cursorColor,
            fontSize,
            background: backgroundColor,
          }}
          onBlur={onBlur}
          type="text"
          ref={inputRef}
        ></input>
      </div>
    </main>
  );
};

export default Main;
