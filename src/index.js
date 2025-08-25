// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./images.jpeg";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);


console.log(greeting);
