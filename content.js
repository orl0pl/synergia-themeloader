if (window.location.href.startsWith("https://synergia.librus.pl/")) {
  chrome.runtime.sendMessage({action: "getThemeUrl"}, function(response) {
    var link = document.createElement("link");
    link.href = response.themeUrl;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  });
}
