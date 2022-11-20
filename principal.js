
function sair() {
    alert('Deseja sair?')
    window.location = "index.html";
}

function voltar(){
    window.location = "tela-principal.html";
}

function cadastrarNovoProduto() {
    window.location = "cadastro-produto.html";
}

function listarProdutos(){
    window.location = "listar-produtosUm.html";
}

function editarProduto(){
    window.location = "edicao-produto.html";
}

function pesquisarProduto(){ 
    window.location = "pesquisa-iphone.html";
}

function cadastrarProduto(){

    var nomeProduto = document.getElementById('nome-produto').value;
    var valorProduto = document.getElementById('valor-produto').value;
    var qtdeProduto = document.getElementById('qtde').value;

    if(nomeProduto == "" && valorProduto == "" && qtdeProduto == ""){
        alert('Insira as informações do produto.');
    }
    else if(nomeProduto == "" || valorProduto == "" || qtdeProduto == ""){
        alert('Insira todas as informações do produto.');
    }
    else{
        alert('Produto cadastrado');
    }
  
}

