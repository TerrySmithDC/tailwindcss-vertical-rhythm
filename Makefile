build:
	cd examples/$(folder); npx parcel build index.html --public-url https://terrysmithdc.github.io/tailwindcss-vertical-rhythm/$(folder) --dist-dir ../../public/$(folder)

serve:
	cd examples/$(folder); npx parcel serve index.html 