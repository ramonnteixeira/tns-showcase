function onPageLoaded(args) {
  var page = args.object;
  var array = [
      {title: "Title1"},
      {title: "Title2"}
  ];

  page.bindingContext = {myItems: array};
}
exports.onPageLoaded = onPageLoaded;
