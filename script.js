const adviceId = document.getElementById("advice_id");
const adviceText = document.getElementById("advice");
const randomBtn = document.getElementById("random_btn");

const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    adviceId.textContent = `advice #${data.slip.id}`
    adviceText.textContent = `${data.slip.advice}`
}

fetchAdvice()