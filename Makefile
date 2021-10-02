build:
	cd examples/$(folder); ../../node_modules/.bin/parcel build index.html --public-url https://terrysmithdc.github.io/tailwindcss-vertical-rhythm/$(folder) --dist-dir ../../public/$(folder)

serve:
	cd examples/$(folder); ../../node_modules/.bin/parcel serve index.html 