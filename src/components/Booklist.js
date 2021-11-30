import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Booklist extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Green Eggs and Ham</li>
          <li style={{ background: theme.ui }}>Oh the Places you can go</li>
          <li style={{ background: theme.ui }}>A Beauitful Place to Die</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
