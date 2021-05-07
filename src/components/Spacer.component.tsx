import React from "react";
import styled from "styled-components/native";

interface SpacerProps {
  size?: number;
  position?: "horizontal" | "vertical";
}

const SpacerHorizontal = styled.View<SpacerProps>`
  margin: 0 ${(props) => props.theme.space[props.size || 0]};
`;

const SpacerVertical = styled.View<SpacerProps>`
  margin: ${(props) => props.theme.space[props.size || 0]} 0;
`;

export default function Spacer({ size, position }: SpacerProps) {
  if (position === "vertical") {
    return <SpacerVertical size={size} />;
  } else {
    return <SpacerHorizontal size={size} />;
  }
}
