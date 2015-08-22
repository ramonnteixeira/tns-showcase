var cameraModule = require("camera");
var imageModule = require("ui/image");
var view = require("ui/core/view");

var imageContainer;

function tapAction() {
   cameraModule.takePicture({width: 300, height: 300, keepAspectRatio: true}).then(function (picture) {
       imageContainer.imageSource = picture;
   });
}

function onPageLoaded(args) {
   var page = args.object;
   imageContainer = view.getViewById(page, "img");
}

exports.onPageLoaded = onPageLoaded;
exports.tapAction = tapAction;
