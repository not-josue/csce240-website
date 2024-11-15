import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  // You can set configuration options here
  plugins: [pluginLineNumbers()],
  defaultProps: {
    showLineNumbers: true,
    overridesByLang: {
      bash: {
        showLineNumbers: false,
      },
    },
  },
};
