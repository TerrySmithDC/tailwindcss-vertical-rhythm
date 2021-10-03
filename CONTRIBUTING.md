# Looking for help!

There are issues in the reporistory availble, mostly documentation/examples as the plugin itself is all ready fairly stable. Makes for easy contributions, happy hacktoberfest!

Keep things respectful and professional.

You should likely fork the repo and make PRs from your fork.

# Doc's Site

## Making an example

Within the `example` folder, clone an example and rename it. From the root of the project you can run the following commands.

- `make build folder=example-example`

- `make serve folder=example-example`

Replacing `example-example` with your new example folder name.

Add the example to the list on `public/index.html`, you must use the absolute url in the likw with that matching generated folder from the `make build` command.

Commit the example and public files with you're pr! Examples will auto deploy on merge to `main`.

## Updating the index.html

`make serve-index` and `make serve-build` should do the trick. You should be able to create html files and link them with reltative links to add more pages to the hosted site which _are not examples_.

Slight jank: Do **not** use relative links in the main `index.html` to link examples, hard code those with the absolute github pages url. Else Parcel will pick up the example folders and rebuild them using the root tailwind config.

# Why Makefile instead of scripts?

Because we need to run individual builds per example (multiple tailwind configs) it is pretty hard to wrap this into scripts. Rather then making a complex build config which watches all sub folders of examples the make commands (parcel v2) make a nice zero config dev experience.

If you dont have `make` installed or wish to run the commands you can look at the `Makefile` for what to run, replacing `$(folder)` with and example folder.

# I would like to work on the core plugin not docs/examples

> TODO: I need to write up what the plugin is and is not, I would like to keep the factor classes only applying `font-size`, `line-height`, `padding-top`, and `margin-top` for now. As this is fundamentally the main concerning css styles tied to establishing vertical rhyhm in designs.

That's welcome! This is still very early, the plugin itself lives in the `src/` folder.

I haven't yet laid out plans/fixes to the core code yet. Ideally create a ticket (bug or feature) first and then make a PR refrencing it. Be discriptive for the reasoning and funtionality of the change.

`config.js` is the sudo API layer for accepting custom configs, use that to add new options and provide a reasonable default.
