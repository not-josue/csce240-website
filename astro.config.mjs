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
          label: "Basic Syntax",
          items: [
            {
              label: "Basic Structure",
              slug: "syntax/basic-structure",
            },
            {
              label: "Variables & Constants",
              slug: "syntax/variables-and-constants",
            },
            {
              label: "Arithmetic Operations",
              slug: "syntax/arithmetic-operations",
            },
            {
              label: "Makefile",
              slug: "syntax/makefile",
            },
          ],
        },
        {
          label: "Control Flow",
          items: [
            {
              label: "Control Stuctures",
              slug: "control/control-structures",
            },
            {
              label: "Logical Expressions",
              slug: "control/logical-expressions",
            },
            {
              label: "If-Else Statements",
              slug: "control/if-else-statements",
            },
            {
              label: "Switch Statements",
              slug: "control/switch-statements",
            },
            {
              label: "Loops",
              slug: "control/loops",
            },
          ],
        },
        {
          label: "Functions",
          items: [
            {
              label: "Introduction",
              slug: "functions/intro",
            },
            {
              label: "Writing & Using",
              slug: "functions/writing-and-using",
            },
            {
              label: "Scope",
              slug: "functions/scope",
            },
            {
              label: "Separate Compilation",
              slug: "functions/separate-compilation",
            },
            {
              label: "Misc Topics",
              slug: "functions/misc-topics",
            },
          ],
        },
        {
          label: "Arrays",
          items: [
            {
              label: "Basics",
              slug: "arrays/basics",
            },
            {
              label: "C-Style Strings",
              slug: "arrays/strings",
            },
            {
              label: "Passing To Functions",
              slug: "arrays/passing-to-functions",
            },
            {
              label: "Algorithms",
              slug: "arrays/algorithms",
            },
            {
              label: "Multi-Dimensional",
              slug: "arrays/multi-dimensional",
            },
          ],
        },
        {
          label: "Pointers",
          items: [
            {
              label: "What Are They?",
              slug: "pointers/what-are-they",
            },
            {
              label: "With Arrays",
              slug: "pointers/with-arrays",
            },
            {
              label: "With Functions",
              slug: "pointers/with-functions",
            },
          ],
        },
        {
          label: "Classes",
          items: [
            {
              label: "OOP",
              slug: "classes/oop",
            },
            {
              label: "Structs",
              slug: "classes/structs",
            },
            {
              label: "Basics",
              slug: "classes/basics",
            },
            {
              label: "Basic Example",
              slug: "classes/basic-example",
            },
            {
              label: "Composition",
              slug: "classes/composition",
            },
            {
              label: "Composition Example",
              slug: "classes/composition-example",
            },
            {
              label: "Namespaces",
              slug: "classes/namespaces",
            },
            {
              label: "Inheritance",
              slug: "classes/inheritance",
            },
            {
              label: "Inheritance Example",
              slug: "classes/inheritance-example",
            },
            {
              label: "Polymorphism",
              slug: "classes/polymorphism",
            },
            {
              label: "Polymorphism Example",
              slug: "classes/polymorphism-example",
            },
          ],
        },
        {
          label: "Templates",
          items: [
            {
              label: "Template Functions",
              slug: "templates/functions",
            },
            {
              label: "Template Classes",
              slug: "templates/classes",
            },
          ],
        },
        {
          label: "References",
          items: [
            {
              label: "Cpplint Reference",
              slug: "references/cpplint-reference",
            },
            {
              label: "Google Style Reference",
              slug: "references/google-style-reference",
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
