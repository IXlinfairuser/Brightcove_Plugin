# Geo-Filtering Messaging  
功能:使用於某些敏感議題的影片  
效果:限制非此區域的用戶無法觀看，並顯示無法觀看的訊息     

## Javascript
[Plugin.js](https://raw.githubusercontent.com/IXlinfairuser/Brightcove_Plugin/master/geoFilteringMessaging/plugin.js)

## Name,Options(JSON)
geoFilteringMessaging  
```
{
  "code": "CLIENT_GEO",
  "headline": "本影片未授權在您的地區收看./n This video could not be played in your area."
}
```
headline:輸入無法觀看時，所顯示的文字內容  

## Deverlopment
HTML
```HTML
<video id="myPlayerID" data-video-id="video_id" data-account="account_id" data-player="player_id" data-embed="default" data-application-id class="video-js" controls style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></video>
<script src="//players.brightcove.net/{{account_id}}/{{player_id}}_default/index.min.js"></script>
<script>
  videojs('myPlayerID').on('bc-catalog-error', function() {
    var myPlayer = this,
        specificError;
    if (typeof(myPlayer.catalog.error) !== 'undefined') {
      specificError = myPlayer.catalog.error.data[0];
      if (specificError !== 'undefined' & specificError.error_subcode == "CLIENT_GEO") {
        myPlayer.error({
          'code': 'CLIENT_GEO',
          'headline': "因版權限制，僅可於台灣地區觀看"
        });
      };
    };
  });
</script>
```
Video JS Plugin
```Javascript
videojs.plugin('geoFilteringMessaging', function (options) {
    var player = this;
    player.on('bc-catalog-error', function () {
        var specificError;
        if (typeof (player.catalog.error) !== 'undefined') {
            specificError = player.catalog.error.data[0];
            if (specificError !== 'undefined' & specificError.error_subcode == "CLIENT_GEO") {
                player.error({
                    code: options.code,
                    headline: options.headline
                });
            };
        };
    });
});
```
### Document  
[Availability set](//support.brightcove.com/en/video-cloud/docs/configuring-video-availability)  
[Geo Filtering msg](//docs.brightcove.com/en/player/brightcove-player/guides/geo-filtering.html)  

### 用法  
在 Video Colud介面上AVAILABILITY設定Geo Filtering  
![Availability](http://i.imgur.com/wOOLWuq.jpg)  

### 效果  
![Geo Filtering msg](http://i.imgur.com/XAx2TwN.jpg)


