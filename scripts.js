function copyurl(link){ //Allows a url to be copied to clipboard on click.
    $("url_public_id").show()
    var copiedUrl = document.body.appendChild(document.createElement("copied"));
    copiedUrl.value = window.location.href;
    copiedUrl.focus();
    copiedUrl.select();
    document.execCommand('copy');
    copiedUrl.parentNode.removeChild(copiedUrl);
    alert("URL Copied to Clipboard!");
}