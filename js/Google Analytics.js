$("a").click(function() {
     console.log("button clicked");
tracker.send('event', 'button', 'click');
});
