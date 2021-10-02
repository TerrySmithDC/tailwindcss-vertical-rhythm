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

You can use a tailwind.css file for extracting classes and reuse code

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  //name of class
  .blue {
    //css that will be applied
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
```
Learn more about extracting classes [here](https://tailwindcss.com/docs/extracting-components)

## Scale options

Tailwind allows you to easily scale images using `scale-*`, you can configure the tag according to your needs in the `tailwind.config.js` file we made earlier

```js
  module.exports = {
    theme: {
      scale: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
      }
    }
  }
```
Learn more about scale [here](https://tailwindcss.com/docs/scale)
## Dynamic mode
To disabled dynamic mode you can remove the following lines from your `tailwind.config.js`
```diff
- verticalRhythm: {
-    mode: "dynamic",
-  },
```
