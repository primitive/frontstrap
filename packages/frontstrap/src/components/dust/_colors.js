// Primitive Theme Variables
// COLOURS/COLORS

// basic 6charater hex only with #
const hexToRGB = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16),
      string = [r, g, b].toString();
  return string;
};

function hexToRGBA(h,a) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  //console.log("rgba("+ +r + "," + +g + "," + +b + "," + a + ")");
  return "rgba("+ +r + "," + +g + "," + +b + "," + a + ")";
}

// Base Colour system
const colors = {
  blue: "#0f52ba",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#d63384",
  red: "#cd2653",
  orange: "#F05E23",
  yellow: "#ffc107",
  green: "#87af4e",
  teal: "#20c997",
  cyan: "#17a2b8",
  white: "#ffffff",
  gray: "#6c757d",
  black: "#000000"
}

// Brand Colour system
const primitive = {
  redapple: "#E1623F",
  fluff: "#ADD8E6",
  mustard: "#ffdb58",
  greendark: "#6c8c3e",
  mango: "#ffc324",
  lime: "#00FF00",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  peach: "#eb966c",
  coal: "#0c112b",
  graphite: "#212529",
  midnight: "#0C0B13",
  cardboard: "#87635C",
  pinkish: "#D4AEA6",
  brightlime: "#d7f36d",
  teal: "#008080",
  watermelon: "#fc6c85",
  salmom: "#ff8c69",
  tomato: "#ff6347",
  coral: "#E1623F",
  cyan: "#00a5ba",
  ivory: "#fffff0",
  cream: "fffdd0",
  lightgray: "#e3e1dc",
  blackish: "#253d2d",
  olive: "#697138"
}


const themecolor = {
  blue: colors.blue,
  indigo: colors.indigo,
  purple: primitive.plum,
  pink: primitive.pink,
  red: colors.red,
  orange: primitive.mango,
  yellow: primitive.mustard,
  green: colors.green,
  teal: primitive.teal,
  cyan: primitive.cyan,
  brown: primitive.cardboard,

  coal: primitive.coal,
  ivory: primitive.ivory,
  cream: primitive.cream,
  peach: primitive.peach,
  fluff: primitive.fluff,
  lime: primitive.lime,
  mustard: primitive.mustard,
  greendark: primitive.greendark,

  black: colors.black,
  gray: colors.gray,
  white: colors.white,
  primary: colors.green,
  secondary: primitive.peach,
  tertiary: primitive.pinkish,
  success: primitive.brightlime,
  info: primitive.teal,
  warning: primitive.mustard,
  danger: primitive.redapple,

  rgb: {
    primary: hexToRGB(colors.green),
    secondary: hexToRGB(primitive.peach),
    tertiary: hexToRGB(primitive.pinkish),
    success: hexToRGB(primitive.brightlime),
    info: hexToRGB(primitive.teal),
    warning: hexToRGB(primitive.mustard),
    danger: hexToRGB(primitive.redapple),
    black: hexToRGB(primitive.coal),
    gray: hexToRGB(colors.gray),
    white: hexToRGB(colors.white)
  },

  disco: {
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    neongreen: "#01FF89",
    purple: "#7A5FFF",
    blue: "#00a8ff"
  },
}

export { themecolor, hexToRGB, hexToRGBA };