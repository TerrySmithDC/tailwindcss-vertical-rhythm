# Looking for help!

There are issues in the reporistory availble, mostly documentation/examples as the plugin itself is all ready fairly stable. Makes for easy contributions, happy hacktoberfest!

Keep things respectful and professional.

You should likely fork the repo and make PRs from your fork.

## Making an example

Within the `example` folder, clone an example and rename it. From the root of the project you can run the following commands.

- `make build folder=example-example`

- `make serve folder=example-example`

Replacing `example-example` with your new example folder name.

Add the example to the list on `public/index.html`, you must use the absolute url in the likw with that matching generated folder from the `make build` command.

Commit the example and public files with you're pr! Examples will auto deploy on merge to `main`.
