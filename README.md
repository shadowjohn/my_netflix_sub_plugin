# my_netflix_sub_plugin
netflix 字幕放大、雙字幕顯示 extension

<h2>功能：</h2>
	有用 netflix 的朋友應該都會弄台電腦把 netflix 接到電視用大螢幕播，netflix 的字幕小到讓人很火大。<br>
網路上一堆瀏覽器 extension、包含官方的 https://www.netflix.com/SubtitlePreferences 設定後都無效...<br> 
萬念俱灰下，只好自己練功...<br>
<br>
<h2>程式開發：</h2>
	此程式是 chrome、brave、edge extension 擴充程式，使用 javascript 開發。<br>
netflix 的字幕通常藏在 html tag SVG image ，新的字幕載入，就等同載一個新的 image tag<br>
字幕 image 是圖片，所以要調整字幕變大，最簡單的方法就是加載 css<br>
讓字幕有新的影像寬度100%，新高度，如 120px、130px(依單、雙行字調整)<br>
並修正字幕的 x 軸起始位置，對程式寫法有興趣的朋友，可以詳見 3wa_netflix/background.js<br>
<s>我將整包 jquery3.6.0 載進來比較方便開發，pure js已很久沒寫沒那麼熟練...</s><br>
然後就在head註冊新的css，並利用 setInterval 不斷的修正 image 起始位置<br>
註：0.5 版後，移除 jquery 3.6.0 ，重寫了一套精簡單版的 jquery 放在 background.js 裡<br>
註：1.9 版後，重新加回 jquery 3.6.0 ，放棄了自己寫的精簡版 jquery ，自己重刻 jquery 覺得人生太難，事件太多了 XXXXD<br>
1.9 版的雙字幕，研究了許久，原本想破解下載字幕位置、嘗試找出 movie metadata 註冊 xhr、重新 hook JSON.parse<br>
但 chrome extension 在 manifest V3 以後，只能使用 service_worker，且 sandbox 化後限制很多，無法直接改寫前端 window 裡的東西<br>
考量 manifest V2 明年就會終止維護與上架，還是決定繼續使用 V3 開發<br>
目前找到一個暗黑作法，就是模擬使用者無腦手動點第一字幕、第二字幕，反覆一直點，取得字幕，再一併顯示<br>
如果有想到更好的作法再調整吧<br>
<br>
2022-09-27 補充：<br>
在開發 V2.0 時，發現 Netflix 沒有檔 img onerror 事件，能作為JS插入注入的作法，成功把 window.URL.createObjectURL(blob) 這個 global 的函式改寫。<br>
如果一來就能針對「圖片型的字幕」(如電馭叛客 2077 裡的日文字幕)，原始圖片 blob 進行抓取，重新轉成 Base64 Image，這樣才能在想要放置的位置重新呈現。<br>
如果這招早點想到的話，也許就不用用這麼奇幻的方式作雙字幕了，但也難保有一天資安規則更新，那這個作法就無法繼續使用。<br>
<br>
V2.0 以這個方式開發也能過 chrome extension 商店的審核…是在暗示咱網路的世界很危險了嗎...<br>
勸各位沒有開放源始碼的 extension 別亂裝，細思極恐<br>
<br>
2022-10-05 補充：<br>
查了一下 chrome extension V3 版本，有個「tabs.onUpdated」可以在切換 tabs 時，馬上觸發程式。<br>
https://developer.chrome.com/docs/extensions/reference/tabs/#event-onUpdated <br>
所以 V2.2 版後，不用再點「3」了，直接啟用<br>
V2.2 版的第二字幕，若有抓取到字幕檔，直接使用字幕檔內容，就不用一直點畫面來回切換<br>
抓取字幕檔的方式，直接改寫 XMLHttpRequest.prototype.open 從中獲取，效果卓越<br>

<br>
邏輯很簡單，就這樣而已^^ 
<br>
<h2>詳細的開發方法說明：</h2>
Netflix 字幕加大心得分享：https://3wa.tw/blog/blog.php?id=1935 <br>
Netflix 雙字幕的心得分享：https://3wa.tw/blog/blog.php?id=1986 <br>
<br>

