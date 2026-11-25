export interface TranslationFaqItem {
  question: string;
  answer: string;
}

export interface TranslationEditorialSection {
  title: string;
  paragraphs: string[];
}

export interface TranslationAffiliateItem {
  category: string;
  title: string;
  description: string;
  ctaLabel: string;
  url: string;
}

export interface Translations {
  seo: {
    title: string;
    description: string;
    appDescription: string;
    howToName: string;
    howToDescription: string;
  };
  nav: {
    auditor: string;
    howItWorks: string;
    savedAudits: string;
    faq: string;
    languageLabel: string;
  };
  hero: {
    privacyLead: string;
    h1: string;
    subtitle: string;
    zeroUploadGuarantee: string;
    safetyWarningTitle: string;
    safetyWarningBody: string;
  };
  steps: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: [
      {num: string; title: string; detail: string; pathHint: string},
      {num: string; title: string; detail: string; pathHint: string},
      {num: string; title: string; detail: string; pathHint: string},
    ];
  };
  dropzone: {
    title: string;
    subtitle: string;
    browseBtn: string;
    sampleBtn: string;
    processingLabel: string;
    acceptedFormats: string;
    loadedSummaryLabel: string;
    formatDetectedLabel: string;
    filesParsedLabel: string;
    sampleBadge: string;
    errorInvalidZip: string;
    errorMissingLists: string;
    errorEncryptedZip: string;
    errorGeneric: string;
  };
  results: {
    emptyTitle: string;
    emptyBody: string;
    tabs: {
      notFollowingBack: string;
      mutuals: string;
      followers: string;
      following: string;
    };
    metrics: {
      notFollowingBackSub: string;
      mutualsSub: string;
      followersSub: string;
      followingSub: string;
    };
    searchPlaceholder: string;
    sortLabel: string;
    sortOptions: {
      az: string;
      za: string;
      newest: string;
      oldest: string;
    };
    copyListBtn: string;
    copiedListBtn: string;
    exportCsvBtn: string;
    exportJsonBtn: string;
    printBtn: string;
    clearSessionBtn: string;
    tableHeaders: {
      index: string;
      username: string;
      exportedDate: string;
      relationship: string;
      actions: string;
    };
    relationships: {
      notFollowingBack: string;
      mutual: string;
      followerOnly: string;
      following: string;
    };
    copySingle: string;
    copiedSingle: string;
    openProfile: string;
    noSearchMatches: string;
    noUnfollowersCongrats: string;
    showingRange: string;
    showMoreBtn: string;
    unknownDate: string;
  };
  saved: {
    title: string;
    subtitle: string;
    privacyNote: string;
    notePlaceholder: string;
    saveBtn: string;
    savedFeedback: string;
    exportHistoryBtn: string;
    importHistoryBtn: string;
    copyLinkBtn: string;
    copiedLinkBtn: string;
    printSummaryBtn: string;
    clearHistoryBtn: string;
    emptyHistory: string;
    importError: string;
    importSuccess: string;
    columns: {
      date: string;
      source: string;
      notBack: string;
      mutuals: string;
      followers: string;
      following: string;
      note: string;
      remove: string;
    };
  };
  ads: {
    slotLabel: string;
    sponsoredNote: string;
  };
  affiliate: {
    title: string;
    subtitle: string;
    disclosure: string;
    items: TranslationAffiliateItem[];
  };
  editorial: {
    title: string;
    intro: string;
    sections: TranslationEditorialSection[];
    faqTitle: string;
    faqs: TranslationFaqItem[];
    transparencyNotice: string;
  };
  print: {
    reportTitle: string;
    generatedOn: string;
    sourceLabel: string;
    privacyFooter: string;
  };
  footer: {
    tagline: string;
    canonicalNotice: string;
  };
}
