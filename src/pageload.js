const content = document.querySelector('#content')

let mainname = document.createElement('div')
mainname.className = "name"
mainname.textContent = 'ZAKS RESTAURANT'
content.appendChild(mainname)

let menu = document.createElement('div')
menu.className = "menu"
menu.textContent = 'MENU'
content.appendChild(menu)

let contact = document.createElement('div')
contact.className = "contact"
contact.textContent = 'CONTACT'
content.appendChild(contact)

let pic = document.createElement('div')
pic.className = "pic"
content.appendChild(pic)

let about = document.createElement('div')
about.className = "about"
about.textContent = "Welcome to the enchanting world of Zaks Restaurant, where culinary excellence meets captivating ambiance. Our website is designed to transport you into the extraordinary realm of Zaks, where every detail is crafted with meticulous care to create an unforgettable dining experience.";
document.body.appendChild(about);
export { mainname, menu, contact, pic, about };