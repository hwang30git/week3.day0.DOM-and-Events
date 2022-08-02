let mainContainer = document.getElementsByClassName("main_container")[0];

let pykeDiv = document.createElement("div");
pykeDiv.classList.add("champ_container");
pykeDiv.classList.add("pyke");
mainContainer.append(pykeDiv);

console.dir(pykeDiv);
pykeDiv.innerHTML = "<h2>pyke, the bloodharbor ripper</h2>"

let pykes = document.getElementsByClassName("pyke");
for (let pyke of pykes) {
    pyke.style.backgroundImage = "../../assets/pyke.jpg";
    pyke.style.color = "#92fdfe";
}