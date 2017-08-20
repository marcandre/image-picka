document.addEventListener("dragend", e => {
	var img = e.target;
	if (img.nodeName == "A") {
		img = img.querySelector("img");
	}
	if (!img || img.nodeName != "IMG") return;
	
	browser.runtime.sendMessage({
		method: "downloadImage",
		env: {
			url: img.src,
			pageTitle: document.title,
			pageUrl: location.href
		}
	});
}, true);