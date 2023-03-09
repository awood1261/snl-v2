/** @type { import('@storybook/react').Preview } */
import 'tailwindcss/tailwind.css';

const preview = {
  parameters: {
    backgrounds: {
      default: "darkbrown",
      values: [
        {
          name: "darkbrown",
          value: "#150d0c"
        },
        {
          name: "coffeebrown",
          value: "#5e2408"
        },
        {
          name: "rust",
          value: "#693d1a"
        }
      ]
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
