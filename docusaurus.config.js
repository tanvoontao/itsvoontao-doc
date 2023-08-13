// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Voon Tao",
  tagline: "Coding Dreams Into Reality, One Line At A Time.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/banner.jpg",
      navbar: {
        title: "Its Voon Tao",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Notes",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://www.linkedin.com/in/voon-tao-tan",
            label: "LinkedIn",
            position: "right",
          },
          {
            href: "https://itsvoontao.vercel.app/assets/resume.pdf",
            label: "Resume",
            position: "right",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      announcementBar: {
        id: "support_us",
        content:
          '⭐️ If my notes are helpful to you, you can consider to give me a star <a target="_blank" rel="noopener noreferrer" href="">Github</a>! ⭐️',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },

      colorMode: {
        defaultMode: "dark",
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Notes",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/voon-tao-tan",
              },
              {
                label: "Email",
                href: "mailto:tanvoontao0908@gmail.com",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/profile.php?id=100011450362958",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/wentao_0908",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@voontao.projects/videos",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/tanvoontao",
              },
              {
                label: "Resume",
                href: "https://itsvoontao.vercel.app/assets/resume.pdf",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} By Voon Tao (Grayson) Tan, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
