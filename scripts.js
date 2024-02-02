const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

/* AddEventListenerv = permite executar uma ou mais funções quando um evento acontece . */
/* form = elemento ao qual se deseja adicionar seu manipulador de eventos, ou seja um elemento do DOM 
submit = uma string que irá especificar o nome do evento que será detectado (e) quando queremos ter mais informações sobre o evento como por exemplo , qual elemento foi clicando 
temos que passar um parâmetro que nesse caso é o (e) o (e) representa um objeto que irá conter várias informações sobre o evento como o id por exemplo*/

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});


function setSuccessFor(input) {
    /* parentElement = seleciona o pai direto do elemento especificado  */
    const formControl = input.parentElement;

    /* Adicionar a classe de sucesso */
    formControl.className = "form-control success";
}

function setErrorFor(input, message) {
    /* retorna a div que é pai do input */
    const formControl = input.parentElement;

    /* querySelector = retorna apenas o primeiro elemento especificado dentro do elemento pai */
    const small = formControl.querySelector("small");

    /* Adiciona a mensagem do erro  */
    small.innerText = message;

    /* Adiciona a classe do erro  */
    formControl.className = "form-control error";
}

/* hoisting */
function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuario é obrigatorio:");
    }
    else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatorio");
    }
    else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email valido.");
    }
    else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatoria.")
    }
    else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no minimo 7 caracteres.")
    }
    else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatoria,");
    }
    else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas nao conferem.");
    }
    else {
        setSuccessFor(passwordConfirmation);
    }

}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}





