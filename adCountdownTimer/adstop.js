videojs.plugin('adCountDownTimer', function(){
	var player = this;
	var timeRemaining;
	var countdownTimer;
	player.on('ads-ad-started', function(){
		document.getElementById('ad-overlay').style.fontSize = '1.2em';
		document.getElementById('ad-overlay').style.color = 'white';
		document.getElementById('ad-overlay').style.zIndex = 999;
		document.getElementById('ad-overlay').style.fontWeight = 600;
		countdownTimer = setInterval(function (){
			timeRemaining = player.ima3.adsManager.getRemainingTime();
			document.getElementById('timeRemaining').innerHTML = Math.round(timeRemaining);
		}, 300);
    });
    player.on('ads-ad-skipped', function(){
      if(player.mediainfo.duration == 0) {  
        clearInterval(countdownTimer);
    	player.play();
      }
    });
    player.on('ads-ad-ended', function(){
      if(player.mediainfo.duration == 0) {  
	clearInterval(countdownTimer);
    	player.play();
      }
    });
})
