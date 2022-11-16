class CustomSelect extends HTMLElement
{
    constructor()
    {
        super()
        this.options = []
    }

    connectedCallback()
    {
        if (this.hasAttribute("options"))
        {
            this.options = this.getAttribute("options").split(",")
        }

        let select_content = "";
        this.options.forEach((op, idx)=>{
            select_content += `<option value="${idx}">${op}</option>\n`
        })

        this.innerHTML = `
        <label class="select" for="slct" style="display: inline-block;">
            <select id="slct" required="required">
                ${select_content}
            </select>
            <svg>
                <use xlink:href="#select-arrow-down"></use>
            </svg>
        </label>
        <svg class="sprites">
            <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
            </symbol>
        </svg>
        `
    }

    getOption()
    {
        let myselect = this.getElementsByTagName("select")[0]
        return this.options[myselect.selectedIndex]
    }
}

customElements.define("select-component", CustomSelect);