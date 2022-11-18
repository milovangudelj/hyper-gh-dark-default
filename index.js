'use strict';

const backgroundColor = "#0d1117";
const foregroundColor = "#c9d1d9";
const borderColor = "#f78166";
const cursorColor = "#c9d1d9";
const colors = {
	black: "#0d1117",
	red: "#ff7b72",
	green: "#3fb950",
	yellow: "#d29922",
	blue: "#58a6ff",
	magenta: "#bc8cff",
	cyan: "#76e3ea",
	white: "#b1bac4",
	lightBlack: "#161b22",
	lightRed: "#ffa198",
	lightGreen: "#56d364",
	lightYellow: "#e3b341",
	lightBlue: "#79c0ff",
	lightMagenta: "#d2a8ff",
	lightCyan: "#b3f0ff",
	lightWhite: "#b1bac4",
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
      }

      .tab_active:before {
        border-color: ${borderColor};
      }
    `,
  });
};
