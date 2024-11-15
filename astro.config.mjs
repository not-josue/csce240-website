// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Learn C++",
      description:
        "A C++ tutorial for CSCE 240 Advanced Programming Techniques at the University of South Carolina",
      logo: {
        dark: "./src/assets/logo-dark.svg",
        light: "./src/assets/logo-light.svg",
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      head: [
        // Favicons
        {
          tag: "meta",
          attrs: {
            rel: "apple-touch-icon",
            href: "/favicons/apple-touch-icon.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            rel: "icon",
            sizes: "32x32",
            href: "/favicons/favicon-32x32.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            rel: "icon",
            sizes: "16x16",
            href: "/favicons/favicon-16x16.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            rel: "manifest",
            href: "/favicons/site.webmanifest",
          },
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: [
        // Base Font
        "@fontsource/inter/400.css",
        "@fontsource/inter/400-italic.css",
        "@fontsource/inter/600.css",
        "@fontsource/inter/600-italic.css",
        // Code Font
        "@fontsource/fira-code/400.css",
        "@fontsource/fira-code/600.css",
        // Headings Font
        "@fontsource/playfair-display/600.css",
        "@fontsource/playfair-display/700.css",
        // Fonts CSS
        "./src/styles/custom.css",
        // Catppuccin (not working when building)
        "./src/styles/shared.css",
        "./src/styles/catppuccin-latte-blue.css",
        "./src/styles/catppuccin-mocha-blue.css",
      ],
    }),
  ],
});
