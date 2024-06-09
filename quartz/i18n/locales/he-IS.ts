import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Untitled",
    description: "No description provided",
  },
  components: {
    callout: {
      note:"פתק",
      abstract: "תקציר",
      info: "מידע",
      todo: "לעשות",
      tip: "טיפ",
      success: "הצלחה",
      question: "שאלה",
      warning: "אזהרה",
      failure: "כישלון",
      danger: "סכנה",
      bug: "באג",
      example: "דוגמה",
      quote: "ציטוט",
    },
    backlinks: {
      title: "Backlinks",
      noBacklinksFound: "No backlinks found",
    },
    themeToggle: {
      lightMode: "Light mode",
      darkMode: "Dark mode",
    },
    explorer: {
      title: "מצא פוסטים",
    },
    footer: {
      createdWith: "נוצר באמצעות",
    },
    graph: {
      title: "הצגת גרף",
    },
    recentNotes: {
      title: "פתקים אחרונים",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "קישור למקורי",
    },
    search: {
      title: "חפש",
      searchBarPlaceholder: "חפש משהו",
    },
    tableOfContents: {
      title: "תוכן העניינים",
    },
    contentMeta: {
      readingTime: ({ minutes }) => ` זמן קריאה: ${minutes}  דקות`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Recent notes",
      lastFewNotes: ({ count }) => `${count} פתקים אחרונים`,
    },
    error: {
      title: "לא נמצא",
      notFound: "Either this page is private or doesn't exist.",
      home: "חזור לעמוד הבית",
    },
    folderContent: {
      folder: "תיקייה",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item under this folder." : `${count} items under this folder.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item with this tag." : `${count} items with this tag.`,
      showingFirst: ({ count }) => `Showing first ${count} tags.`,
      totalTags: ({ count }) => `Found ${count} total tags.`,
    },
  },
} as const satisfies Translation