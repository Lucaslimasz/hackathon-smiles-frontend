import React from "react";

import { Container, Span } from "./styles";

export default function OptionsIllustration({arraySize, position}) {
  
  const dataSize = [];

  for (let i = 0; i < arraySize; i++){
    dataSize.push(i)
  }

  return (
    <Container>
      {
        dataSize.map((x) => (
          <Span key={x} id={x} active={position === x}></Span>
        ))
      }
    </Container>
  );
}
