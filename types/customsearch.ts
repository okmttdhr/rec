interface Context {
  facets?: Array<
    Array<{
      anchor?: string;
      label?: string;
      label_with_op?: string;
    }>
  >;
  title?: string;
}
interface Promotion {
  bodyLines?: Array<{
    htmlTitle?: string;
    link?: string;
    title?: string;
    url?: string;
  }>;
  displayLink?: string;
  htmlTitle?: string;
  image?: {
    height?: number;
    source?: string;
    width?: number;
  };
  link?: string;
  title?: string;
}
interface Query {
  count?: number;
  cr?: string;
  cx?: string;
  dateRestrict?: string;
  disableCnTwTranslation?: string;
  exactTerms?: string;
  excludeTerms?: string;
  fileType?: string;
  filter?: string;
  gl?: string;
  googleHost?: string;
  highRange?: string;
  hl?: string;
  hq?: string;
  imgColorType?: string;
  imgDominantColor?: string;
  imgSize?: string;
  imgType?: string;
  inputEncoding?: string;
  language?: string;
  linkSite?: string;
  lowRange?: string;
  orTerms?: string;
  outputEncoding?: string;
  relatedSite?: string;
  rights?: string;
  safe?: string;
  searchTerms?: string;
  searchType?: string;
  siteSearch?: string;
  siteSearchFilter?: string;
  sort?: string;
  startIndex?: number;
  startPage?: number;
  title?: string;
  totalResults?: string;
}
interface Result {
  cacheId?: string;
  displayLink?: string;
  fileFormat?: string;
  formattedUrl?: string;
  htmlFormattedUrl?: string;
  htmlSnippet?: string;
  htmlTitle?: string;
  image?: {
    byteSize?: number;
    contextLink?: string;
    height?: number;
    thumbnailHeight?: number;
    thumbnailLink?: string;
    thumbnailWidth?: number;
    width?: number;
  };
  kind?: string;
  labels?: Array<{
    displayName?: string;
    label_with_op?: string;
    name?: string;
  }>;
  link?: string;
  mime?: string;
  pagemap?: Record<string, Array<Record<string, any>>>;
  snippet?: string;
  title?: string;
}
export interface Search {
  context?: Context;
  items?: Result[];
  kind?: string;
  promotions?: Promotion[];
  queries?: Record<string, Query[]>;
  searchInformation?: {
    formattedSearchTime?: string;
    formattedTotalResults?: string;
    searchTime?: number;
    totalResults?: string;
  };
  spelling?: {
    correctedQuery?: string;
    htmlCorrectedQuery?: string;
  };
  url?: {
    template?: string;
    type?: string;
  };
}
