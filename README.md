# my_netflix_sub_plugin
netflix 字幕放大 extension

<h2>功能：</h2>
有用 netflix 的朋友應該都會弄台電腦把 netflix 接到電視用大螢幕播，netflix 的字幕小到讓人很火大。<br>
網路上一堆垃圾瀏覽器 extension、包含官方的 https://www.netflix.com/SubtitlePreferences 設定後都無效...<br> 
萬念俱灰下，只好自己練功...<br>
<br>
<h2>程式開發：</h2>
此程式是 chrome、brave、edge extension 擴充程式，使用 javascript 開發。<br>
netflix 的字幕通常藏在 html tag SVG image ，新的字幕載入，就等同載一個新的 image tag<br>
字幕 image 是圖片，所以要調整字幕變大，最簡單的方法就是加載 css<br>
讓字幕有新的影像寬度100%，新高度，如 120px、130px(依單、雙行字調整)<br>
並修正字幕的 x 軸起始位置，對程式寫法有興趣的朋友，可以詳見 3wa_netflix/background.js<br>
我將整包 jquery1.7.1 載進來比較方便開發，pure js已很久沒寫沒那麼熟練...<br>
然後就在head註冊新的css，並利用 setInterval 不斷的修正 image 起始位置<br>
邏輯很簡單，就這樣而已^^ 
<br>
<br>
<h2>程式開發：</h2>
作者：羽山秋人 (https://3wa.tw/)
<br>
<br>
<h2>License：</h2>
免錢的 MIT
<br>
<br>
<h2>最初更新時間：</h2>
2021-10-03
<br><br>
<h2>相依套件：</h2>
jquery 1.7.1 (MIT https://jquery.org/license/)
<br><br>
<img src="screenshot/orin.jpg">
<p align="center">執行前</p>
<br>
<img src="screenshot/after.jpg">
<p align="center">執行後</p>
<br>
<br>

<h2>使用方法：</h2>

1、下載：https://github.com/shadowjohn/my_netflix_sub_plugin/archive/refs/heads/main.zip
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
6、在網址列右邊，按下擴充程式(1)，找到 3waNetflix (2)，把標簽點開(3)，就會出現方框的「3」在標籤列上。<br>
7、開啟 netflix ，隨意播一個影片，然後按一下「3」，等大概3秒後，字幕就會變大了<br>
<img src="screenshot/4.png"><br>
8、範例影片：https://github.com/shadowjohn/my_netflix_sub_plugin/blob/main/screenshot/1.mp4

<br>
<h2>開發方法說明：</h2>
Netflix 字幕加大心得分享：https://3wa.tw/blog/blog.php?id=1935
