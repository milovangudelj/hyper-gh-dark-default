'use strict';

const headerBackgroundColor = "#010409";
const backgroundColor = "#0d1117";
const foregroundColor = "#c9d1d9";
const borderColor = "#30363d";
const cursorColor = "#58A6FF";
const accentColor = "#f78166";
const selectionColor = "rgba(56,139,253,0.15)";
const colors = {
	black: "#0d1117",
	red: "#ff7b72",
	green: "#3fb950",
	yellow: "#d29922",
	blue: "#58a6ff",
	magenta: "#bc8cff",
	cyan: "#76e3ea",
	white: "#b1bac4",
	lightBlack: "#424f62",
	lightRed: "#ffa198",
	lightGreen: "#56d364",
	lightYellow: "#e3b341",
	lightBlue: "#79c0ff",
	lightMagenta: "#d2a8ff",
	lightCyan: "#b3f0ff",
	lightWhite: "#b1bac4",
	colorCubes: "#b1bac4",
	grayscale: "#484f58",
};

exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor,
		cursorColor,
		cursorShape: "BEAM",
		cursorBlink: true,
		selectionColor,
		colors,
		termCSS: `
      ${config.termCSS || ""}
    `,
		css: `
    .hyper_main {
      border: none !important;
    }
    .header_header {
      background: ${headerBackgroundColor} !important;
    }
    .tab_tab {
      color: ${foregroundColor};
      background: ${headerBackgroundColor} !important;
      border: 0;
    }
    .tab_tab.tab_active {
      color: ${colors.white};
      border-bottom: 1px solid ${accentColor} !important;
      background: ${backgroundColor} !important;
    }
    .tabs_borderShim {
      border-color: transparent !important;
    }
    ${config.css || ""}
    `,
	});
};
