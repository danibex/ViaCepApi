let estado = document.getElementById("estado")
let bairro = document.getElementById("bairro")
let localidade = document.getElementById("localidade")
let logradouro = document.getElementById("logradouro")

    function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main() {
    let cep = document.getElementById("cep")
    cep = cep.value.toString()
    let data = fazGet(`https://viacep.com.br/ws/${cep}/json/`);
    let informacao = JSON.parse(data);
    estado.value = informacao.uf
    bairro.value = informacao.bairro
    localidade.value = informacao.localidade
    logradouro.value = informacao.logradouro
    console.log(informacao)
}

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
      var btn = document.getElementById("botao")
    btn.click();
  }
});