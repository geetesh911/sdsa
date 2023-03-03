export const SITE = {
  name: "SDSA Lawyers",

  origin: "https://sdsalawyers.com",
  basePathname: "/",
  trailingSlash: false,

  title: "S D SHARMA ASSOCIATES ADVOCATES",
  description: "Lawyers in jaipur,law firm in jaipur,advocate in jaipur,jaipur",

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: "orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M",
  splitbeeAnalytics: {
    enabled: false,
  },
};

export const BLOG = {
  disabled: false,
  postsPerPage: 4,

  blog: {
    disabled: false,
    pathname: "blog", // blog main path, you can change this to "articles" (/articles)
  },

  post: {
    disabled: false,
    pathname: "", // empty for /some-post, value for /pathname/some-post
  },

  category: {
    disabled: false,
    pathname: "category", // set empty to change from /category/some-category to /some-category
  },

  tag: {
    disabled: false,
    pathname: "tag", // set empty to change from /tag/some-tag to /some-tag
  },
};
