var dialogs = require("ui/dialogs");

function alertTapped(args) {
    dialogs.alert("Hi there!");
}

function alertWithOptionsTapped(args) {
    dialogs.alert({
        title: "Alert Title",
        message: "Hi there!",
        okButtonText: "Close"
    });
}

function confirmTapped(args) {
    dialogs.confirm("Are you sure?").then(function(r) {
        console.log(r);
    });
}

function confirmWithOptionsTapped(args) {
    dialogs.confirm({
        title: "Confirm Title",
        message: "Are you sure?",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        neutralButtonText: "Ignore"
    }).then(function(r) {
        console.log(r);
    });
}

function promptTapped(args) {
    dialogs.prompt("Enter name:", "John Doe");
}

function promptWithOptionsTapped(args) {
    dialogs.prompt({
        title: "Prompt Title",
        message: "Enter name:",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        neutralButtonText: "Ignore",
        defaultText: "John Doe",
        inputType: dialogs.inputType.text
    }).then(function(r) {
        console.log(r.result + ' -> ' + r.text);
    });
}

function promptWithOptionsPasswordTapped(args) {
    dialogs.prompt({
        title: "Prompt Title",
        message: "Enter name:",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        neutralButtonText: "Ignore",
        defaultText: "John Doe",
        inputType: dialogs.inputType.password
    }).then(function(r) {
        console.log(r.result + ' -> ' + r.text);
    });
}

function loginTapped(args) {
    dialogs.login("Enter user/pass:", "username", "password").then(function(r) {
        console.log(r.result + ' -> ' + r.userName + ' -> ' + r.password);
    });
}

function loginWithOptionsTapped(args) {
    dialogs.login({
        title: "Login Title",
        message: "Enter user/pass:",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        neutralButtonText: "Ignore",
        userName: "username",
        password: "password"
    }).then(function(r) {
        console.log(r.result + ' -> ' + r.userName + ' -> ' + r.password);
    });
}

function actionTapped(args) {
    dialogs.action("Action", "Close", ["One", "Two", "Three"]).then(function(r) {
        console.log(r);
    });
}

function actionWithOptionsTapped(args) {
    dialogs.action({
        message: "Action",
        cancelButtonText: "Close",
        actions: ["One", "Two", "Three"]
    }).then(function(r) {
        console.log(r);
    });
}

exports.alertTapped = alertTapped;
exports.alertWithOptionsTapped = alertWithOptionsTapped;
exports.confirmTapped = confirmTapped;
exports.confirmWithOptionsTapped = confirmWithOptionsTapped;
exports.promptTapped = promptTapped;
exports.promptWithOptionsTapped = promptWithOptionsTapped;
exports.promptWithOptionsPasswordTapped = promptWithOptionsPasswordTapped;
exports.loginTapped = loginTapped;
exports.loginWithOptionsTapped = loginWithOptionsTapped;
exports.actionTapped;
exports.actionWithOptionsTapped;
