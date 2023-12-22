let text = document.querySelector('h1')

const now = new Date();
let month = now.getMonth();
let day = now.getDate();
if (month === 11 && day === 25){
  text.innerHTML = "🥳YES🥳";  
}  
else {
  text.innerHTML = "🥲NO🥲";  
}
