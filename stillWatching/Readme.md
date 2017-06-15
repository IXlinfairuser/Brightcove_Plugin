
# Still Watching Plugin
功能：觀看者是否仍繼續觀看影片  
效果：每三十分鐘，會跳出訊息，訊息跳出後，任意點擊便繼續播放
## Javascript 
[Brightcove Overlay Plugin JS](//players.brightcove.net/videojs-overlay/1/videojs-overlay.min.js)  
[Plugin.js](https://raw.githubusercontent.com/IXlinfairuser/Brightcove_Plugin/master/stillWatching/plugin.js)  
## CSS
[Brightcove Overlay Plugin CSS](//players.brightcove.net/videojs-overlay/1/videojs-overlay.css)   
範例檔為 [stillWatching.css](https://raw.githubusercontent.com/IXlinfairuser/Brightcove_Plugin/master/stillWatching/stillWatching.css)  
## Name, Options( JSON )
### overlay
```JSON
{
  "overlays": [{
    "content": "",
    "align": "bottom-right",
    "start": "0",
    "end": "0"
  }]
}
```
content : 欲顯示的文字內容  
align :   欲顯示文字的位置  
start :   觸發顯示機制的起點  (可以是button,time...)  
end :     觸發顯示機制的終點  (可以是button,time...)  


### stillWatching
```JSON
{}
```
另一項參數在JS裡為設定多久的時間檢查是否還在觀看影片 

***
### document  
[overlay](//docs.brightcove.com/en/player/brightcove-player/guides/overlay-plugin.html) 

### 效果圖  
 以10秒為範例   
 ![msg pic](http://i.imgur.com/FIaT9fU.jpg)  
 [Imgur](http://i.imgur.com/FIaT9fU.jpg) 如果上圖看不見請點連結
