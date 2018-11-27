$(".track").click(function() {
     console.log("button clicked");
tracker.send('event', 'track', 'click');
});
