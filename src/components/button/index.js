import React from "react";

import { ButtonOutline, TextOutline, ButtonFilled, TextFilled } from "./styles";

export default function Button({ children, buttonType, ...rest }) {
  if (buttonType === "outline") {
    return (
      <ButtonOutline {...rest}>
        <TextOutline>{children}</TextOutline>
      </ButtonOutline>
    );
  }
  return (
    <ButtonFilled {...rest}>
      <TextFilled>{children}</TextFilled>
    </ButtonFilled>
  );
}
