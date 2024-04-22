document.addEventListener("DOMContentLoaded", function() {
	var el = document.getElementById("content");
	el.innerHTML = el.innerHTML.replace(/(<code>.*?<\/code>)|(`[^`]+`)/g, function(match, codeBlock, inlineCode) {
		if (codeBlock) {
			return codeBlock;
		} else {
			return '<code class="in">' + inlineCode + '</code>';
		}
	});
});
hljs.highlightAll();