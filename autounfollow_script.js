
//Auto unfollow all users on current page
//Scroll every 10 seconds and repeat
setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight);
    $(".EdgeButton.EdgeButton--danger.EdgeButton--small.button-text.unfollow-text").click();
}, 10000);

