import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  // You can set configuration options here
  plugins: [pluginLineNumbers()],
  defaultProps: {
    showLineNumbers: true,
    overridesByLang: {
      // Bash - don't show line #s, and mark the 1st line
      bash: {
        showLineNumbers: false,
        mark: 1,
      },
      zsh: {
        showLineNumbers: false,
      },
      shell: {
        showLineNumbers: false,
      },
    },
  },
};
