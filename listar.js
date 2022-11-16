
function editarProduto(){
    window.location = "edicao-produto.html";
}

function voltar(){
    window.location = "listar-produtosUm.html";
}

function voltarInicio(){
    window.location = "tela-principal.html";
}

function edicaoProduto(){

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
        alert('Edições salvas com sucesso!');
    }
  
}
