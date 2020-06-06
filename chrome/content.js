let spanHeadings = document.querySelectorAll(".toctext");
let h2Headings = document.querySelectorAll(".mw-headline");

for(let i = 0; i < spanHeadings.length; i++) {
    let heading = spanHeadings[i].innerHTML;
    spanHeadings[i].innerHTML = replacePersonalLife(heading); 
}

for(let i = 0; i < h2Headings.length; i++) {
    let heading = h2Headings[i].innerHTML;
    h2Headings[i].innerHTML = replacePersonalLife(heading);
}

function replacePersonalLife(heading) {
    if(heading.includes("Personal life")) {
        return heading.replace("Personal life", "Gay?");
    } else {
        return heading; 
    }
}