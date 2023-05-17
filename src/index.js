import './style.css';
import { mainname, menu, contact, pic, about } from './pageload'
import {menuPage} from './menu'
import { contactPage } from './contact';
menu.addEventListener('click', () => {
    about.style.opacity = "0";
    contactPage.style.opacity = "0";
    menuPage.style.opacity = "0";
    menuPage.style.display = 'block';

    setTimeout(() => {
        about.style.display = "none";
        contactPage.style.display = 'none';
    }, 500);

    setTimeout(() => {
        menuPage.style.opacity = "1";
    }, 600);
});


contact.addEventListener('click', () => {
    about.style.opacity = "0";
    contactPage.style.opacity = "0";
    menuPage.style.opacity = "0";
    contactPage.style.display = 'block';

    setTimeout(() => {
        about.style.display = "none";
        menuPage.style.display = 'none';
    }, 500);

    setTimeout(() => {
        contactPage.style.opacity = "1";
    }, 600);
});


mainname.addEventListener('click', () => {
    about.style.opacity = "0";
    contactPage.style.opacity = "0";
    menuPage.style.opacity = "0";
    about.style.display = "block";

    setTimeout(() => {
        contactPage.style.display = 'none';
        menuPage.style.display = 'none';
    }, 500);

    setTimeout(() => {
        about.style.opacity = "1";
    }, 600);
});
