# Looking for help!

There are issues in the repository available, mostly documentation/examples as the plugin itself is already fairly stable. Makes for easy contributions, happy hacktoberfest!

Keep things respectful and professional.

You should likely fork the repo and make PRs from your fork.

# Docs Site

## Making an example

Within the `example` folder, clone an example folder and rename it. From the root of the project you can run the following commands.

- `make serve folder=some-example`
- `make build folder=some-example`

Replacing `some-example` with your new example folder name.

When you're happy with the example make sure to run `make build folder=some-example` Then add your example to the list on `public/index.html`, run `make build-index`

Commit the example and public files with your pull request! Examples will auto deploy on merge to `main`.

## Updating the index.html

`make serve-index` and `make serve-build` should do the trick. You should be able to create html files and link them with relative links to add more pages to the hosted site which _are not examples_.

Slight jank: Do **not** use relative links in the main `index.html` to link examples, hard code those with the absolute github pages url. Else Parcel will pick up the example folders and rebuild them using the root tailwind config.

# Why Makefile instead of scripts?

Because we need to run individual builds per example (multiple tailwind configs) it is pretty hard to wrap this into scripts. Rather than making a complex build config which watches all sub folders of examples the make commands (parcel v2) make a nice zero config dev experience.

If you don't have `make` installed or wish to run the commands you can look at the `Makefile` for what to run, replacing `$(folder)` with an example folder.

# I would like to work on the core plugin not docs/examples

> I would like to keep the factor classes only applying `font-size`, `line-height`, `padding-top`, and `margin-top` for now. As this is fundamentally the main concerning css styles tied to establishing vertical rhythm in designs.

That's welcome! This is still very early, the plugin itself lives in the `src/` folder.

I haven't yet laid out plans/fixes to the core code yet. Ideally create a ticket (bug or feature) first and then make a PR referencing it. Be descriptive for the reasoning and functionality of the change.

`config.js` is the sudo API layer for accepting custom configs, use that to add new options and provide a reasonable default.
