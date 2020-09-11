let firstPTag = document.querySelector("p");
firstPTag.style.fontSize = "1.5rem";

let allPTags = document.querySelectorAll("p");
for(var index = 0; index<allPTags.length; index++) {
    allPTags[index].style.color = "purple"
}

let title = document.getElementById("Panda-header");
title.style.color = "blue";

let footerLinks = document.getElementsByClassName("footer-links");
for(var index = 0; index<footerLinks.length; index++) {
    footerLinks[index].style.color = "red"
}

let pandaImage = document.getElementsByTagName("img");
for(var index = 0; index<pandaImage.length; index++) {
    pandaImage[index].style.width = "50%";
}

let newPTag = document.createElement("p");
let newTextNode = document.createTextNode("Pandas are cousins to the Red Panda.");
newPTag.appendChild(newTextNode);
//newPTag.innerHTML = "Pandas are cousins to the Red Panda.";
document.getElementById("Panda-content").append(newPTag);

let Pandaheader = document.getElementById("Panda-header");
Pandaheader.removeChild(Title);

Pandaheader.classList.add("header-background");

let Pandacontent = document.getElementById("Panda-content");
Pandacontent.classList.remove("header-background");

let Pandafooter = document.getElementById("Panda-footer");
Pandafooter.classList.toggle("header-background");