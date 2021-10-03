function createMenu(){
    const menu = document.createElement("div")
    menu.classList.add("menu")

    menu.appendChild(createMenuItem("A5 Cobe Strip Steak", "Kobe Beef Cows are fed beer and massaged daily instead of exercise, sometimes with Sake rice wine to make up for the lack of exercise and to accentuate the fat marbling that makes Kobe so famous."));
    menu.appendChild(createMenuItem("Full Blood Wagyu Tenderloin", "Highest price wagyu beef outside of Japan, produced by the David Blackmore Farm in Alexandra, who is regarded as Australia's most esteemed Wagyu producer,"));
    menu.appendChild(createMenuItem("Charbroiled Kobe Fillet", "Regarded as one of the best steaks globally. This 8- ounce steak is served with just a dash of pepper and mustard"))
    menu.appendChild(createMenuItem("Select Kobe Fillet", "Fun Fact that Kobe Beef was not exported from Japan until 2012 and that all the beef marked as Kobe in the United States is not true Kobe beef. Only 8 restaurants are certified to serve Kobe Beef."))

    return menu;
}

function createMenuItem(name, description){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2")
    foodName.textContent = name;

    const foodDescription = document.createElement("p")
    foodDescription.textContent = description;

    const foodImg = document.createElement("img")
    foodImg.src = `images/steaks/${name.toLowerCase()}.jpeg`; 
    foodImg.alt = `${name}`

    menuItem.appendChild(foodImg)
    menuItem.appendChild(foodName)
    menuItem.appendChild(foodDescription)
    return menuItem;
}

function loadMenu(){
    const main = document.getElementById("main")
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;