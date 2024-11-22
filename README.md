# CSCE240 Website

A Technical Documentation Website that teaches the C++ concepts learned in CSCE240 Advanced Programming Techniques at the University of South Carolina.

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

## Details

- [Astro](https://astro.build/) - Web Framework

- [Catppuccin](https://github.com/TheOtterlord/catppuccin-starlight) - Color Theme plugin

    - Project wouldn't build using `catppuccin()`
    - Easy fix is to copy and paste the CSS files into a `styles` folder in the `src` folder
    - Update `astro.config.mjs` using the `customCss` key:
```js
    export default defineConfig({
        integrations: [
            starlight({
                customCss: [
                    // Import shared, a light theme, and a dark theme
                    "./src/styles/shared.css",
                    "./src/styles/catppuccin-latte-blue.css",
                    "./src/styles/catppuccin-mocha-blue.css",
                ],
            })
        ]
    })
```
- Fonts through [Fontsource](https://fontsource.org/):
    - [Inter](https://fontsource.org/fonts/inter) - Base Font
    - [Fira Code](https://fontsource.org/fonts/fira-code) - Code Font
    - [Trirong](https://fontsource.org/fonts/trirong) - Heading Font

- [Excalidraw](https://excalidraw.com/) - Drawing Tool

- [Favicon.io](https://favicon.io/) - Favicon Generator

- [Inkscape](https://inkscape.org/) - Graphic Design

- [Starlight](https://starlight.astro.build/) - Astro Technical Documentation Template

- [TinyPNG](https://tinypng.com/) - Image Compression