import React, { useState } from "react";

import Terminal from "../../Components/Terminal";

import "./app.css";

interface TerminalsType {
  item: number;
  component: any;
}

const App = () => {
  const [terminals, setTerminals] = useState<TerminalsType[]>([
    {
      item: 0,
      component: <Terminal item={0} isCurrentWindow={true} />,
    },
  ]);

  const gridContainer = () => {
    const styles = {
      display: "grid",
      gridColumnGap: "10px",
      gridRowGap: "20px",
    };

    if (terminals.length === 1) {
      return {
        ...styles,
        gridTemplateRows: "1fr",
      };
    }

    if (terminals.length === 2) {
      return {
        ...styles,
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
      };
    }
    if (terminals.length === 3 || terminals.length === 4) {
      return {
        ...styles,
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
      };
    }
    if (terminals.length === 4) {
      return {
        ...styles,
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
      };
    }

    if (terminals.length === 6 || terminals.length === 5) {
      return {
        ...styles,
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "1fr 1fr",
      };
    }
  };

  const checkCountTerminals = () => {
    if (terminals.length > 5) {
      alert("You can add only six terminals !");
      return true;
    }
    return false;
  };

  const addTerminal = () => {
    if (checkCountTerminals()) {
      return;
    }

    const oldTerminals = terminals.map((terminal: TerminalsType, i: number) => {
      return {
        ...terminal,
        item: i,
        component: <Terminal item={i} isCurrentWindow={false} />,
      };
    });

    setTerminals([
      ...oldTerminals,
      {
        item: terminals.length,
        component: <Terminal item={terminals.length} isCurrentWindow={true} />,
      },
    ]);
  };

  const onClickOnTerminal = (item: number) => {
    const newTerminals = terminals.map((terminal: TerminalsType, i: number) => {
      if (i === item) {
        return {
          ...terminal,
          component: <Terminal item={i} isCurrentWindow={true} />,
        };
      } else {
        return {
          ...terminal,
          component: <Terminal item={i} isCurrentWindow={false} />,
        };
      }
    });

    setTerminals(newTerminals);
  };

  const onDeleteTerminal = (
    item: number,
    e: React.MouseEvent<HTMLSpanElement>
  ) => {
    e.stopPropagation();
    const newTerminals = terminals.filter((terminal: TerminalsType) => {
      return item !== terminal.item;
    });

    setTerminals(newTerminals);
  };

  return (
    <div className="container">
      <div style={gridContainer()}>
        {terminals.map((terminal: TerminalsType, i: number) => (
          <div
            key={terminal.item}
            onClick={() => onClickOnTerminal(i)}
            className={`grid ${
              i + 1 === terminals.length ? `itemGrid${terminals.length}` : ""
            }`}
          >
            <div className="name-of-terminal-container">
              <span className="name-of-terminal">Terminal {i + 1}</span>
              {terminals.length > 1 && (
                <span
                  onClick={(e) => onDeleteTerminal(terminal.item, e)}
                  className="delete"
                >
                  X
                </span>
              )}
            </div>
            {terminal.component}
          </div>
        ))}
      </div>

      <div className="button-container">
        <button onClick={addTerminal}>New Terminal</button>
      </div>
    </div>
  );
};

export default App;
