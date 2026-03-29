<?php

declare(strict_types=1);

$rootDir = __DIR__;
$chromeDir = $rootDir . DIRECTORY_SEPARATOR . '3wa_netflix';
$chromeManifestFile = $chromeDir . DIRECTORY_SEPARATOR . 'manifest.json';
$firefoxDir = $rootDir . DIRECTORY_SEPARATOR . 'firefox_extension' . DIRECTORY_SEPARATOR . '3wa_netflix';
$releaseChromeBaseDir = $rootDir . DIRECTORY_SEPARATOR . 'release';
$releaseFirefoxBaseDir = $releaseChromeBaseDir . DIRECTORY_SEPARATOR . 'firefox_extension';

function fail(string $message, int $code = 1): void
{
    fwrite(STDERR, $message . PHP_EOL);
    exit($code);
}

function ensureDir(string $dir): void
{
    if (!is_dir($dir) && !mkdir($dir, 0777, true) && !is_dir($dir)) {
        fail("❌ 無法建立資料夾：{$dir}");
    }
}

function readManifestVersion(string $manifestFile): string
{
    if (!is_file($manifestFile)) {
        fail("❌ 找不到 manifest.json：{$manifestFile}");
    }

    $manifestContent = file_get_contents($manifestFile);
    if ($manifestContent === false) {
        fail("❌ 讀取 manifest.json 失敗：{$manifestFile}");
    }

    $manifest = json_decode($manifestContent, true);
    if (!is_array($manifest) || !isset($manifest['version']) || trim((string) $manifest['version']) === '') {
        fail("❌ 無法從 manifest.json 讀取 version：{$manifestFile}");
    }

    return trim((string) $manifest['version']);
}

function runPhpScript(string $scriptFile): void
{
    if (!is_file($scriptFile)) {
        fail("❌ 找不到 PHP 腳本：{$scriptFile}");
    }

    $command = escapeshellarg(PHP_BINARY) . ' ' . escapeshellarg($scriptFile);
    passthru($command, $exitCode);

    if ($exitCode !== 0) {
        fail("❌ 執行失敗：{$scriptFile}");
    }
}

function createZipFromDirectory(string $sourceDir, string $zipFile): void
{
    if (!class_exists('ZipArchive')) {
        fail("❌ 找不到 ZipArchive，請確認 PHP zip extension 已啟用。");
    }

    if (!is_dir($sourceDir)) {
        fail("❌ 找不到來源資料夾：{$sourceDir}");
    }

    $zipParentDir = dirname($zipFile);
    ensureDir($zipParentDir);

    if (is_file($zipFile) && !unlink($zipFile)) {
        fail("❌ 無法刪除舊的 zip：{$zipFile}");
    }

    $zip = new ZipArchive();
    $openResult = $zip->open($zipFile, ZipArchive::CREATE | ZipArchive::OVERWRITE);
    if ($openResult !== true) {
        fail("❌ 建立 zip 失敗：{$zipFile}");
    }

    $sourceRealPath = realpath($sourceDir);
    if ($sourceRealPath === false) {
        $zip->close();
        fail("❌ 無法解析來源資料夾：{$sourceDir}");
    }

    $zipRealPath = realpath(dirname($zipFile));
    $iterator = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($sourceRealPath, FilesystemIterator::SKIP_DOTS),
        RecursiveIteratorIterator::SELF_FIRST
    );

    foreach ($iterator as $item) {
        $itemPath = $item->getPathname();
        $relativePath = substr($itemPath, strlen($sourceRealPath) + 1);

        if ($relativePath === '' || $relativePath === false) {
            continue;
        }

        if ($zipRealPath !== false && realpath($item->getPath()) === $zipRealPath && basename($itemPath) === basename($zipFile)) {
            continue;
        }

        if ($item->isDir()) {
            $zip->addEmptyDir(str_replace('\\', '/', $relativePath));
            continue;
        }

        if (!$zip->addFile($itemPath, str_replace('\\', '/', $relativePath))) {
            $zip->close();
            fail("❌ 加入 zip 失敗：{$itemPath}");
        }
    }

    $zip->close();
}

function moveZipToRelease(string $sourceZip, string $destZip): void
{
    if (!is_file($sourceZip)) {
        fail("❌ 找不到 zip：{$sourceZip}");
    }

    ensureDir(dirname($destZip));

    if (is_file($destZip) && !unlink($destZip)) {
        fail("❌ 無法覆蓋舊檔案：{$destZip}");
    }

    if (!rename($sourceZip, $destZip)) {
        if (!copy($sourceZip, $destZip) || !unlink($sourceZip)) {
            fail("❌ 無法搬移 zip 到：{$destZip}");
        }
    }
}

$version = readManifestVersion($chromeManifestFile);
$versionDirName = 'V' . $version;

$releaseChromeVersionDir = $releaseChromeBaseDir . DIRECTORY_SEPARATOR . $versionDirName;
$releaseFirefoxVersionDir = $releaseFirefoxBaseDir . DIRECTORY_SEPARATOR . $versionDirName;

ensureDir($releaseChromeVersionDir);
ensureDir($releaseFirefoxVersionDir);

runPhpScript($rootDir . DIRECTORY_SEPARATOR . 'chrome2firefox.php');

$chromeZipTemp = $chromeDir . DIRECTORY_SEPARATOR . '3wa_netflix.zip';
$chromeZipRelease = $releaseChromeVersionDir . DIRECTORY_SEPARATOR . '3wa_netflix.zip';
createZipFromDirectory($chromeDir, $chromeZipTemp);
moveZipToRelease($chromeZipTemp, $chromeZipRelease);

$firefoxZipTemp = $firefoxDir . DIRECTORY_SEPARATOR . '3wa_netflix.zip';
$firefoxZipRelease = $releaseFirefoxVersionDir . DIRECTORY_SEPARATOR . '3wa_netflix.zip';
createZipFromDirectory($firefoxDir, $firefoxZipTemp);
moveZipToRelease($firefoxZipTemp, $firefoxZipRelease);

echo "✅ 完成打包：" . PHP_EOL;
echo "Chrome: {$chromeZipRelease}" . PHP_EOL;
echo "Firefox: {$firefoxZipRelease}" . PHP_EOL;
