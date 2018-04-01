import "./estilos.css"
import { firstMessage, delayedMessage } from './message'
import imgExternal from './img.png';
document.write(firstMessage)
delayedMessage();
const img = document.createElement('img');
img.setAttribute('src',imgExternal);
document.body.append(img);
console.log("hello")
console.log("hello")
