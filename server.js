console.log("init");

data = "";
fetch(
  `http://dados.recife.pe.gov.br/api/3/action/datastore_search_sql?sql=SELECT * from "54232db8-ed15-4f1f-90b0-2b5a20eef4cf"`
) //** consulta a api buscando todas as unidades de saude
  .then((x) => x.json()) //** Converte o resultado para JSON
  .then((x) => x.result) //** Acessa a propriedade de resultados
  .then((x) => {
    var select = document.getElementById("bairro__select"); //** Encontra o select do html pelo id
    var options = x.records.map((x) => x.bairro); //** De todo o resultado, vamos pegar só o bairro

    var unique = [...new Set(options)]; //** remover os repetidos

    for (var i = 0; i < unique.length; i++) {
      //** para cada bairro
      var opt = unique[i];
      var el = document.createElement("option"); //** Crio uma opção dentro do select
      el.textContent = opt; //** Com o texto sendo o nome do bairro
      el.value = opt; //** E o valor sendo o nome do bairro também
      select.appendChild(el); //** Adicionamos ele como opção no select
    }
  });

var buscarDadosBairro = function (btn) {
  //** Médoto para buscar as informações do bairro específico
  var select = document.getElementById("bairro__select");
  let bairro = select.options[select.options.selectedIndex].value; //** Encontro o Bairro selecionado
  let nome = document.getElementById("name").innerHTML;

  try {
    fetch(
      `http://dados.recife.pe.gov.br/api/3/action/datastore_search_sql?sql=SELECT * from "54232db8-ed15-4f1f-90b0-2b5a20eef4cf" where bairro = '${bairro}'`
    ) //** Consulto o bairro específico
      .then((x) => x.json())
      .then((x) => x.result.records)
      .then((dadosBairro) => {
        for (let i = 0; i < dadosBairro.length; i++) {
          // console.log(dadosBairro[i]);
          data = dadosBairro[i];
          let resultadoTipoServico = document.getElementById("TIPO")
          let resultadoNome = document.getElementById("NOME");
          let resultadoEndereco = document.getElementById("ENDERECO");
          let resultadoTelefone = document.getElementById("TELEFONE");
          let resultadoHorario = document.getElementById("HORARIO")
          let tipoServico = data.tipo_servico
          let nomeBairro = data.nome_oficial;
          let endereco = data.endereço;
          let horario = data.horario
          let telefone = data.fone;
          resultadoTipoServico.innerHTML = tipoServico
          resultadoNome.innerHTML = nomeBairro;
          resultadoEndereco.innerHTML = endereco;
          resultadoTelefone.innerHTML = telefone;
          resultadoHorario.innerHTML = horario
        }
        //** Escreve nos logs o bairro
        //** Aqui você deve escrever o código conforme o que você quer fazer com o bairro
        //** Segundo as requisições do sistema
      });
  } catch (error) {
    console.error(error);
  }
};

//** para cada ubs
//** Crio uma opção dentro do select
//** Com o texto sendo o nome do bairro
//** E o valor sendo o nome do bairro também
//** Adicionamos ele como opção no select

var bairroSelect = document.getElementById("bairro__select"); //** Encontramos o select do bairro
bairroSelect.addEventListener("click", buscarDadosBairro); //** Vinculamos o método acima com o botão, ao clicar

//ADICIONAR NO WEBSTORAGE
let bairroButton = document.getElementById("bairro__button");

bairroButton.addEventListener("click", adicionar);

///
let nome = document.getElementById("name");
let endereco = document.getElementById("endereco");

let keyValue = endereco.textContent;
function adicionar() {
  //chave     //value
  localStorage.setItem(nome.value, endereco.value);
  //alert("Item adicionado.");
  nome.innerHTML = nome.textContent;
  nome.value = nome.textContent;
  endereco.value = endereco.textContent;
  key = nome.textContent;

  keyValue = endereco.value;
  //console.log(keyValue);
  //console.log(telefone);
  return ler(keyValue, key);
}
nomeRESULT = document.getElementById("NOME");
enderecoRESULT = document.getElementById("ENDERECO");
telefoneRESULT = document.getElementById("TELEFONE");
function ler(keyValue, key) {
  var obj = localStorage.getItem(key.value);
  if (obj != null) {
    //alert(`O endereço da UBS ${key} é ${keyValue}`);
    nomeRESULT.innerHTML = key;
    enderecoRESULT.innerHTML = keyValue;
    telefoneRESULT.innerHTML = telefone.textContent;
  } else console.log("");
}
