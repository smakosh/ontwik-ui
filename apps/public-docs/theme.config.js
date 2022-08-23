export default {
  github: "https://github.com/smakosh/ontwik-ui",
  docsRepositoryBase:
    "https://github.com/smakosh/ontwik-ui-2/blob/main/apps/public-docs/pages",
  branch: "master",
  path: "/",
  titleSuffix: " – Ontwik UI",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: false,
  footer: true,
  footerText: "MIT 2022 © Smakosh",
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <>
      <span>Ontwik UI - </span>
      <span>A Headless UI React library</span>
    </>
  ),
  head: () => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Ontwik UI: the headless UI React library"
      />
      <meta
        name="og:title"
        content="Ontwik UI: the headless UI React library"
      />
    </>
  ),
};
