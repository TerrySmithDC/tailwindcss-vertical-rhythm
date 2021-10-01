function toPrecision(num, precision = 3) {
  return num.toPrecision(precision);
}

function fontSizeFactor({ scale, level = 0 }) {
  return Math.pow(scale, level);
}

function basicValue({ unit }) {
  return function (size) {
    return `${toPrecision(size)}${unit}`;
  };
}

function clampValue({ minScreen, maxScreen, clampMultiplier, ppr, unit }) {
  return function clamp(size) {
    // https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
    const min = size;
    const max = min * clampMultiplier;
    const minW = minScreen / ppr;
    const maxW = maxScreen / ppr;
    const slope = (max - min) / (maxW - minW);
    const yAxisIntersection = -minW * slope + min;

    return `clamp(${toPrecision(min)}${unit}, ${toPrecision(
      yAxisIntersection
    )}rem + ${toPrecision(slope * 100)}vw, ${toPrecision(max)}${unit})`;
  };
}

function createStyles({
  baseSize,
  baseLineHeight,
  capHeight,
  headerSpacingBefore,
  headerSpacingAfter,
  lineHeightMod,
  createValue,
  scale,
}) {
  return function styles(level) {
    const rhythmUnit = baseSize * baseLineHeight;
    const fontSize = baseSize * fontSizeFactor({ scale, level });
    const unitsInSize = (fontSize + 0.001) / rhythmUnit;
    const lineHeight = rhythmUnit * unitsInSize * lineHeightMod;
    const shift = (lineHeight - fontSize * capHeight) / 2;
    let paddingTop = shift;
    let marginBottom = (shift > rhythmUnit ? 2 : 1) * rhythmUnit - shift;

    if (level) {
      paddingTop += headerSpacingBefore * rhythmUnit;
      marginBottom += headerSpacingAfter * rhythmUnit;
    }

    return {
      fontSize: createValue(fontSize),
      lineHeight: createValue(lineHeight),
      paddingTop: createValue(paddingTop),
      marginBottom: createValue(marginBottom),
    };
  };
}

module.exports = { basicValue, createStyles, clampValue };
