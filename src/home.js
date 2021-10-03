function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const homeImg = document.createElement("img");
    homeImg.src = "images/homeImg.jpeg";
    homeImg.alt = "steak";

    home.appendChild(createParagraph("The greatest steak worldwide"));
    home.appendChild(createParagraph("Made with the finest ingredients & excellent craftsmanship"));
    home.appendChild(homeImg);
    home.appendChild(createParagraph("Contact us to reserve a table"));

    return home;
}

function createParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main")
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;