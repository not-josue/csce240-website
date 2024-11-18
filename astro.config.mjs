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
        src: "./src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/not-josue/csce240-website",
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
          label: "Welcome, Students!",
          items: [
            {
              label: "Overview",
              slug: "welcome/overview",
            },
            {
              label: "History of C++",
              slug: "welcome/history",
            },
            {
              label: "Language Basics",
              slug: "welcome/language-basics",
            },
            {
              label: "Style Requirements",
              slug: "welcome/style-requirements",
            },
          ],
        },
        {
          label: "Setup Environment",
          items: [
            {
              label: "Downloading Tools",
              slug: "environment/downloading-tools",
            },
            {
              label: "VSCode Setup",
              slug: "environment/visual-studio-code",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Cpplint Reference",
              slug: "reference/cpplint-reference",
            },
            {
              label: "Google Style Reference",
              slug: "reference/google-style-reference",
            },
            {
              label: "Keyword Reference",
              slug: "reference/keyword-reference",
            },
          ],
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
        "@fontsource/trirong/600.css",
        "@fontsource/trirong/700.css",
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
