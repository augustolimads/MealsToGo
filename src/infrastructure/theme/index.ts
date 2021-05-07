import { colors } from "./colors";
import { fonts, fontWeights, fontSizes } from "./fonts";
import { sizes, space, lineHeights } from "./sizes";

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

export type ThemeProps = typeof theme;
