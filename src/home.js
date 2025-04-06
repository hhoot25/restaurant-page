
import strawberryMatcha from "./images/strawberryMatcha.png";



export function homeTab(){
    const content = document.querySelector('#content');

    //content title
    const top = document.createElement("div");
    const newContent = document.createTextNode("Welcome to Matcha Express!");
    top.classList.add('top');

    top.appendChild(newContent);

    content.appendChild(top);

    //add matcha photo
    const image = document.createElement('img');
    image.src = strawberryMatcha;
    content.appendChild(image);

    //mission statement
    const box1 = document.createElement('div');
    box1.classList.add('card');

    const box1title = document.createElement('div');
    box1title.classList.add('title');
 
    const quoteTitle = document.createTextNode("Mission Statement");
    const statementText = document.createTextNode("\"It all started with the BOGO sign on the door, buy one Strawberry Matcha get one! That when the idea struck me. Why isn't there a matcha store?\"");
    const creditText = document.createTextNode(" -Matt Endeavor");

    box1title.appendChild(quoteTitle);

    box1.appendChild(box1title);
    box1.appendChild(statementText);
    box1.appendChild(creditText);

    content.appendChild(box1);
    

}