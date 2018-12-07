var path = require("path");

module.exports = function (app) {
    //survey page is served up here
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // if route does not exist, default to home page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};