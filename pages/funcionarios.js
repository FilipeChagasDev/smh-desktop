(()=>{
    let tabela = document.getElementById("tabela")
    let slctBusca = document.getElementById("slct-busca")
    let btnBuscar = document.getElementById("btn-buscar")
    let btnAtualizar = document.getElementById("btn-atualizar")
    let btnCadastrar = document.getElementById("btn-cadastrar")
    let inBusca = document.getElementById("in-busca")

    for(let i = 0; i < 10; i++)
    {
        tabela.addRow({
            "ID": {cellType: "text", text: "00000"},
            "Nome": {cellType: "text", text: "Fulano"},
            "CPF": {cellType: "text", text: "000 000 000 00"},
            "Profissão": {cellType: "text", text: "Médico"},
            "Especialidade": {cellType: "text", text: "Ortopedia"},
            "Hospital": {cellType: "text", text: "Hospital A"},
            "Ação": {
                cellType: "button", 
                text: "Abrir", 
                callback: (rowContent)=>{ console.log(JSON.stringify(rowContent)) } 
            }, 
        })
    }

    btnBuscar.addEventListener('click', (event)=>{
        console.log(slctBusca.getOption())
        console.log(inBusca.value)
    })
})()