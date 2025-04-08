import "./styles.css";



import {homeTab} from './home.js';
import {menuTab} from './menu.js';
import {aboutTab} from './about.js';


console.log("this is the index.js message");

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');

const content = document.querySelector("#content");

home.addEventListener("click",()=>{
    content.innerHTML = "";
    homeTab();

});

menu.addEventListener("click",()=>{
    content.innerHTML = "";
    menuTab();
});


about.addEventListener("click",()=>{
    content.innerHTML = "";
    aboutTab();
});




homeTab();