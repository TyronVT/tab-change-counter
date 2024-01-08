// Uses the local storage to count the number of times the user has switched tabs.
chrome.storage.local.get(["switchCount"], function(result) {
    document.getElementById("counter").innerHTML = result.switchCount || 0;
});