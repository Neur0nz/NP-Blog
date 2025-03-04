import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  // footer: Component.Footer({
  //   links: {
  //     "My GitHub": "https://github.com/Neur0nz",
  //     "Email Me": "mailto:nadavprr@gmail.com",
  //   },
  // }),
  footer: Component.Comments(),

}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    //Component.Graph(),
     Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(),
  ],
  right: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
    Component.Links({
      links: {
        GitHub: "https://github.com/Neur0nz",
        "Email": "mailto:nadavprr@gmail.com",
      },
  }),
  ],

}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
