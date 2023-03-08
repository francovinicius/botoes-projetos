let projetos = []
const elementoParaInserirProjetos = document.getElementById("projetos-lista")

buscarProjetos();


async function buscarProjetos() {

    const res = await fetch('projetos.json')
    projetos = await res.json()
    exibirOsProjetosNaTela(projetos)

}


function exibirOsProjetosNaTela(listaDeProjetos){
    elementoParaInserirProjetos.innerHTML = ''
    listaDeProjetos.forEach(projeto => {
        elementoParaInserirProjetos.innerHTML += `
        <div class="div-cards d-flex justify-content-center">
        <div class="card card text-bg-dark card-projetos" style="width: 18rem;">
          <a href="${projeto.vercel}" target="_blank">
            <img src="${projeto.imagem}" class="card-img-top card-img-top-projetos"
              alt="${projeto.alt}">
          </a>
          <div class="div-cards card-body card-body-projetos">
            <h5 class="card-title">${projeto.titulo}</h5>
            <span style="display: none;">${projeto.categoria}</span>
            <span style="display: none;">${projeto.mostrar}</span>
            <p class="card-text">
              ${projeto.resumo}
            </p>
              <div class="btn-group btn-al">
                <a type="button" href="${projeto.vercel}" target="_blank"
                  class="btn btn-sm btn-outline-secondary">View</a>
                <a type="button" href="${projeto.repositorio}" target="_blank"
                  class="btn btn-sm btn-outline-secondary">Repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    });
}

