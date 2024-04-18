import React from "react";
import { evaluate } from "mathjs";
import styled from "styled-components";
const OpContainer = styled.div`
  display: grid;
  grid-row-gap: 5px;
`;
const NumContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;

const FullContainer = styled.div`
  display: flex;
  padding: 0 3px 0 0;
  margin: 10px 0;
`;
const Button = styled.button`
  width: 80px;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  color: ${(props) => (props.isNumber ? "white" : "white")};
  flex: 1;
  background-color: ${(props) => (props.isNumber ? "#373636" : "orange")};
`;

export default function ({ setValue, setResult, setShowResult, showResult }) {
  const onClick = (e) => {
    if (Number.isInteger(+e.target.value) || e.target.value === ".") {
      if (showResult) setResult("");
      setValue((prevValue) => {
        return prevValue + e.target.value;
      });
      setResult((prevResult) => {
        return prevResult + e.target.value;
      });
      setShowResult(false);
    } else if (e.target.value === "=") {
      setResult((prevResult) => {
        let res = prevResult;
        const lastChar = prevResult.charAt(prevResult.length - 1);
        if (!Number.isInteger(+lastChar)) {
          res += prevResult.charAt(prevResult.length - 2);
        }
        return evaluate(res);
      });
      setShowResult(true);
      setValue("");
    } else {
      setValue("");
      setResult((prevResult) => {
        return prevResult + e.target.value;
      });
      setShowResult(false);
    }
  };

  const onReset = () => {
    setValue("");
    setResult("");
    setShowResult(false);
  };

  return (
    <div>
      <Container>
        <NumContainer>
          {new Array(9).fill(0).map((_, key) => {
            return (
              <Button key={key + 1} value={key + 1} onClick={onClick} isNumber>
                {key + 1}
              </Button>
            );
          })}
          <Button key={"."} value={"."} onClick={onClick} isNumber>
            {"."}
          </Button>
          <Button key={0} value={0} onClick={onClick} isNumber>
            {0}
          </Button>
          <Button key={"clear"} value={"clear"} onClick={onReset} isNumber>
            {"Clear"}
          </Button>
        </NumContainer>
        <OpContainer>
          <Button key={"add"} value={"+"} onClick={onClick}>
            {"+"}
          </Button>
          <Button key={"sub"} value={"-"} onClick={onClick}>
            {"-"}
          </Button>
          <Button key={"multiply"} value={"*"} onClick={onClick}>
            {"x"}
          </Button>
          <Button key={"divide"} value={"/"} onClick={onClick}>
            {"/"}
          </Button>
        </OpContainer>
      </Container>
      <FullContainer>
        <Button key={"showResult"} value={"="} onClick={onClick}>
          {"="}
        </Button>
      </FullContainer>
    </div>
  );
}
