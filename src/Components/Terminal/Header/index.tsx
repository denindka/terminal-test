import React from "react";

import "./header.css";

const colors = ["#4CAF50", "#FDD835", "#212121", "#F06292", "#304FFE"];
const fontSizes = [12, 14, 18, 20, 24, 32];

interface HeaderType {
  onChangeBackgroundColor: (value: string) => void;
  setFontColor: (value: string) => void;
  setFontSize: (value: string) => void;
  setCursorColor: (value: string) => void;
}

const Header = ({
  onChangeBackgroundColor,
  setFontColor,
  setCursorColor,
  setFontSize,
}: HeaderType) => {
  return (
    <header>
      <ul>
        <li>File</li>
        <li>Edit</li>
        <li className="parent-sub-menu">
          View
          <div className="sub-menu-container">
            <ul className="sub-menu">
              <li>
                Font colors
                <div className="colors">
                  {colors.map((color: string) => {
                    return (
                      <div
                        key={color}
                        onClick={() => setFontColor(color)}
                        style={{ backgroundColor: color }}
                      ></div>
                    );
                  })}
                </div>
              </li>
              <li>
                Bacground
                <div className="colors">
                  {colors.map((color: string) => {
                    return (
                      <div
                        key={color}
                        onClick={() => onChangeBackgroundColor(color)}
                        style={{ backgroundColor: color }}
                      ></div>
                    );
                  })}
                </div>
              </li>
              <li>
                Font-size
                <div className="colors font-sizes">
                  {fontSizes.map((fontSize: number) => {
                    return (
                      <div
                        key={fontSize}
                        onClick={() => {
                          setFontSize(`${fontSize}px`);
                        }}
                      >
                        {fontSize}
                      </div>
                    );
                  })}
                </div>
              </li>
              <li>
                Cursor colors
                <div className="colors">
                  {colors.map((color: string) => {
                    return (
                      <div
                        key={color}
                        onClick={() => {
                          setCursorColor(color);
                        }}
                        style={{ backgroundColor: color }}
                      ></div>
                    );
                  })}
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>Terminal</li>
        <li>Help</li>
      </ul>
    </header>
  );
};

export default Header;
