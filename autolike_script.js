// Auto like everything on current page
// Scroll every 10 seconds and repeat
setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight);
    $('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite:visible').click();
}, 10000);

