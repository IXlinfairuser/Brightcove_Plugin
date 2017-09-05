# AD Countdown Timer Plugin

## Javascript
[Brightcove Overlay Plugin JS](//players.brightcove.net/videojs-overlay/1/videojs-overlay.min.js)  
[Brightcove Ima3 Plugin JS](//players.brightcove.net/videojs-ima3/2/videojs.ima3.min.js)  
[Plugin.js](https://rawgit.com/Kyle30/Brightcove_Player_Plugin/master/adCountdownTimer/plugin.js)  
## CSS
[Brightcove Ima3 Plugin CSS](//players.brightcove.net/videojs-ima3/2/videojs.ima3.min.css)  
[Plugin.css(Brightcove Overlay Plugin CSS Modified)](https://rawgit.com/Kyle30/Brightcove_Player_Plugin/master/adCountdownTimer/plugin.css)  
## JSON
ima3
```JSON
{
  "serverUrl": "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpreonly&cmsid=496&vid=short_onecue&correlator=",
  "timeout": 4000,
  "hardTimeouts": true,
  "requestMode": "onplay",
  "adTechOrder": [
    "html5"
  ],
  "vpaidMode": "ENABLED"
}
```
overlay
```JSON
{
  "overlays": [{
    "content": "<div id='ad-overlay' style='dispaly:inline; font-family: Microsoft JhengHei;'>廣告剩餘: <div id='timeRemaining' style='display:inline'></div>秒</div>",
    "end": "playing",
    "start": "ads-ad-started",
    "align": "bottom-right"
  }]
}
```
adCountDownTimer
```JSON
{}
```  
  
adstop.js  
為解決 mac Safari ad-end 後  play/pause  會被切換的問題  
(在 ad-end  & skip-ad 後 正常播放正片)  
  
```
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
```
