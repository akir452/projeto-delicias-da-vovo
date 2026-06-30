const formulario = document.getElementById ("form");

formulario.addEventListener('submit', function(evento){

    const nome = document.getElementById('nome').value;
    const email = document.getElementById ('email').value;

    if (nome.trim() === '') {
        alert ('por favor, preencha o campo Nome.');
        return;
    }

      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, digite um e-mail válido.');
        evento.preventDefault();
        return;
    }
})
