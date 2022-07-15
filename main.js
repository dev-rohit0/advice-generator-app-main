let adviceNumber = document.getElementById('advice-number')
let advice = document.getElementById('advice')
let btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 220)}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        adviceNumber.innerText = data.slip.id
        advice.innerText = data.slip.advice
    })
})

