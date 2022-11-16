class CustomTable extends HTMLElement
{
    constructor()
    {
        super()
        this.columns = []
        this.rows = []
        this.rowNodes = []
    }

    connectedCallback()
    {
        if (this.hasAttribute("columns"))
        {
            this.columns = this.getAttribute("columns").split(",")
        }

        let header_contend = "";
        this.columns.forEach((col, idx)=>{
            header_contend += `<div class=\"cell\">${col}</div>\n`
        })

        this.innerHTML = `
        <div class="table">
            <div class="row header">
                ${header_contend}
            </div>
        </div>
        `
    }

    addRow(rowContent)
    {
        let rowIndex = this.rows.push(rowContent) - 1
        let mytable = this.getElementsByClassName("table")[0]
        let myrow = document.createElement("div")
        myrow.setAttribute("class", "row")
        myrow.getAttribute("rowIndex", rowIndex.toString())
        mytable.appendChild(myrow)
        this.rowNodes.push(myrow)

        this.columns.forEach((col)=>{
            let cellContent = rowContent[col]
            if (cellContent == undefined) alert("Erro no método addRow da classe CustomTable. O objeto passado em rowContent é inválido, pois não possui um atributo para a coluna " + col)
            if (cellContent.cellType == "text")
            {
                let mycell = document.createElement("div")
                mycell.setAttribute("class", "cell")
                mycell.setAttribute("data-title", col)
                mycell.innerText = cellContent.text
                myrow.appendChild(mycell)
            }
            else if (cellContent.cellType == "button")
            {
                let mycell = document.createElement("div")
                mycell.setAttribute("class", "cell")
                mycell.setAttribute("data-title", col)

                let mybutton = document.createElement("button")
                mybutton.setAttribute("class", "button-13")
                mybutton.setAttribute("role", "button")
                mybutton.innerText = cellContent.text
                let mybuttonCallback = cellContent.callback
                
                if (mybuttonCallback != undefined)
                {      
                    mybutton.addEventListener("click", (event)=>{mybuttonCallback(rowContent)})
                } 
                
                mycell.appendChild(mybutton)
                myrow.appendChild(mycell)
            }
            else 
            {
                alert("Erro no método addRow da classe CustomTable. O membro " + col + "do objeto passado em rowContent não possui um atributo cellType com valor valido. O valor atual é: " + cellContent.cellType)
            }
        })
    }

    removeAllRows()
    {
        let internalTableNode = this.getElementsByClassName("table")[0]

        this.rowNodes.forEach((rowNode, index)=>{
            internalTableNode.removeChild(rowNode)
        })
    }
}

customElements.define("table-component", CustomTable);