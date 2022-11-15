class SideNav extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        let selected = this.getAttribute("selected");
        
        let hrefs = {
            atividade: this.getAttribute("atividade-href"),
            hospitais: this.getAttribute("hospitais-href"),
            funcionarios: this.getAttribute("funcionarios-href"),
            pacientes: this.getAttribute("pacientes-href")
        }

        const li_attributes_selected = "sidenav__item sidenav__item--expanded";
        const li_attributes_not_selected = "class=\"sidenav__item\"";
        const a_attributes_selected = "class=\"sidenav__link\" aria-current=\"page\"";
        const a_attributes_not_selected = "class=\"sidenav__link\"";

        this.innerHTML = `
        <div class="sm6-bg sm6-border-right sidebar" style="width: 90px; height: 100vh;">
            <nav class="sidenav sidenav--minified">
            <ul class="sidenav__list">
            <li ${(selected == "atividade" ? li_attributes_selected : li_attributes_not_selected)}>
                <a href="${hrefs.atividade}" ${(selected == "atividade" ? a_attributes_selected : a_attributes_not_selected)}>
                <?xml version="1.0" ?><svg id="Icons" aria-hidden="true" class="sm6-icon sidenav__icon" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M23,28L23,28c-1.1,0-2.1-0.7-2.5-1.8c0-0.1,0-0.2-0.1-0.2h-8.9c0,0.1,0,0.2-0.1,0.2C11.1,27.3,10.1,28,9,28h0  c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S23.6,28,23,28z"/><g><path d="M11,13v-2c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3h-2C11.4,14,11,13.6,11,13z"/><path d="M27,3H5C3.3,3,2,4.3,2,6v15c0,1.7,1.3,3,3,3h6.9h8.1H27c1.7,0,3-1.3,3-3V6C30,4.3,28.7,3,27,3z M16,14c0,2.8-2.2,5-5,5   s-5-2.2-5-5s2.2-5,5-5c0-0.6,0.4-1,1-1c2.8,0,5,2.2,5,5C17,13.6,16.6,14,16,14z M25,16h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2   c0.6,0,1,0.4,1,1S25.6,16,25,16z M25,13h-5c-0.6,0-1-0.4-1-1s0.4-1,1-1h5c0.6,0,1,0.4,1,1S25.6,13,25,13z"/></g></svg>
                <span class="sidenav__text sm6-text-xs">Atividade</span>
                </a>
            </li>
        
            <li ${(selected == "hospitais" ? li_attributes_selected : li_attributes_not_selected)}>
                <a href="${hrefs.hospitais}" ${(selected == "hospitais" ? a_attributes_selected : a_attributes_not_selected)}>
                <?xml version="1.0" ?><svg class="sm6-icon sidenav__icon" aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 492v20H0v-20c0-6.627 5.373-12 12-12h20V120c0-13.255 10.745-24 24-24h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v72h88c13.255 0 24 10.745 24 24v360h20c6.627 0 12 5.373 12 12zM308 192h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-168 64h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm104 128h-40c-6.627 0-12 5.373-12 12v84h64v-84c0-6.627-5.373-12-12-12zm64-96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-116 12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zM182 96h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6z"/></svg>
                <span class="sidenav__text sm6-text-xs">Hospitais</span>
                </a>
            </li>
        
            <li ${(selected == "funcionarios" ? li_attributes_selected : li_attributes_not_selected)}>
                <a href="${hrefs.funcionarios}" ${(selected == "funcionarios" ? a_attributes_selected : a_attributes_not_selected)}>
                <?xml version="1.0" ?><svg class="sm6-icon sidenav__icon" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M9.908,10.647a5.622,5.622,0,1,0-4.926.041A7.5,7.5,0,0,0,0,17.743a.5.5,0,0,0,.5.5H9a.5.5,0,0,0,.5-.5v-3a2,2,0,0,1,2-2h.957a.25.25,0,0,0,.173-.431A7.443,7.443,0,0,0,9.908,10.647ZM8.25,15.118a.75.75,0,1,1-1.5,0V13.463a.75.75,0,0,1,1.5,0ZM7.4,9.243A3.626,3.626,0,0,1,3.781,5.621,3.569,3.569,0,0,1,4.2,3.967,7.631,7.631,0,0,0,8.943,5.622,7.677,7.677,0,0,0,11,5.335c.008.1.029.188.029.286A3.626,3.626,0,0,1,7.4,9.243Z"/><path d="M24,15.5A1.5,1.5,0,0,0,22.5,14H20.75a.5.5,0,0,1-.5-.5V13a1.752,1.752,0,0,0-1.75-1.75h-2A1.752,1.752,0,0,0,14.75,13v.5a.5.5,0,0,1-.5.5H12.5A1.5,1.5,0,0,0,11,15.5v7A1.5,1.5,0,0,0,12.5,24h10A1.5,1.5,0,0,0,24,22.5ZM16.25,13a.251.251,0,0,1,.25-.25h2a.251.251,0,0,1,.25.25v.5a.5.5,0,0,1-.5.5h-1.5a.5.5,0,0,1-.5-.5ZM20,19.75a.25.25,0,0,1-.25.25H19a.5.5,0,0,0-.5.5v.75a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25V20.5A.5.5,0,0,0,16,20h-.75a.25.25,0,0,1-.25-.25v-1.5a.25.25,0,0,1,.25-.25H16a.5.5,0,0,0,.5-.5v-.75a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25v.75a.5.5,0,0,0,.5.5h.75a.25.25,0,0,1,.25.25Z"/></svg>
                <span class="sidenav__text sm6-text-xs">Funcionários</span>
                </a>
            </li>
    
            <li ${(selected == "pacientes" ? li_attributes_selected : li_attributes_not_selected)}>
                <a href="${hrefs.pacientes}" ${(selected == "pacientes" ? a_attributes_selected : a_attributes_not_selected)}>
                <?xml version="1.0" ?><svg class="sm6-icon sidenav__icon" aria-hidden="true" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7,13c2.209,0,4,1.791,4,4v0H5v-4H7z"/><path d="M24,9h-3v3h-2V9h-3V7h3V4h2v3h3V9z"/><path d="M30,21v7h-2v-4H4v4H2V11c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v7h23C28.657,18,30,19.343,30,21z"/></svg>
                <span class="sidenav__text sm6-text-xs">Pacientes</span>
                </a>
            </li>
            </ul>
        
            <div class="sidenav__divider sm6-margin-y-xs" role="presentation"></div>
        
            <ul class="sidenav__list">
            <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                <svg class="sm6-icon sidenav__icon" aria-hidden="true" viewBox="0 0 16 16"><g><circle cx="6" cy="8" r="2"></circle><path d="M10,2H6C2.7,2,0,4.7,0,8s2.7,6,6,6h4c3.3,0,6-2.7,6-6S13.3,2,10,2z M10,12H6c-2.2,0-4-1.8-4-4s1.8-4,4-4h4 c2.2,0,4,1.8,4,4S12.2,12,10,12z"></path></g></svg>
                <span class="sidenav__text sm6-text-xs">Configurações</span>
                </a>
            </li>
        
            <li class="sidenav__item sidenav__item--expanded">
                <a href="#0" class="sidenav__link">
                <svg class="sm6-icon sidenav__icon" aria-hidden="true" viewBox="0 0 16 16"><g><path d="M12.25,8.231C11.163,9.323,9.659,10,8,10S4.837,9.323,3.75,8.231C1.5,9.646,0,12.145,0,15v1h16 v-1C16,12.145,14.5,9.646,12.25,8.231z"></path><circle cx="8" cy="4" r="4"></circle></g></svg>
                <span class="sidenav__text sm6-text-xs">Usuário</span>
                </a>
            </li>
            </ul>
        </nav>
      </div>
        `;
    }
}

customElements.define("sidenav-component", SideNav);