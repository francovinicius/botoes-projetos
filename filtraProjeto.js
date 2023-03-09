const botoes = document.querySelectorAll(".bttn")


botoes.forEach(btn => btn.addEventListener('click', filtrarProjetos))

function filtrarProjetos() {

    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let projetosFiltrados = projetos.filter(projeto => projeto.categoria == categoria)

    exibirOsProjetosNaTela(projetosFiltrados)

}


const botaoAll = document.querySelectorAll(".bt")


botaoAll.forEach(btn => btn.addEventListener('click', filtrarTodosProjetos))

function filtrarTodosProjetos() {

    const elementoBt = document.getElementById(this.id)
    const categoria = elementoBt.value
    let todosProjetosFiltrados = projetos.filter(projeto => projeto.mostrar == categoria)

    exibirOsProjetosNaTela(todosProjetosFiltrados)

}