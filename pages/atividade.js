(()=>{
    let tabela = document.getElementById("tabela")
    let btnBuscar = document.getElementById("btn-buscar")
    let btnAtualizar = document.getElementById("btn-atualizar")
    let inHospital = document.getElementById("in-hospital")
    let inQuarto = document.getElementById("in-quarto")

    for(let i = 0; i < 10; i++)
    {
        tabela.addRow({
            "Hospital": {cellType: "text", text: "Hospital A"},
            "Quarto": {cellType: "text", text: "0"},
            "Qtd de pessoas": {cellType: "text", text: "0"},
            "Qtd de pacientes": {cellType: "text", text: "0"},
            "Qtd de profissionais": {cellType: "text", text: "0"},
            "Horário": {cellType: "text", text: "00:00"},
            "Ação": {
                cellType: "button", 
                text: "Visualizar", 
                callback: (rowContent)=>{ console.log(JSON.stringify(rowContent)) } 
            }, 
        })
    }

    btnBuscar.addEventListener('click', (event)=>{
        //console.log(inHospital.value)
        //console.log(inQuarto.value)
    })

    btnAtualizar.addEventListener('click', (event)=>{
        /*...*/
    })
})()