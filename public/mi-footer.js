customElements.define("mi-footer", class extends HTMLElement {
    connectedCallback() {
      this.innerText = "Copyright © 2019 Flores Baxin Mayra IC51-M.";
    }
  }, { extends: "footer" });