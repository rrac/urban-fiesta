import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import "./styles.css";

const Tile = styled.div`
  background-color: ${props => props.color};
  width: 20px;
  height: 20px;
  border: 1px solid black;
  &:hover {
    opacity: 0.5;
  }
`;

function createRow(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push(i);
  }
  return array;
}

function createData(rowNum, columnNum) {
  const data = [];
  for (let i = 0; i < rowNum; i++) {
    const subarray = [];
    for (let j = 0; j < columnNum; j++) {
      subarray.push("lightgrey");
    }
    data.push(subarray);
  }
  return data;
}

function updateData(data, rowNum, columnNum, color) {
  const newData = data.map(subarray => [...subarray]);
  newData[rowNum][columnNum] = color;
  return newData;
}

function Board(props) {
  const rows = createRow(props.rows);
  const columns = createRow(props.columns);
  const [colors, setColors] = useState(createData(props.rows, props.columns));
  return (
    <div className="container">
      {columns.map((_, columnIndx) => (
        <div>
          {rows.map((_, rowIndx) => (
            <Tile
              color={colors[rowIndx][columnIndx]}
              onClick={() => {
                const newColor = updateData(colors, rowIndx, columnIndx, "red");
                console.log(columnIndx, rowIndx);
                setColors(newColor);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function App() {
  return <Board rows={3} columns={4} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
