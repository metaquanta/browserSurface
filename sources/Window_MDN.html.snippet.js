const mtype = ["property", "method"];
"property\tkind\turl\texperimental\tunstable\tobsolete\tdeprecated\n" +
$$('details')
    .slice(0,2)
    .flatMap((d, i) =>  Array.from(d.getElementsByTagName("li"))
        .map(l => [l.getElementsByTagName("a")[0], Array.from(l.getElementsByTagName("i"))])
        .map(l => [l[0], new Set(l[1].map(i => i.className))])
        .map(l => [
            l[0].innerText,
            mtype[i],
            l[0].getAttribute("href"),
            l[1].has("icon-beaker"),
            l[1].has("icon-warning-sign"),
            l[1].has("icon-trash"),
            l[1].has("icon-thumbs-down-alt")
        ])
    )
    .map(l => l.join("\t"))
    .join("\n");
