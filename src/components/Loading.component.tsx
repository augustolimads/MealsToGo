import React from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../infrastructure/theme/colors";
import styled from "styled-components/native";

const LoadingStyled = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <LoadingStyled>
      <ActivityIndicator color="red" size="large" />
    </LoadingStyled>
  );
}
