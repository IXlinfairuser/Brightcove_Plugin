videojs.registerPlugin('endedEventMsg', function() {
    var myPlayer = videojs('vjs_video_3');

    myPlayer.on("ended", function () {
        top.postMessage("onClipStop", document.referrer);
    });
    
})
