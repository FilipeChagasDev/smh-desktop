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
            "Nome": {cellType: "text", text: "Hospital A"},
            "Endereço": {cellType: "text", text: "Rua ___, Bairo ___, Cidade, Estado"},
            "Telefone": {cellType: "text", text: "0000000000"},
            "CNPJ": {cellType: "text", text: "0000 0000 0000 0000"},
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

    btnCadastrar.addEventListener('click', (event)=>{
        window.electronAPI.openCadastrarHospital()
    })
})()