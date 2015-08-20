var observable = require("data/observable");
var frame = require("ui/frame");

function itemTap(args) {
    frame.topmost().navigate({
        moduleName: "" + args.object.get("tag"),
    });
}

exports.itemTap = itemTap;
