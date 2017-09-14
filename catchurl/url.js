videojs.plugin('catchurl', function(){
   videojs('vjs_video_3').ready(function () {
          this.dvrux({});

          console.log('retrieving signed URL (3)')
          $.get("https://9thkhbt5kd.execute-api.us-east-1.amazonaws.com/test/SignUrl/AKAM/show", function(data, status) {
            console.log(data)
            playVideo("vjs_video_3", data.url)
          });
    });


  function playVideo(playerId, url) {
      var sources = [{
                      "type": "application/x-mpegURL",
                      "src": url
                     }]
      console.log('************');
      console.log('URL: ' + url);
      player = videojs(playerId);
      player.src(sources);
      player.play();
  }
    
});