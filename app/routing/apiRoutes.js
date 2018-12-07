const friends = require("../data/friends");
var path = require("path");

module.exports = function (app) {
    // get friends from js file
    app.get("/api/friends.js", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends.js", function (req, res) {
        friends.push(req.body);

    });








    //     // Receive user details
    //     var user = req.body;

    //     for(var i = 0; i < user.scores.length; i++) {
    //       user.scores[i] = parseInt(user.scores[i]);
    //     }

    //     var bestfriendsIndex = 0;
    //     var minimumDifference = 1000;

    //     for(var i = 0; i < friends.length; i++) {
    //       var totalDifference = 0;
    //       for(var j = 0; j < friends[i].scores.length; j++) {
    //         var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
    //         totalDifference += difference;
    //       }
    //       // if there is a new minimum, change the best friends index and set the new minimum for next iteration comparisons
    //       if(totalDifference < minimumDifference) {
    //         bestfriendsIndex = i;
    //         minimumDifference = totalDifference;
    //       }
    //     }
    //     // add user to array
    //     friends.push(user);

    //     // display match to browser
    //     res.json(friends[bestfriendsIndex]);
    //   });
};
