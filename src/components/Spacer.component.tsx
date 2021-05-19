import React from "react";
import styled from "styled-components/native";

interface SpacerProps {
  size?: 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 60;
  position?: "horizontal" | "vertical";
  children?: JSX.Element;
}

const SpacerHorizontal = styled.View<SpacerProps>`
  margin: 0 ${(props) => props.theme.space[props.size || 0]};
`;

const SpacerVertical = styled.View<SpacerProps>`
  margin: ${(props) => props.theme.space[props.size || 0]} 0;
`;

export default function Spacer({ size, position, children }: SpacerProps) {
  if (position === "vertical") {
    return <SpacerVertical size={size}>{children}</SpacerVertical>;
  } else {
    return <SpacerHorizontal size={size}>{children}</SpacerHorizontal>;
  }
}
