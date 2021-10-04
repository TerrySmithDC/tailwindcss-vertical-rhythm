# Tailwindcss-vertical-rhythm

A tailwind plugin which helps create scaling typography. It does the CSS math so you don't have to.

The term **vertical rhythm** is a old typography practice designers have been using for years, it controls the flow of a piece of media's content improving the readability of content and creating a coheasive looking design. This has become an increasingly difficult problem in the digital age with the variation of
screen sizes, pixel densitity ratio's and changing containers giving designers less control over the final output and why it's _usually_ best to leverage existing base kits like Tailwind's defaults, Bootstrap, etc. Unless you want to be a font/type nerd; then this is the plugin for you. 💖

## Features:

- Modular Scaling
- Vertical Rhythm (of course)
- Dynamic Font Scaling
- Keeps Fonts Accessible
- Does Not Modify Default Tailwind (caveat: it does set a font size on the `<body>` tag)
- Highly Customizable

This plugin started as a side project focusing in on typography on the web, partularily with scaling font size to the screen size. I was annoyed with how tiny of fonts most websites use for ultra wide screens with high resolutions. Basically the higher the resolution the smaller the text. Refusing to admit I'm old I started looking into the topic and here we are.

# Installation

You can install the library using your prefered package manager

## NPM

```sh
npm install tailwindcss-vertical-rhythm
```

## Yarn

```sh
yarn add tailwindcss-vertical-rhythm
```

## PNPM

```sh
pnpm add tailwindcss-vertical-rhythm
```

# Configuration

Add `tailwindcss-vertical-rhythm` as a plugin in `tailwind.config.js`

```js
module.exports = {
  ...
  verticalRhythm: {}, // Optional: High level plugin settings
  plugins: [require("tailwindcss-vertical-rhythm")]
  ...
}
```

# Basic use

The plugin by default generates the following classes, you do not need to set any configs if you want to just have some easy base type styles.

Add factor classes to text blocks, they apply `font-size`, `line-height`, `padding-top`, and `margin-bottom`.

```
factor-xs
factor-sm
factor-base
factor-lg
factor-xl
factor-2xl
factor-3xl
factor-4xl
```

Example HTML:

```html
<h1 class="factor-xl">very useful text</h1>
<h2 class="factor-lg">sub heading</h2>
<p class="factor-base">Some great content</p>
```

# How it works

## Thinking in factors

When dealing with digital screens it's best to think of font sizes as being relative vs pixel perfect. Most designs now a days us a pre defined scale and stick to that to be consistent, but the problem is as we get more varried resolutions on devices the designs start looking different. It's generally considered "good enough" because it's not worth the development effort to tune the translation from a designers vision into practice across all these devices.

Tailwind's text sizing classes are great but also have the problem of the rem based font sizes are rendered at a different ratio of screen space depending on the device.

The most basic lego block of a website using vertical rhythm is starting with a base font size and scaling up or down from there using a **modular scale**.

Lets say the base size of a html document is 16px per 1rem, this is the base factor. The next factor up would be your base (1rem) times a modular scale, let's use a major third.

> 1rem \* 1.25 = 1.25rem

Ok we have a base factor and a factor one size up. The next factor up would be calculated on the previous value times the modular scale.

| Factor Name | Calculation         | Final Size (rem) |
| ----------- | ------------------- | ---------------- |
| base        | 1rem                | 1rem             |
| lg          | 1rem \* 1.25        | 1.25rem          |
| xl          | 1.25rem \* 1.25     | 1.5625rem        |
| 2xl         | 1.5625rem \* 1.25   | 1.95325rem       |
| 3xl         | 1.953125rem \* 1.25 | 2.4415625rem     |

This concept of scaling font sizes has been around for a while, and it often talked about along with grid systems (and maybe the golden ratio) back when you'd need a library to do it instead of using flexbox or grid. There's even calculators out there s oyou can set up your own modular scale online, however these either require you to manually manage hard coded values, use css `calc()` which can be expensive, or use a post processor like sass.

Ok now that we know how modular scales work, what can be applied to it? Quiet a bit really, however now that we have `font-size` on a modular scale there's a few more things to worry about. As fonts get larger in CSS we also need to worry about line hieght (covered in tailwinds font sizes as of 2.0), white spacing before and after while also matching the modular scale to maintain the vertical rhythm as the eye skims a page.

Base, second, third, fifth factors don't feel very in the spirit of Tailwind so factor classes follow a similar naming convention of `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`.

## But wait! Things still don't look 100%

We're still dealing with a few variables which will impact the level of tuning needing for your tailwind project. I've tried to provide sensible defaults but there is still room for improvement.

- Not all fonts are made equal.
- Resolution and pixel density are still affecting the design.

Every font family (and custom font faces you might be using) have different properties and are made with varrying qualities. Generally fronts from the largest foundaries are good but some times you need the ability to fine tune things to better suite the specific font. For example: Often san serif fonts benifit from a little extra line height to increase readability, especiallywith multiple paragraphs. The Vertical Rhythm plugin allows you to manually tune this insteal of using the default in the configs. You can also create your own custom factors to be used with different fonts!

**Remember that neg that spawned this whole plugin?** Out of the box the this plugin defaults to setting up the vertical rhythm of a site, but we're still suffering from fonts rendering slightly differently depending on the resolution. using relative units like `rem` is certainly better then absolute values like `px` but we're still having accessibility and readability problems with fonts being too small on high resolution phones and super large screens.

