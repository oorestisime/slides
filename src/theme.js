import { deepFreeze } from "grommet/utils";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const brand = "rgb(137, 189, 211)";
export const customTheme = deepFreeze({
  global: {
    colors: {
      background: "#ffffff",
      brand: brand,
      "toggle-bg": "#757575",
      "toggle-knob": "white",
      control: {
        dark: "#757575",
        light: "white"
      }
    },
    font: {
      family: "Montserrat, Arial, sans-serif"
    }
  },
  heading: {
    level: {
      2: {
        font: {
          weight: 400
        }
      },
      3: {
        font: {
          weight: 350
        }
      },
      4: {
        font: {
          weight: 300
        }
      },
      5: {
        font: {
          weight: 300
        }
      },
      6: {
        font: {
          weight: 300
        }
      }
    },
    weight: 500
  },
  anchor: {
    color: {
      dark: brand,
      light: brand
    }
  }
});

export default {
  font: "Montserrat, sans-serif",
  googleFont: "https://fonts.googleapis.com/css?family=Montserrat:400,900",
  h1: {
    fontWeight: 400
  },
  h2: {
    fontWeight: 400
  },
  h3: {
    fontWeight: 400
  },
  h4: {
    fontWeight: 400
  },
  monospace: '"Dank Mono", monospace',
  prism: {
    style: atomDark
  },
  img: {
    maxWidth: "100%"
  },
  weights: 400,
  li: {
    paddingBottom: "20px",
    fontFamily: '"Dank Mono", monospace'
  },
  ul: {
    listStyle: "none",
    paddingLeft: "20px",
    display: "inline-block"
  },
  colors: {
    text: "rgb(248, 248, 248)",
    background: "rgb(85, 85, 85)",
    link: "rgb(137, 189, 211)",
    pre: "#fff",
    preBackground: "rgb(137, 189, 211)",
    code: "#fff"
  }
};
