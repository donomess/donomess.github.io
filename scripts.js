function copyurl(link){ //Allows a url to be copied to clipboard on click.
    // Referenced from: https://orclqa.com/copy-url-clipboard/
    var copiedUrl = document.body.appendChild(document.createElement("input"));
    copiedUrl.value = window.location.href;
    copiedUrl.focus();
    copiedUrl.select();
    document.execCommand('copy');
    copiedUrl.parentNode.removeChild(copiedUrl);
    alert("URL Copied to Clipboard!");
}