Enter dynamic font scaling (AKA the dynamic mode ). A relatively new CSS feature called `clamp()` addresses this problem, it scales a value up and down between two ranges. Be default factors scale baed tailwinds responsive size `screens.sm` screen size to `screens.xl`, taking account of the horizontal screen space and _scaling_ the factor up or down depending on the realestate availble. At this point we're really leaving the realm of worrying about an absolute size metric for fronts and letting our chosed scale and factor focus on making sure the page is rendering beautifully.

## What about the [official Tailwind Typography plugin](https://github.com/tailwindlabs/tailwindcss-typography)?

I haven't had the chance to test combining the two yet, but that plugin is great! It's meant to be a one stop shop that applies default styles to your entire site. This Vertical Rhythm plugin is less oppinionated and injects less styles out of the box. It focus's only on font size, line height, and spacing around with the option to enable scaling type with the screen size. Vertical Rhythm is likely better suited for people who want less out of the boss and more control over the rendering of their fonts.

## Why In Tailwind?

For one I LOVE building my projects in tailwind so I was all ready wanting to use it. First problem tailwind provides is it allows easy configuration interface to dial in your typography and it also provides responsive screen sizes I can use to calculate the correct slope when dealing with dynamic front scaling. Because Tailwindcss is a PostCSS plugin it also let's the calculations run on build time and not impact browser performance at all like some `calc` solutions would. ✨

Tailwind users also are all ready used to working with utilities and restraining designs besed on scales so using factors feels pretty natural integrating into a design.

# Further Configuration

## The Default Base Factor

This plugin defaults to `rems` with a base pixels per rem of `16px` and a scale of the above example `"Major Third"` but you can modify this as you wish in the plugin configs, some designers and developers prefer using a base of 10px to make rem math easier, however you likely wont need that with this plugin.

You can configure this behaviour in the `tailwind.config.js` file

```js
{
    ...
    verticalRhythm: {
        basePixel: 14, // Change the base unit to 14px. Pass a number not a px value
        unit: "em"
    },
    theme: {},
    ...
}
```

# The Modular Scale

The plugin provides 8 scales out of the box and can accept a custom scale through configs.

| Name                     | Value |
| ------------------------ | ----- |
| Minor third              | 1.2   |
| Major third (default)    | 1.25  |
| Fourth                   | 1.333 |
| Fifth                    | 1.5   |
| Fibonacci (golden ratio) | 1.618 |
| Minor seventh            | 1.778 |
| Major seventh            | 1.875 |
| Octave                   | 2     |

```js
{
    ...
    verticalRhythm: {
        scale: "fibonacci"
    },
    ...
}
```

```js
{
    ...
    verticalRhythm: {
        scale: 1.234
    },
    ...
}
```

# Dynamic Mode

Dynamic mode switches type rendering over to use dynamic font scaling while using the vertical rythm values with the use of [css clamp](<https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()>). Text will now scale linearly up and down depending on the vw of the device based on [this great CSS Tricks article by Pedro Rodriguez](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/).

### Linear Scaling Zones

The zones fonts scale be customized by either passing a number value or accessing the tailwind theme function in your `taildwind.config.js` file. By default the min and max are tailwind responsive theme values `screens.md` and `screens.2xl`.

```js
{
    ...
    verticalRhythm: {
        minScreen: theme("screens.md")
        maxScreen: theme("screens.lg")
    },
    ...
}
```

### Size Multiplier

By default the font is set to double in size compared to the smallest possible value. When in dynamic mode the regular factors are the size values use for the smallest sceens. The font height, line height and white spacing is then scaled up as there is more screen space availble.

This can be modified inside the `taildwind.config.js` configuration:

```js
{
    ...
    verticalRhythm: {
        clampMultiplier: 1.5
    },
    ...
}
```

# Extracting Classes

You can extract factors along with your other type stylings in a single class in your `tailwind.css` file to reuse code

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  /* name of class */
  .content {
    /* css that will be applied */
    @apply factor-base leading-relaxed subpixel-antialiased font-light;
  }
}
```

Later you can use the class in your code which you applied in the `tailwind.css` file

```html
<p class="content">very useful text</p>
```

You can learn more about extracting classes [here](https://tailwindcss.com/docs/extracting-components)

# Custom Factors

## Still in early development here!

You can also create your own factors via Tailwind's theme functionality. In the event you want to get really into the wreeds of tuning font rendering, you can create your own custom set of factors. An individual factor is an an array which takes the factor multiplier to use + custom modifiers for the final style calculation. It is still leveraging the overall `verticalRhythm` configutation including the selected `scale`.

```js
"your-class": [2 /* Factor multiplier */, {
    lineHeightMod: 1 // Adjusts line hight calculation, useful for tunung custom font faces. (Multiplier)
headerSpacingBefore: 10, // Adjusts whitespace before text block (Additive)
headerSpacingAfter: 10, // Adjusts whitespace after text block (Additive)
} ]
```

```js
theme: {
    factor: {
        // creates class "factor-serif-base"
        "serif-base": [ 1,
            {
                lineHeightMod: 0.8,
                headerSpacingBefore: 10
                headerSpacingAfter: 10,
            },
        ],
        ...
        // creates class "factor-serif-8xl"
        "serif-8xl": [ 4,
            {
                lineHeightMod: 0.7,
                headerSpacingBefore: 10
                headerSpacingAfter: 10,
            },
        ],
    },
}
```
