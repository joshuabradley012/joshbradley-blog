"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rss_1 = require("../lib/rss");
// Generate the RSS feed
(0, rss_1.generateRssFeed)()
    .then(function () {
    console.log('RSS feed generated successfully');
    process.exit(0);
})
    .catch(function (error) {
    console.error('Error generating RSS feed:', error);
    process.exit(1);
});
