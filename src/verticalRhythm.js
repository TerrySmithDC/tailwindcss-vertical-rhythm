const plugin = require("tailwindcss/plugin");
const { createStyles } = require("./utils");
const pluginConfig = require("./config");
const reduce = require("lodash/reduce");
const assign = require("lodash/assign");

module.exports = plugin(function verticalRythem({
  addComponents,
  addBase,
  config,
  theme,
  e,
}) {
  const customFactors = theme("factor", {});
  const {
    basePixel,
    baseSize,
    baseLineHeight,
    capHeight,
    headerSpacingBefore,
    headerSpacingAfter,
    lineHeightMod,
    createValue,
    scale,
    unit,
  } = pluginConfig({ config, theme });

  const defaultStyles = {
    baseSize,
    baseLineHeight,
    capHeight,
    headerSpacingBefore,
    headerSpacingAfter,
    lineHeightMod,
    createValue,
    scale,
    unit,
  };

  const defaultFactorStyles = createStyles(defaultStyles);

  addBase({
    html: { fontSize: `${basePixel}px`, lineHeight: baseLineHeight },
    body: { fontSize: `${basePixel}px`, lineHeight: baseLineHeight },
  });

  const factors = {
    ".factor-xs": defaultFactorStyles(-1),
    ".factor-sm": defaultFactorStyles(-0.5),
    ".factor-base": defaultFactorStyles(0),
    ".factor-lg": defaultFactorStyles(1),
    ".factor-xl": defaultFactorStyles(2),
    ".factor-2xl": defaultFactorStyles(3),
    ".factor-3xl": defaultFactorStyles(4),
    ".factor-4xl": defaultFactorStyles(5),
  };

  const generatedFactors = reduce(
    customFactors,
    function (
      result,
      [factor, { lineHeightMod, headerSpacingBefore, headerSpacingAfter }],
      name
    ) {
      const customFactorStyles = assign(
        {
          baseSize,
          baseLineHeight,
          capHeight,
          headerSpacingBefore,
          headerSpacingAfter,
          lineHeightMod,
          createValue,
          scale,
          unit,
        },
        defaultStyles
      );
      return {
        [`.${e(`factor-${name}`)}`]: createStyles(customFactorStyles)(factor),
        ...result,
      };
    },
    {}
  );

  addComponents({ ...factors, ...generatedFactors });
});
