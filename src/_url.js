var sheetDbUrlGet = function(slug_or_url, options) {
  var url = sheetDbUrl(slug_or_url),
      pathQueryString = "",
      limit_offset_transposed = addLimitOffsetTransposed(options);

  if (options["search"]) {
    pathQueryString += sheetDbSearch(options);
  }

  if (limit_offset_transposed != "") {
    if (options["search"]) {
      pathQueryString += ("&" + limit_offset_transposed);
    } else {
      pathQueryString += ("?" + limit_offset_transposed);
    }
  }

  return (url + pathQueryString);
};

var sheetDbUrlPost = function(slug_or_url, options) {
  var url = sheetDbUrl(slug_or_url),
      pathQueryString = "";

  return (url + pathQueryString);
};

var sheetDbUrl = function(urlOrSlug) {
  if (urlOrSlug.startsWith("https://sheetdb.io/api/v1/")) {
    return urlOrSlug;
  } else {
    return ("https://sheetdb.io/api/v1/" + urlOrSlug);
  }
};

var sheetDbSearch = function(options) {
  var searchQuery = [],
      searchParams = options["search"];

  for (key in searchParams) { searchQuery.push(key + "=" + searchParams[key]); };
  return ("/search?" + searchQuery.join("&"));
};

var addLimitOffsetTransposed = function(options) {
  var queryOptions = [];
  if (options["casesensitive"]) { queryOptions.push("casesensitive=" + options["casesensitive"]); };
  if (options["sheet"]) { queryOptions.push("sheet=" + options["sheet"]); };

  return queryOptions.join("&");
};

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
