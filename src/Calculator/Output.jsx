import React from "react";
import styled from "styled-components";

const OuputContainer = styled.div`
  width: 98%;
  height: 50px;
  margin: 5px 0;
  color: white;
  font-size: 32px;
  text-align: right;
`;

export default function ({ result, value, showResult }) {
  return <OuputContainer>{showResult ? result : value}</OuputContainer>;
}
