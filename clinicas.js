console.log("CLINICASinit")
/*SELETORES*/
const select = document.getElementById("bairro__selectClinicas")
const buscarButton = document.getElementById("bairro__buttonClinicas")
const tipoClinica = document.getElementById("tipoClinica")
const nomeClinica = document.getElementById("nomeClinica")
const enderecoClinica = document.getElementById("enderecoClinica")
const horarioClinica = document.getElementById("horarioClinica")
const telefoneClinica = document.getElementById("telefoneClinica")

/*FIM SELETORES*/

try {
    fetch(
        `http://dados.recife.pe.gov.br/api/3/action/datastore_search_sql?sql=SELECT * from "09528351-d546-48ef-8654-42533bd2c8c3"`
    )
    .then((x) => x.json())
    .then((x) => x.result)
    .then((x) => {
        let options = x.records.map((x) => x.bairro)
        let unique = [ ...new Set(options)]
        
        for (let i = 0; i < unique.length; i++) {
            let opt = unique[i]
            el = document.createElement("option")
            el.textContent = opt
            el.value = opt
            select.appendChild(el)
            console.log(unique[i])
        }
    })
} catch (error) {
      console.error(error)
}  

const buscarDadosBairroClinica = (btn) => {
    let bairro = select.options[select.options.selectedIndex].value
    
    try {
        fetch (
            `http://dados.recife.pe.gov.br/api/3/action/datastore_search_sql?sql=SELECT * from "09528351-d546-48ef-8654-42533bd2c8c3" WHERE bairro = '${bairro}'`
        ) .then((x) => x.json())
          .then((x) => x.result.records)
          .then((dadosBairro) => {
            for (let i = 0; i < dadosBairro.length; i++) {
                dados = dadosBairro[i]
                console.log(dadosBairro[i])
                tipoClinica.innerHTML = dados.tipo_servico
                nomeClinica.innerHTML = dados.nome_oficial
                enderecoClinica.innerHTML = dados.endereço
                horarioClinica.innerHTML = dados.horario
                telefoneClinica.innerHTML = dados.fone
            }
          })
    } catch(error) {
        console.error(error)
    }
    

}
  buscarButton.addEventListener("click", buscarDadosBairroClinica)