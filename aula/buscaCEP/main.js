// sistema de busca do cep

// variavel para pegar os dados do cep
const formCep = document.getElementById("form-cep");
const inputCep = document.getElementById("input-cep");
const resultado = document.getElementById("resultado");

// identificar o envio do form

// addEventListener() faz com que escute acontecimentos dentro da página

formCep.addEventListener("submit",function(event) {
    event.preventDefault();
    //impedir que a pagina atualize e perca o resultado
    
    // capturando o cep
    const cep = inputCep.value.trim()
    // trim() remove os espaços em brancos que o usuario colocar
    /* 
        expressão regular
        uma forma de definir um padrão que meu texto precisa seguir
        ^ indica o inicio do texto
        {0-9} significa permitir os numeros de 0 a 9
        {8} exige 8 numeros
        $ indica o final do texto
    */
    const validacaoCep = /^[0-9]{8}$/;

    if (!validacaoCep.test(cep)) {
        resultado.innerHTML = '<p class="erro">Erro, Digite um cep válido com 8 números</p>';
        return;
    }

    resultado.innerHTML = '<p>Buscando CEP...</p>'
    // fetch() faz um requisão para a API
    fetch(`https://viacep.com.br/ws/${cep}/json/`)

    // transformar a resposta em json
    .then(response => response.json())

    // receber os dados do endereço
    .then(data => {
        if(data.erro){
            resultado.innerHTML = '<p class="erro">Erro, Cep Não Encontrado!</p>';
            return;
        }
        // mostrar os dados
        resultado.innerHTML = `
        <h2>Resultado</h2>
        <p><strong>CEP:</strong> ${data.cep}</p>
        <p><strong>Logradouro:</strong> ${data.logradouro || "Não informado"}</p>
        <p><strong>Bairro:</strong> ${data.bairro || "Não informado"}</p>
        <p><strong>Cidade:</strong> ${data.localidade || "Não informado"}</p>
        <p><strong>UF:</strong> ${data.uf || "Não informado"}</p>
        `;

        
    })
    .catch(() => {
            resultado.innerHTML = '<p class="erro">Erro ao buscar o CEP, tente novamente mais tarde</p>'
    });
});