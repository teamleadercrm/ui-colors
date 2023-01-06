const COLOR = require("../colors.json");
const colorConvert = require("color-convert");
const fs = require("fs");

function getColorCSS(color, tint, hex) {
  const name = !tint || tint === "normal" ? color : `${color}-${tint}`;
  const [h, s, l] = colorConvert.hex.hsl
    .raw(hex)
    .map((number) => parseFloat(number.toFixed(2)));

  return `
  --color-${name}-hsl-h: ${Math.round(h)};
  --color-${name}-hsl-s: ${s}%;
  --color-${name}-hsl-l: ${l}%;
  --color-${name}: hsl(var(--color-${name}-hsl-h), var(--color-${name}-hsl-s), var(--color-${name}-hsl-l));`;
}

let css = ":root {";

Object.keys(COLOR).forEach((color) => {
  Object.keys(COLOR[color]).forEach((tint) => {
    const hex = COLOR[color][tint];
    css += getColorCSS(color.toLowerCase(), tint.toLowerCase(), hex);
  });
});

// "secretly" adding some extra colors that are not really documented, but that we're using anyways.
css += getColorCSS("black", null, "#000");
css += getColorCSS("white", null, "#fff");
css += getColorCSS("marketing-violet", "lightest", "#e9e8ff");
css += getColorCSS("marketing-violet", "light", "#d3d1fe");
css += getColorCSS("marketing-violet", null, "#4f1fff");
css += getColorCSS("marketing-violet", "dark", "#2800b8");

css += "\n}";

fs.writeFileSync("index.css", css);
