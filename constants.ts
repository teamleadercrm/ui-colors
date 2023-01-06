import without from "lodash.without";
import COLOR from "./colors.json";

export const COLORS = Object.keys(COLOR).map((key) =>
  key.toLowerCase()
) as unknown as Lowercase<keyof typeof COLOR>[];
export const TINTS = Object.keys(COLOR["AQUA"]).map((key) =>
  key.toLowerCase()
) as unknown as Lowercase<keyof typeof COLOR["AQUA"]>[];

export const colorsWithout = (colorsToExclude: typeof COLORS) =>
  without(COLORS, ...colorsToExclude);
export const tintsWithout = (tintsToExclude: typeof TINTS) =>
  without(TINTS, ...tintsToExclude);

export default COLOR;
export { COLOR };
