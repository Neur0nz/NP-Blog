import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {

  configuration: {
    pageTitle: "Nadavi's Blog",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "he-IS",
    baseUrl: "neur0nz.github.io/NP-Blog/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fbf1c7",       // Gruvbox background light
          lightgray: "#ebdbb2",   // Gruvbox light gray
          gray: "#d5c4a1",        // Gruvbox gray
          darkgray: "#665c54",    // Gruvbox dark gray
          dark: "#3c3836",        // Gruvbox darkest
          secondary: "#d79921",   // Gruvbox yellow
          tertiary: "#b16286",    // Gruvbox purple
          highlight: "rgba(184, 187, 38, 0.15)", // Gruvbox highlight with transparency
        },
        darkMode: {
          light: "#282828",       // Gruvbox background dark
          lightgray: "#3c3836",   // Gruvbox medium gray
          gray: "#504945",        // Gruvbox gray
          darkgray: "#d5c4a1",    // Gruvbox light gray
          dark: "#fbf1c7",        // Gruvbox lightest
          secondary: "#fabd2f",   // Gruvbox bright yellow
          tertiary: "#d3869b",    // Gruvbox bright purple
          highlight: "rgba(184, 187, 38, 0.15)", // Gruvbox highlight with transparency
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
