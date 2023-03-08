let projects = []
const endpointDaAPI = 'https://github.com/francovinicius/botoes-projetos/blob/main/projetos.json'

getBuscarProjetosDaAPI()

async function getBuscarProjetosDaAPI() {
    const res = await fetch (endpointDaAPI)

    projects = await res.json
    console.table(projects)
}