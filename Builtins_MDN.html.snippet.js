"class\turl\texperimental\tunstable\tobsolete\tdeprecated\tdescription\n" +
Array.from($$('details')[4].getElementsByTagName("li"))
    .map(l => [l.getElementsByTagName("a")[0], Array.from(l.getElementsByTagName("i"))])
    .map(l => [l[0], new Set(l[1].map(i => i.className))])
    .map(l => [
        l[0].innerText,
        l[0].getAttribute("href"),
        l[1].has("icon-beaker"),
        l[1].has("icon-warning-sign"),
        l[1].has("icon-trash"),
        l[1].has("icon-thumbs-down-alt"),
        l[0].getAttribute("title")
    ])
    .map(l => l.join("\t"))
    .join("\n");
