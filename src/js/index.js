const form = document.querySelectorAll('.input')
const enviar = document.querySelector('.enviar')


form.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value != "") {
            input.classList.add("permitido")
        }else {
            input.classList.remove("permitido")
        }
    });
});

console.log(enviar)


enviar.addEventListener('click', (erro) =>{
    form.forEach(input => {
        if (input.value =="") {
            erro.preventDefault()
            input.classList.add("negado");
            input.nextElementSibling.classList.add("negado");
        }else {
            input.classList.remove("negado");
            input.nextElementSibling.remove("negado");
        }
    });
});