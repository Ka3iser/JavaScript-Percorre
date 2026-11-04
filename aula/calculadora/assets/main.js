// input da tela/display
const tela = document.getElementById("tela");

// fun~]ao para mostrar valores na tela
function adicionarValor(valor) {
    tela.value+=valor;
}

// função limpar display

function limparTela() {
    tela.value = '';
}

// função deletar ultimo digitado

function del() {
    tela.value = tela.value.slice(0, -1);
}

function calcularResultado() {
    try{
        // eval() - interpreta uma string como uma expressão numerica
        tela.value = eval(tela.value);
    }catch(erro){
        tela.value="Erro";
    }
}

// adicionar eventos

document.addEventListener('keydown', function(evento){
    const tecla = evento.key;
    if("0123456789*/-+.".includes(tecla)){
        adicionarValor(tecla);
    }
    if(tecla==="Enter" || tecla==="="){
        calcularResultado();
    }
    if(tecla==="Backspace"){
        del();
    }
    if(tecla==="Escape"){
        limparTela();
    }
})