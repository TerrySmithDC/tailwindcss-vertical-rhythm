const { scales } = require("./constants");
const { basicValue, clampValue, formatPxToRaw } = require("./utils");

module.exports = function config({ config, theme }) {
  const basePixel = config("verticalRhythm.basePixel") || 16;
  const baseSize = config("verticalRhythm.baseSize") || 1;
  const baseLineHeight = config("verticalRhythm.baseLineHeight") || 1;
  const unit = config("verticalRhythm.unit") || "rem";
  const capHeight = config("verticalRhythm.capHeight") || 0.68;
  const headerSpacingBefore =
    config("verticalRhythm.headerSpacing.before") || 0;
  const headerSpacingAfter = config("verticalRhythm.headerSpacing.after") || 0;
  const lineHeightMod = config("verticalRhythm.lineHeightMultiplier") || 1;
  const clampMultiplier = config("verticalRhythm.clampMultiplier") || 2;

  const minScreen =
    config("verticalRhythm.clampMin") || formatPxToRaw(theme("screens.md"));
  const maxScreen =
    config("verticalRhythm.clampMax") || formatPxToRaw(theme("screens.2xl"));

  const createValue =
    config("verticalRhythm.mode") === "dynamic"
      ? clampValue({
          minScreen,
          maxScreen,
          clampMultiplier,
          ppr: basePixel,
          unit,
        })
      : basicValue({ unit });

  let scale = scales["major third"]; // Default
  if (typeof config("verticalRhythm.scale") === "string") {
    scale = scales[config("verticalRhythm.scale").toLowerCase()];
  } else if (typeof config("verticalRhythm.scale") === "number") {
    scale = config("verticalRhythm.scale");
  }

  return {
    baseSize,
    baseLineHeight,
    capHeight,
    headerSpacingBefore,
    headerSpacingAfter,
    lineHeightMod,
    createValue,
    scale,
    basePixel,
    unit,
  };
};
