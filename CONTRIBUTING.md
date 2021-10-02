# Looking for help!

There are issues in the reporistory availble, mostly documentation/examples as the plugin itself is all ready fairly stable. Makes for easy contributions, happy hacktoberfest!

Keep things respectful and professional.

## Making an example

Create a new folder or copy an example in public

New folder:

- `npx tailwind init`, to the new tailwind config:
  - Add the plugin to the plugins array: `require("../../src/index.js")`
  - Set purge to look at the index: `purge: ["index.html"],`
  - _optional_ Set tailwind to jit, it's super fast but still early development.
- Create a sub folder called `src`, make a `tailwind.css` file there importing the tailwind base.
- Create an `index.html` file linking the compiled `style.css` file.

## Commands for examples

cd into the example folder, you'll want to run two seperate commands.

`npx serve .` -> Quick static site to serve the index. No live refresh.
`npx tailwindcss -i ./src/tailwind.css -o ./style.css -w` -> Builds the source tailwind file in watch mode.

### Make cool examples
