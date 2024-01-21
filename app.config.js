export default ({ config }) => ({
  ...config,
  name: "Storybook Weather",
  slug: "storybook-Weather",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
