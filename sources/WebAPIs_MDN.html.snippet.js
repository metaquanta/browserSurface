"class\turl\texperimental\tunstable\tobsolete\tdeprecated\tdescription\n" +
Array.from($$("div.index")[1].getElementsByClassName("indexListRow"))
	.map(row => [row.firstChild.firstChild, row.getElementsByClassName("indexListBadges")[0]])
	.map(row => [row[0], Array.from(row[1]?.getElementsByTagName("i") ?? [])])
	.map(row => [row[0], new Set(row[1].map(i=>i.className))])
	.map(row => [
		row[0].innerText, 
		row[0].getAttribute("href"), 
		row[1].has("icon-beaker"),
		row[1].has("icon-warning-sign"),
		row[1].has("icon-trash"),
		row[1].has("icon-thumbs-down-alt"),
		row[0].getAttribute("title")
	])
	.map(row => row.join("\t"))
	.join("\n");
