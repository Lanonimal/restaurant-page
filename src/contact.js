function createContact(){
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const phoneNumber = document.createElement("p")
    phoneNumber.textContent = '+00 123 456 789'

    const address = document.createElement("p")
    address.textContent = "UpOnly Boulevard 69, Los Angeles, Usa"

    const locationImg = document.createElement("img")
    locationImg.src = "images/locationImg.png"
    locationImg.alt = "Name restaurant location"

    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(locationImg)

    return contact;
}

function loadContact() {
    const main = document.getElementById("main")
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;