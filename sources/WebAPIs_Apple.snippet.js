Array.from($$('div.section-content')[1].querySelectorAll("div.has-inline-element a")).map(c=>`${c.innerText}\t${c.href}`).join("\n")
