const botoes = document.querySelectorAll(".bttn")
botoes.forEach(btn => btn.addEventListener('click', filtrarProjetos))



function filtrarProjetos() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let projetosFiltrados = projetos.filter(projeto => projeto.categoria == categoria)
    console.table(projetosFiltrados)
}

