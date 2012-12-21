Package.describe({
    summary: "Javascript library for collecting form data"
});

Package.on_use(function (api) {
    api.add_files([
        "form2js/src/form2js.js",
    ], "client");
});
