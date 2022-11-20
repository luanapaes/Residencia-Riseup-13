function cadastrarUsuario(){

    var nome     = document.getElementById('nome').value;
    var cpf_cnpj = document.getElementById('cpf-cnpj').value;
    var email    = document.getElementById('email').value;
    var senha    = document.getElementById('senha').value;
    var cf_senha = document.getElementById('cf-senha').value;

    if(nome == "" && cpf_cnpj == "" && email == "" && senha == "" && cf_senha == ""){
        alert('Insira seus dados.')
    }
    else if(nome == "" || cpf_cnpj == "" || email == "" || senha == "" || cf_senha == ""){
        alert('Insira todos os dados.')
    }
    else if(senha != cf_senha ){
        alert('As senhas devem ser iguais.')
    }
    else{
        alert('Usuário cadastrado. Faça login');
        window.location = "index.html";
    }
}

function logar(){

    var login     = document.getElementById('login').value;
    var senha    = document.getElementById('senha').value;

    if(login == "" && senha == ""){
        alert('Insira email e senha.')
    }
    else if(login == "" || senha == ""){
        alert('Insira todos os dados.')
    }
    else{
        window.location = "tela-principal.html";
    }
}

function recuperarSenha(){

    var email    = document.getElementById('email').value;
    var senha    = document.getElementById('senha').value;
    var cf_senha = document.getElementById('cf-senha').value;

    if(email == "" && senha == "" && cf_senha == ""){
        alert('Preencha os campos corretamente')
    }
    else if(email == "" || senha == "" || cf_senha == ""){
        alert('Preencha todos os dados.')
    }
    else if(senha != cf_senha){
        alert('As senhas devem ser iguais.')
    }
    else{
        alert('Senha alterada com sucesso')
        window.location = "index.html";
    }
}
