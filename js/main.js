let result = document.getElementById("result");
let inputs = document.querySelectorAll(".input-value");
let icon = document.getElementById("icon")
let section = document.getElementById("section")
let hh = document.getElementsByClassName("input-valid")
inputs.forEach(input => {
    input.addEventListener("click", () => {
        if (input.classList.contains('number')) {
            result.value += input.value
        }
        if (input.classList.contains('operator')) {
            result.value += `${input.value}`
        }
        if (input.classList.contains('equal')) {
            result.value = eval(result.value)
        }
        if (input.classList.contains('clear')) {
            result.value = ""
        }
        if (input.classList.contains('delete')) {
            var vlu = result.value
            result.value = vlu.slice(0,-1)
        }
    })
    icon.addEventListener("click",()=>{
        input.classList.toggle("input-value2")

    })
})
icon.addEventListener("click",()=>{
section.classList.toggle("dark-background")
result.classList.toggle("color")
})



