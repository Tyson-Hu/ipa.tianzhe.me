document.getElementById('downloadButton').onclick = function() {
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if(iOS){
        window.location.href = "itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/Tyson-Hu/ipa.tianzhe.me/master/manifest.plist";
    } else {
        alert("This download is only available for iOS devices.");
    }
};
