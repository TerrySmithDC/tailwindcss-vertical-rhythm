# Tailwindcss-vertical-rhythm

A tailwind plugin which helps create scaling typography.

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
  //further configurations
  plugins: [require("tailwindcss-vertical-rhythm")]
}
```

## Extracting Classes

The plugin by default generates the following classes 

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

You can extract the ones you are using in a single class in your `tailwind.css` file to reuse code

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  //name of class
  .content {
    //css that will be applied
    @apply factor-sm factor-base factor-lg factor-xl
  }
}
```

Later you can use the class in your code which you applied in the `tailwind.css` file
```html
<span class="content">very useful text</span>
```

You can learn more about extracting classes [here](https://tailwindcss.com/docs/extracting-components)

## Scale options

The plugin set's the root font-size of the site to `16px` and prefers `rem` units.

You can configure this behaviour in the `tailwind.config.js` file

```js
verticalRhythm: {
  basePixel: 14, // Change the base unit to 14px. Pass a number not a px value
  unit: "em"
},
```

# Dynamic Mode

Dynamic mode enables the use of [css clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()) and will scale the font size up and down depending on the vh of the device. By default the min and max are tailwind responsive theme values screens.md and screens.2xl.

This can also be customized by either passing a number value (no px) or accessing the tailwind theme function in your `taildwind.config.js` file:
```js
verticalRhythm: {
    maxScreen: theme("screens.lg").slice(0, -2), 
    minScreen: theme("screens.sm").slice(0, -2)
}
```
