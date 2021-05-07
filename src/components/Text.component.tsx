import styled from "styled-components/native";
import { ThemeProps } from "../infrastructure/theme";

const defaultTextStyles = (theme: ThemeProps) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: ThemeProps) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: ThemeProps) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: ThemeProps) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: ThemeProps) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: ThemeProps) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

interface TextProps {
  variant: "body" | "label" | "caption" | "error" | "hint";
  theme: ThemeProps;
}

export const Text = styled.Text<TextProps>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