<h2>程式開發：</h2>
	作者：羽山秋人 (https://3wa.tw/)
<br>
<br>
<h2>License：</h2>
	完全免費的 MIT License
<br>
<br>
<h2>最初更新時間：</h2>
	2021-10-03
<br>
<h2>官方上架更新時間：</h2>
	(2022-01-28) https://chrome.google.com/webstore/detail/3wanetflix/hpmbbonnlchnbbakdegcbbflbjgganaf/related
<br>
<h2>版本：</h2>
    V3.5 (2025-05-17)<br>
    V3.4 (2025-04-29)<br>
    V3.3 (2024-02-11)<br>
    V3.2 (2023-12-02)<br>
    V3.1 (2023-07-08)<br>
	V3.0 (2023-01-29)<br>
	V2.9 (2023-01-29)<br>
	V2.8 (2022-12-05)<br>
	V2.7 (2022-12-03)<br>
	V2.6 (2022-11-10)<br>
	V2.5 (2022-11-05)<br>
	V2.4 (2022-10-19)<br>
	V2.3 (2022-10-08)<br>
	V2.2 (2022-10-05)<br>
	V2.1 (2022-09-29)<br>
	V2.0 (2022-09-27)<br>
	V1.9 (2022-09-24)<br>
	V1.8 (2022-07-11)<br>
	V1.7 (2022-06-11)<br>
	V1.6 (2022-05-18)<br>
	V1.5 (2022-05-12)<br>
	V1.4 (2022-05-11)<br>
	V1.3 (2022-05-01)<br>
	V1.2 (2022-04-28)<br>
	V1.1 (2022-04-25)<br>
	V1.0 (2022-04-25)<br>
	V0.9 (2022-04-23)

<br><br>
<h2>相依套件：</h2>
	jQuery 3.7.1<br>

<br><br>
<img src="screenshot/V1.9_0.png">
<p align="center">執行前</p>
<br>
<img src="screenshot/V2.1_1.png">
<p align="center">執行後</p>
<br>
<img src="screenshot/V2.1_2.png">
<p align="center">執行後</p>
<br>
<img src="screenshot/V2.1_3.png">
<p align="center">執行後</p>
<br>
<img src="screenshot/V2.4_1.png">
<p align="center">注意事項、補充說明</p>
<br>
<img src="screenshot/V2.5_1.png">
<p align="center">自動功能</p>
<p align="center">V2.5 版，加入可以跳過片頭、自動切換下一集的功能</p>
<br>
<img src="screenshot/V2.7_1.jpg">
<p align="center">V2.7 版，加入可以修正「英文 (CC)」 字幕，全大寫字幕的問題</p>
<br>
<img src="screenshot/V3.3_1.jpg">
<p align="center">V3.3 版，加入更多字型</p>
<br>
<a target="_blank" href="https://github.com/shadowjohn/my_netflix_sub_plugin/blob/main/screenshot/2.mp4">使用方法影片</a>

<h2>使用方法：</h2>
1、使用官方 Chrome Store 安裝：https://chrome.google.com/webstore/detail/3wanetflix/hpmbbonnlchnbbakdegcbbflbjgganaf/related
從 Store 安裝直接跳步驟 9 直接看使用範例即可

或

(原始檔下載安裝方法)：<br>
(V3.5 雙字幕 最新版) https://github.com/shadowjohn/my_netflix_sub_plugin/raw/main/release/V3.5/3wa_netflix.zip <br>
(V3.3 雙字幕 穩定版) https://github.com/shadowjohn/my_netflix_sub_plugin/raw/main/release/V3.3/3wa_netflix.zip <br>
(V1.8 單字幕 穩定版) https://github.com/shadowjohn/my_netflix_sub_plugin/raw/main/release/V1.8/3wa_netflix.zip <br>
(歷代版本) https://github.com/shadowjohn/my_netflix_sub_plugin/raw/main/release/ <br>

<br>
2、解壓縮zip檔
<br>
3、開啟瀏覽器，輸入：chrome://settings/
<br>
<img src="screenshot/1.png">
<p align="center">這張圖是 brave 瀏覽器的設定方式</p>
4、開啟擴充功能，開發人員模式打開，選擇「載入未封裝項目」
<br>
<img src="screenshot/2.png">
5、選擇資料夾到剛才解壓縮檔案後的「3wa_netflix」目錄，按下「選擇資料夾」
<img src="screenshot/3.png">
<p align="center">要選到裡面目錄的「3wa_netflix」才是正確哦</p>
<img src="screenshot/5.png">
<p align="center">要看到套件有匯入成功，且有啟動</p>
<img src="screenshot/4.png"><br>
6、在網址列右邊，按下擴充程式(1)，找到 3waNetflix (2)，把標簽點開(3)，就會出現方框的「3」在標籤列上。<br>
7、開啟 netflix ，隨意播一個影片，然後按一下「3」，等大概3秒後，字幕就會變大了<br>

<img src="screenshot/V02_2.jpg">
8、如果字體大小、位置仍滿不意，可以將滑鼠移至畫面中上方，就會出現調整選單<br>
( 3waNetflix V2.0 版以後，將調整選單取代原本右下角的字幕按鈕 )<br>
( 羽山自己家的設定 字體大小「1.5」 )

9、使用範例影片：
https://github.com/shadowjohn/my_netflix_sub_plugin/blob/main/screenshot/V1.9_4.mp4?raw=true
<br>
<img src="screenshot/7.png">
10、如果只是要更新的版本，可以把 manifest.json、background.js 覆蓋<br>
<br>
<img src="screenshot/6.png">
11、然後按一下「紅圈圈起」的地方，就可以重新載入模組<br>
回到 Netflix 建議按「F5」重新載入畫面，然後再按一次「3」啟動字體放大功能<br>
(註：V0.5 版後不用等3秒了，點了馬上使用)
(註：V2.2 版後，採用自動啟動，不用點「3」)
<br>
<br>
<h2>版本說明：</h2>
<pre>
  (2025-05-17) V3.5 版：
    1、Issue 106、Sawa Natsu 網友許願希望字體大小 3 可以再增加，最大值改到 8
    2、Issue 107、007 PP 反應雙字幕功能失效，發現紀錄字幕到 localStorage 時，裡面有夾些斷行	

    (2025-04-29) V3.4 版：
    1、破解「您的裝置尚未設為此帳戶的同戶裝置」，僅測試，只能勉強看影片，什麼都作不了，就不分享了，有興趣的自己找 branch
    
    (2024-02-11) V3.3 版：
    1、Issue 100、增加字型選擇「思源黑體」https://fonts.google.com/noto/specimen/Noto+Sans+TC
    2、Issue 101、增加字型選擇「源樣黑體」https://github.com/ButTaiwan/genyog-font
    3、Issue 102、增加字型選擇「源石黑體」https://github.com/ButTaiwan/genseki-font
    4、Issue 103、增加字型選擇「芫荽」https://github.com/ButTaiwan/iansui
    5、Issue 104、增加字型選擇「霞鹜文楷」https://github.com/lxgw/LxgwWenKai
    6、Issue 102、增加字型選擇「字嗨注音標楷、字嗨注音黑體、字嗨注音宋體」https://github.com/ButTaiwan/bpmfvs

    (2023-12-02) V3.2 版：
    1、Issue 98、(可選擇) 自動移除 CC 字幕 [內容]，句首、句尾「-」號
    2、Issue 99、選單寬度調整，音訊、主要字幕、次要字幕，字體大小修正為 18px

    (2023-07-08) V3.1 版：
    1、Issue 96、可以自動「略過前情提要」，如: 鬼滅之刃-刀匠村篇 11集
    2、Issue 97、片尾時播放終止，點畫面中間會有當掉的問題，如: 柯南159集，觸發原因為: $("video").play();
       解決方式：當 video duration 與 currentTime 相同，video 加入 css style.pointerEvents = "none";
    3、Issue 95、看到最後一集片尾會自動跳出，想跳回去看片尾卻沒辦法，如: LiSA Live is Smile Always (From: Takashi_灯)
       解決方式：可以支援 double click 重回全螢幕，但這時的 track bar 已隱形不能使用，如果要操作似乎會當掉，先隱藏 
    
    (2023-01-29) V3.0 版：
    1、Issue 94、修正點音訊沒有變化的問題

    (2023-01-29) V2.9 版：
    1、Issue 93、修正下方進度條顯示問題

    (2022-11-10) V2.8 版：
    1、Issue 91、修正自動下一集會 crash 的問題
    2、Issue 92、自動跳過片頭，才不會發生出現跳過片頭，使用者點了進度條或切頁，數量變 0 的問題

    (2022-11-10) V2.7 版：
    1、Issue 90、六人行「英文 (CC)」 字幕，有全大寫的問題

    (2022-11-10) V2.6 版：
    1、Issue 89、清字幕 localStorage 不小心清到字幕設定

    (2022-11-05) V2.5 版：
    1、Issue 85、熱鍵 S 發現 bug，有時按下後，會回到片頭
    2、Issue 86、使用者可自定自動跳過片頭
    3、Issue 87、使用者可自定自動跳至下一集
    4、Issue 88、電影，在片尾時「返回瀏覽」，如果是全螢幕，離開全螢幕

    (2022-10-19) V2.4 版：
    1、Issue 76、寬螢幕如果遇到超長字幕，偶爾會透在底下(如：迷霧：第6集 剩 1:30 左右)
    2、Issue 77、當影片播放進入最後 1%，停止翻譯字幕
    3、Issue 78、當影片暫停時，停止翻譯字幕
    4、Issue 79、全螢幕按鈕應避免 Focus ，不然空白鍵會觸發
    5、Issue 80、熱鍵 → 下10秒
    6、Issue 81、熱鍵 ← 上10秒
    7、Issue 82、熱鍵 M 消音、有聲
    8、Issue 83、熱鍵 F 全螢幕
    9、Issue 83、熱鍵 S 略過片頭
    10、Issue 84、熱鍵 N 下一集  

    (2022-10-08) V2.3 版：
    1、停用自動顯示進度條(太容易造成影片停住)
    2、影片標題下移、加一點透明度
    3、當切換音訊，再切回原來的音訊，沒有正常執行

    (2022-10-05) V2.2 版：
    1、全螢幕回上一頁，要停止全螢幕
    2、滑鼠進入下方 Control 區，時間軸需要顯示，不用透過滑過聲音鈕(總算找到解法了~撒花)
    3、如果第二字幕有字幕檔，直接讀出字幕檔顯示
    4、安裝後 3waNetflix 後，自動啟動，不用手點了
    5、(圖片型字幕) 當滑鼠進入下方控制區，包含進度條，雙字幕將無法正常使用，請往上移開
    6、主字幕可正常依雙行字顯示
    7、音訊切換，造成主字幕勾勾跑版

    (2022-09-29) V2.1 版：
    1、直接按下一集的三角按鈕，會發生異常
    2、全螢幕時，立刻隱藏下方控制區
    3、影片暫停時，暫停取新字幕
    4、按「空白鍵」可以控制「播放、停止」
    5、按「o 或 O」(Open) 可以「喚出字幕選單」
    6、3WA Icon 、x_close.png 改成 base64 png
    7、滑鼠移出設定 UI 視窗，等 1 秒再隱藏，重新滑入就停止計時，不然太容易不見  

    (2022-09-27) V2.0 版：
    1、使用注意事項獨立一個 tab 分頁
    2、圖片型字幕閃耀問題修正
    3、當畫面靜置一段時間，會發生無法回上頁、右上的問題反應也無法點選
    4、調整 UI 時，有時會失效
    5、無人說話時，字幕退場的時間不精準  
    6、如果使用者在調整時間軸，延長消失時間(6秒)
    7、全螢幕時，滑鼠沒移動一段時間後要自動隱藏(6秒)
    8、縮小設定畫面可以觸發顯示的範圍
    9、調整畫面很容易滑鼠移動就消失，將 mouseout 改成 mouseleave 後較為正常
    10、UI 控制區，只有滑鼠進入的高度 36% 切入才有效，不然螢幕太小時，調時間軸也會一直檔到
    11、UI 控制區，改成點右下角語言，並加入嘻花效果
    12、英文字幕，二行字會黏在一起
    13、UI 控制區畫面改緊緻，滑塊加大
    14、播放結束後，按下一集異常

    (2022-09-24) V1.9 版：
    1、加回 jQuery 3.6.0
    2、雙字幕功能
    3、第二字幕 UI 設定介面
    4、加入字型選擇
    5、使用者正在「準備切換下一集」或「選集數」 或 「調影片速度」，停用設定 UI
    6、UI 控制區，只有滑鼠進入的高度 70% 切入才有效，不然螢幕太小時，調時間軸也會一直檔到
    7、原 3wanetflix 的字幕要插在 video 裡，這樣全螢幕才有作用，現在發現要再 video 外層的 div 才行
    8、修正字幕不需要強制大寫：font-variant: small-caps
    9、主要字幕、次要字幕可各自設定樣式
    10、如果有下一集、工作人員名單、返回瀏覽、略過簡介，要可以點
    11、加入第二字幕高度
    12、已知問題：
	(1). 啟動 3waNetflix V1.9 版後，下方進度條會失蹤，需要用滑鼠滑過下排音量控制才會出現
	(2). 當滑鼠進入下排控制區時，字幕功能就會暫停，請往上移開
	(3). 已知有些改 1080p 或是部分字幕是「圖片型字幕」出字會異常，之後再研究
  

    (2022-07-11) V1.8 版：
    1、修正文字間距問題

    (2022-06-11) V1.7 版：
    1、當使用者使用1080p套件，仍為圖片型文字，調整字幕置中的問題
  
    (2022-05-18) V1.6 版：
    1、預設的字體顏色：#fff5f8，邊框顏色：#1c5cb0，字體粗細：1.4、字框粗細：10、字幕高度：12，字體大小：1.6、字體間距：12.5
    2、修正在選影片頁時，控制項不能被點選
    3、檢查 chrome 字體置中的問題，檢查正常
  
    (2022-05-12) V1.5 版：
    1、界面改回中間
  
    (2022-05-11) V1.4 版：
    <s>1、界面改到右上角</s>
    2、字框粗細 0~50
    3、取消文字陰影
    4、增加字體顏色
    5、增加字體邊框顏色
  
    (2022-05-01) V1.3 版：
    1、字幕高度可以調整
    2、界面功能只在 netflix.com/watch 才會顯示
  
    (2022-04-25) V1.2 版：
    1、網友 MAN哥 遇到字會重複變雙行的問題修正
  
    (2022-04-25) V1.1 版：
    1、dcard 的網址有 netflix 也會誤判成 netflix，要改成檢查完整的 netflix.com
    2、此版本同 V1.0 只是送簽到 Google Extension 商店的版本少了 dcard 修正，重新發一版
    
    (2022-04-25) V1.0 版：
    1、修正修改後紀錄的問題
    2、dcard 的網址有 netflix 也會誤判成 netflix，要改成檢查完整的 netflix.com
  
    (2022-04-23) V0.9 版：
    1、加入字體粗細可以調整
    2、加入字框粗細可以調整

    (2022-04-20) V0.8 版：
    1、加入字距可以調整
  
    (2022-03-22) V0.7 版：
    1、官方的中文字以前是圖片，現在改成文字了
    
    (2022-01-06) V0.6 版：
    1、移除不必要的 console.log
    
    (2021-12-26) V0.5 版：
    1、移除 jQuery 3.6.0
    2、點「3」後，不用等3秒了
    
    (2021-12-23) V0.4 版：
    1、改用比例放大字體 0.1~3.0
    
    (2021-12-22) V0.3 版：
    1、修正雙行字大小問題
    
    (2021-12-15) V0.2 版：
    1、放大後字幕置中問題修正
    2、字幕大小可再手動調整
    3、修正 3 一直被連點的問題
    4、更新核心成 jQuery 3.6.0
    
    (2021-10-03) V0.1 版：
    1、初版
  
</pre>
<br>  
<h2>Todo：</h2>
<ul>
  <li>(Done 2021-12-15)  1、放大後字幕置中問題修正</li>
  <li>(Done 2021-12-15)  2、字幕大小可再手動調整</li>
  <li>(Done 2021-12-15)  3、修正 3 一直被連點的問題</li>
  <li>(Done 2021-12-22)  4、修正雙行字大小的問題</li>
  <li>(Done 2021-12-23)  5、改用比例放大</li>
  <li>(Done 2021-12-26)  6、移除 jQuery 3.6.0</li>
  <li>(Done 2021-12-26)  7、點「3」後，不用等3秒</li>
  <li>(Done 2022-04-20)  8、字距可以調整</li>
  <li>(Done 2022-04-23)  9、字體粗細可調</li>
  <li>(Done 2022-04-23) 10、字框粗細可調</li>
  <li>(Done 2022-04-25) 11、修改後紀錄的問題修正</li>
  <li>(Done 2022-04-25) 12、dcard 的網址有 netflix 也會誤判成 netflix，要改成檢查完整的 netflix.com</li>
  <li>(Done 2022-04-28) 13、網友 MAN哥 遇到字會重複變雙行的問題修正</li>
  <li>(Done 2022-05-01) 14、字幕高度可以調整</li>
  <li>(Done 2022-05-01) 15、界面功能只在 netflix.com/watch 才會顯示</li>
  <li><s>(Done 2022-05-11) 16、界面改到右上角</s></li>
  <li>(Done 2022-05-11) 17、字框粗細 0~50</li>
  <li>(Done 2022-05-11) 18、取消文字陰影</li>
  <li>(Done 2022-05-11) 19、增加字體顏色</li>
  <li>(Done 2022-05-11) 20、增加字體邊框顏色</li>
  <li>(Done 2022-05-18) 21、預設的字體顏色：#fff5f8，邊框顏色：#1c5cb0，字體粗細：1.4、字框粗細：10、字幕高度：12，字體大小：1.6、字體間距：12.5</li>
  <li>(Done 2022-05-18) 22、修正在選影片頁時，控制項不能被點選</li>
  <li>(Done 2022-05-18) 23、檢查 chrome 字體置中的問題</li>
  <li>(Done 2022-06-11) 24、當使用者使用1080p套件，仍為圖片型文字，調整字幕置中的問題</li>
  <li>(Done 2022-07-11) 25、修正文字間距問題</li>
  <li>(Done 2022-09-24)26、雙字幕功能</li>
  <li>(Done 2022-09-22)27、使用者正在「準備切換下一集」或「選集數」 或 「調影片速度」，停用設定 UI</li>
  <li>(Done 2022-09-22)28、第二字幕 UI 設定介面</li>
  <li>(Done 2022-09-23)29、加入字型選擇</li>
  <li>(Done 2022-09-24)30、UI 控制區，只有滑鼠進入的高度 70% 切入才有效，不然螢幕太小時，調時間軸也會一直檔到</li>
  <li>(Done 2022-09-22)31、原 3wanetflix 的字幕要插在 video 裡，這樣全螢幕才有作用，現在發現要再 video 外層的 div 才行</li>
  <li>(Done 2022-09-23)32、修正字幕不需要強制大寫：font-variant: small-caps</li>
  <li>(Done 2022-09-24)34、使用者正在「準備切換下一集」或「選集數」 或 「調影片速度」，停用設定 UI</li>
  <li>(Done 2022-09-24)35、主要字幕、次要字幕可各自設定樣式</li>
  <li>(Done 2022-09-24)36、如果有下一集、工作人員名單、返回瀏覽、略過簡介，要可以點</li>
  <li>(Done 2022-09-24)37、第二字幕高度可調</li>
  <li>(Done 2022-09-25)38、使用注意事項獨立一個 tab 分頁</li>
  <li>(Done 2022-09-27)39、圖片型字幕閃耀問題修正</li>
  <li>(Done 2022-09-25)40、當畫面靜置一段時間，會發生無法回上頁、右上的問題反應也無法點選</li>
  <li>(Done 2022-09-25)41、調整 UI 時，有時會失效</li>
  <li>(Done 2022-09-25)42、無人說話時，字幕退場的時間不精準</li>
  <li>(Done 2022-10-01)43、滑鼠進入下方 Control 區，時間軸需要顯示，不用透過滑過聲音鈕</li>
  <li>(Done 2022-09-25)44、如果使用者在調整時間軸，延長消失時間(6秒)</li>
  <li>(Done 2022-09-25)45、全螢幕時，滑鼠沒移動一段時間後要自動隱藏(6秒)</li>
  <li>(Done 2022-09-25)46、縮小設定畫面可以觸發顯示的範圍</li>
  <li>(Done 2022-09-25)47、調整畫面很容易滑鼠移動就消失，將 mouseout 改成 mouseleave 後較為正常</li>
  <li>(Done 2022-09-25)48、UI 控制區，只有滑鼠進入的高度 36% 切入才有效，不然螢幕太小時，調時間軸也會一直檔到</li>
  <li>(Done 2022-09-25)49、UI 控制區，改成點右下角語言，並加入嘻花效果</li>
  <li>(Done 2022-09-25)50、英文字幕，二行字會黏在一起</li>
  <li>(Done 2022-09-25)51、UI 控制區畫面改緊緻，滑塊加大</li>
  <li>(Done 2022-09-25)52、播放結束後，按下一集異常</li>
  <li>(Done 2022-09-25)53、直接按下一集的三角按鈕</li>
  <li>(Done 2022-09-29)54、全螢幕時，立刻隱藏下方控制區</li>
  <li>(Done 2022-09-29)55、影片暫停時，暫停取新字幕</li>
  <li>(Done 2022-09-29)56、按「空白鍵」可以控制「播放、停止」</li>
  <li>(Done 2022-09-29)57、按「o 或 O」(Open) 可以「喚出字幕選單」</li>
  <li>(Done 2022-09-29)58、3WA Icon 、x_close.png 改成 base64 png</li>
  <li>(Done 2022-09-29)59、滑鼠移出設定 UI 視窗，等 1 秒再隱藏，重新滑入就停止計時，不然太容易不見</li>
  <li>(Done 2022-09-30)60、全螢幕回上一頁，要停止全螢幕</li>
  <li>(Done 2022-10-05)61、滑鼠進入下方控制區，包含進度條，雙字幕將無法正常使用，請往上移開</li>
  <li>(Done 2022-10-01)62、點影片會停止、繼續播放的功能，修正</li>
  <li>(Done 2022-10-01)63、雙點影片畫面，可全螢幕播放的功能</li>
  <li>(Done 2022-10-01)64、初次載入，設定 UI 看不到但按的到的問題修正</li>
  <li>(Done 2022-10-01)65、全螢幕時，控制項每六秒隱藏</li>
  <li>66、切換日文、其他圖片型文字，有時仍會有殘影</li>
  <li>(Done 2022-10-05)67、如果第二字幕有字幕檔，直接讀出字幕檔顯示</li>
  <li>(Done 2022-10-05)68、安裝後 3waNetflix 後，自動啟動，不用手點了</li>
  <li>(Done 2022-10-05)69、直行日文字圖片型字幕，移到畫面右邊置中</li>
  <li>70、(圖片型字幕) 當滑鼠進入下方控制區，包含進度條，雙字幕將無法正常使用，請往上移開</li>
  <li>(Done 2022-10-05)71、主字幕可正常依雙行字顯示</li>
  <li>(Done 2022-10-05)72、音訊切換，造成主字幕勾勾跑版</li>
  <li>(Done 2022-10-06)73、停用自動顯示進度條(太容易造成影片停住)</li>
  <li>(Done 2022-10-06)74、影片標題下移、加一點透明度</li>
  <li>(Done 2022-10-08)75、當切換音訊，再切回原來的音訊，沒有正常執行</li>
  <li>(Done 2022-10-10)76、寬螢幕如果遇到超長字幕，偶爾會透在底下(如：迷霧：第6集 剩 1:30 左右)</li>
  <li>(Done 2022-10-17)77、當影片播放進入最後 1%，停止翻譯字幕</li>
  <li>(Done 2022-10-17)78、當影片暫停時，停止翻譯字幕</li>
  <li>(Done 2022-10-17)79、全螢幕按鈕應避免 Focus ，不然空白鍵會觸發</li>
  <li>(Done 2022-10-17)80、熱鍵 → 下10秒</li>
  <li>(Done 2022-10-17)81、熱鍵 ← 上10秒</li>
  <li>(Done 2022-10-17)82、熱鍵 M 消音、有聲</li>
  <li>(Done 2022-10-17)83、熱鍵 F 全螢幕</li>
  <li>(Done 2022-10-17)83、熱鍵 S 略過片頭</li>
  <li>(Done 2022-10-18)84、熱鍵 N 下一集</li>
  <li>(Done 2022-11-05)85、熱鍵 S 發現 bug，有時按下後，會回到片頭</li>
  <li>(Done 2022-11-05)86、使用者可自定自動跳過片頭</li>
  <li>(Done 2022-11-05)87、使用者可自定自動跳至下一集</li>
  <li>(Done 2022-11-05)88、電影，在片尾時「返回瀏覽」，如果是全螢幕，離開全螢幕</li>
  <li>(Done 2022-11-06)89、清字幕 localStorage 不小心清到字幕設定</li>
  <li>(Done 2022-12-03)90、六人行「英文 (CC)」 字幕，有全大寫的問題</li>
  <li>(Done 2022-12-05)91、修正自動下一集會 crash 的問題</li>
  <li>(Done 2022-12-05)92、自動跳過片頭，才不會發生出現跳過片頭，使用者點了進度條或切頁，數量變 0 的問題</li>
  <li>(Done 2023-01-29)93、修正下方進度條顯示問題</li>
  <li>(Done 2023-01-29)94、修正點音訊沒有變化的問題</li>
  <li>(Done 2023-07-08)95、看到最後一集片尾會自動跳出，想跳回去看片尾卻沒辦法，如: LiSA Live is Smile Always (From: Takashi_灯)</li>
  <li>(Done 2023-07-07)96、可以自動「略過前情提要」，如: 鬼滅之刃-刀匠村篇 11集</li>
  <li>(Done 2023-07-08)97、片尾時播放終止，點畫面中間會有當掉的問題，如: 柯南159集，觸發原因為: $("video").play();</li>
  <li>(Done 2023-12-02)98、(可選擇) 自動移除 CC 字幕 [內容]，句首、句尾「-」號</li>
  <li>(Done 2023-12-02)99、選單寬度調整，音訊、主要字幕、次要字幕，字體大小修正為 18px</li>
  <li>(Done 2024-02-11)100、增加字型選擇「思源黑體」https://fonts.google.com/noto/specimen/Noto+Sans+TC</li>
  <li>(Done 2024-02-11)101、增加字型選擇「源樣黑體」https://github.com/ButTaiwan/genyog-font</li>
  <li>(Done 2024-02-11)102、增加字型選擇「源石黑體」https://github.com/ButTaiwan/genseki-font</li>
  <li>(Done 2024-02-11)103、增加字型選擇「芫荽」https://github.com/ButTaiwan/iansui</li>
  <li>(Done 2024-02-11)104、增加字型選擇「霞鹜文楷」https://github.com/lxgw/LxgwWenKai</li>
  <li>(Done 2024-02-11)105、增加字型選擇「字嗨注音標楷、字嗨注音黑體、字嗨注音宋體」https://github.com/ButTaiwan/bpmfvs</li> 
  <li>(Done 2025-05-17)106、Sawa Natsu 網友許願希望字體大小 3 可以再增加，最大值改到 8</li>
  <li>(Done 2025-05-17)107、007 PP 反應雙字幕功能失效，發現紀錄字幕到 localStorage 時，裡面有夾些斷行</li>
</ul>
  