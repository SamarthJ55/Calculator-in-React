import React, { useState } from "react";
import Operation from "./Operation";
import Output from "./Output";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin: auto;
  width: 340px;
  padding: 10px;
  background-color: black;
`;

export default function Calculator() {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  return (
    <div className="App">
      <Container>
        <Output result={result} value={value} showResult={showResult} />
        <Operation
          showResult={showResult}
          setResult={setResult}
          setValue={setValue}
          setShowResult={setShowResult}
        />
      </Container>
    </div>
  );
}
