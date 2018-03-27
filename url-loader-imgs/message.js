import renderToDOM from'./render-to-dom';
import makeMessage from './make-message';
const waitTime = new Promise((succes,error)=>{
	setTimeout(()=>{
		succes("Segundo mensaje con retardo de 3 seg");
	},3000)

})
module.exports ={
	firstMessage:"Mensaje desde modulo",
	delayedMessage: async() => {
		const message = await waitTime;
		console.log(message)
		renderToDOM(makeMessage(message))
	}
}