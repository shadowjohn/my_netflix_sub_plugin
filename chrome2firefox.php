<?php
// chrome2firefox.php
$srcDir = __DIR__. '/3wa_netflix';
$destDir = __DIR__ . '/firefox_extension/3wa_netflix';


function copyRecursive($src, $dst) {
    if (is_dir($src)) {
        if (!file_exists($dst)) mkdir($dst, 0777, true);
        $items = scandir($src);
        foreach ($items as $item) {
            if ($item === '.' || $item === '..') continue;
            copyRecursive("$src/$item", "$dst/$item");
        }
    } else {
        copy($src, $dst);
    }
}
function get_between_new($source, $s, $e) {
    /*
      $beginning_pos = strpos($source, $beginning, $init_pos);
      $middle_pos = $beginning_pos + strlen($beginning);
      $ending_pos = strpos($source, $ending, $beginning_pos + 1);
      $middle = substr($source, $middle_pos, $ending_pos - $middle_pos);
      return $middle;
    */
    if(strpos($source, $s) === FALSE) return FALSE;
    if(strpos($source, $e) === FALSE) return FALSE;
    $start = strpos($source, $s) + strlen($s);
    $end = strpos($source, $e, $start);
    $return = substr($source, $start, $end - $start);
    return $return;    
  }

if (!file_exists("$srcDir/manifest.json")) {
    exit("❌ 找不到 manifest.json\n");
}

// 載入原始 manifest.json
$manifest = json_decode(file_get_contents("$srcDir/manifest.json"), true);

// 建立輸出資料夾
if (!file_exists($destDir)) mkdir($destDir);

// 轉換 manifest_version 為 2
$manifest['manifest_version'] = 2;

// 處理 background：從 service_worker → scripts
if (isset($manifest['background']['service_worker'])) {
    $bgScript = $manifest['background']['service_worker'];
    $manifest['background'] = [
        'scripts' => [$bgScript],
        'persistent' => false
    ];
}

// 移除 V3 專用權限
$manifest['permissions'] = array_filter($manifest['permissions'] ?? [], function($perm) {
    return $perm !== 'scripting';
});

// 補上 content_scripts（簡單預設 content.js）
$manifest['content_scripts'] = [[
    'matches' => $manifest['host_permissions'] ?? ["<all_urls>"],
    'js' => ['libs/jquery-3.7.1.min.js', 'settings-core.js', 'subtitle-core.js', 'content.js'],
    'run_at' => 'document_idle'
]];

// 搬移 host_permissions → permissions（V2 用）
if (isset($manifest['host_permissions'])) {
    $manifest['permissions'] = array_values(array_unique(array_merge(
        $manifest['permissions'] ?? [],
        $manifest['host_permissions']
    )));
    unset($manifest['host_permissions']);
}

// 修正 manifest 裡 content_security_policy
$manifest['content_security_policy'] = "script-src 'self'; object-src 'self'";
unset($manifest['action']);

// 輸出新的 manifest.json
file_put_contents("$destDir/manifest.json", json_encode($manifest, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

// 複製所有檔案（除了 chrome2firefox.php 本身）
foreach (scandir($srcDir) as $file) {
    if (in_array($file, ['.', '..', 'manifest.json', 'chrome2firefox.php'])) continue;
    copyRecursive("$srcDir/$file", "$destDir/$file");
}

// 讀入 background.js 並轉換為 Firefox 相容格式 content.js
$bgFile = "{$destDir}/background.js";
if (file_exists($bgFile)) {
    $bgContent = file_get_contents($bgFile);
    // 簡單轉換：將 chrome.* API 替換為 browser.* API
    $code_body = get_between_new($bgContent, '// 程式碼開始~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!', '// 程式碼結束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!');
    $body = "{$code_body}\n\n// Firefox 相容版\n";
    $body .= "run_3wa_netflix();";
    // 儲存為 content.js
    file_put_contents("{$destDir}/content.js", $body);

    // 然後原本的 background.js 可以刪除 code_body
    $bgContent = str_replace($code_body, '', $bgContent);
    // 儲存剩餘部分回 background.js
    file_put_contents($bgFile, $bgContent);
    
} else {
    exit("❌ 找不到 background.js\n");
}


echo "✅ Firefox 相容版已輸出到：$destDir\n";
