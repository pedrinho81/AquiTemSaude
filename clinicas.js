console.log("CLINICASinit")
/*SELETORES*/
const select = document.getElementById("bairro__selectClinicas")
const buscarButton = document.getElementById("bairro__buttonClinicas")
const buscarrButton = document.getElementById("bairro__buttonClinicass")
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
            //console.log(unique[i])
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
                //console.log(dadosBairro[i])
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

//SCRIPTS DE ESTILIZAÇÃO

function initScrollSuave() {
    const linksInternos = document.querySelectorAll(".js-menu a[href^='#p'")
    
    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection)
    })
    
    
    function scrollToSection (event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href) 
        
        section.scrollIntoView({   
            behavior: "smooth", 
            block: "start" 
        });
       }
    }
    
    initScrollSuave()
    
    function initAnimacaoScroll(){
    
       window.addEventListener("scroll", animaScroll)
       
       const sections = document.querySelectorAll(".js-scroll")
       const windowMetade = window.innerHeight * 0.75
       function animaScroll(){
           sections.forEach((section) => {
               const sectionTop = section.getBoundingClientRect().top;
               const isSectionVisible = (sectionTop - windowMetade) < 0;
               if(isSectionVisible){
                   section.classList.add("ativo")
               } else 
                   section.classList.remove("ativo")
           })
       }
       
       animaScroll()
       }
    
       initAnimacaoScroll()


       

function animationClinicas() {
    const texts = document.querySelectorAll("#dadosClinica p")
    texts.forEach((result) => {
        
        result.classList.toggle("resultAnimation")
        
       
        
    }) 
    
}

const botaoAnimation = document.getElementById("bairro__buttonClinicas")

botaoAnimation.addEventListener("click", animationClinicas)