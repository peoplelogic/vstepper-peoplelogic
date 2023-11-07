import { unsafeCSS } from "lit";
import { html, LitElement, css } from "lit";

import { ThemableMixin } from "@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js";
import "@vaadin/vaadin-lumo-styles/color.js";
import "@vaadin/vaadin-lumo-styles/spacing.js";
import "./styles/stepper-styles.js";
import "./styles/step-header-styles.js";

class VStepper extends ThemableMixin(LitElement) {
  static get styles() {
    const includedStyles = {};
    includedStyles["stepper-styles"] =
      document.querySelector("dom-module[id='stepper-styles']")
        ?.firstElementChild?.content?.firstElementChild?.innerText ?? "";
    includedStyles["step-header-styles"] =
      document.querySelector("dom-module[id='step-header-styles']")
        ?.firstElementChild?.content?.firstElementChild?.innerText ?? "";
    includedStyles["lumo-color"] =
      document.querySelector("dom-module[id='lumo-color']")?.firstElementChild
        ?.content?.firstElementChild?.innerText ?? "";
    includedStyles["lumo-spacing"] =
      document.querySelector("dom-module[id='lumo-spacing']")?.firstElementChild
        ?.content?.firstElementChild?.innerText ?? "";
    return [
      unsafeCSS(includedStyles["stepper-styles"]),
      unsafeCSS(includedStyles["step-header-styles"]),
      unsafeCSS(includedStyles["lumo-color"]),
      unsafeCSS(includedStyles["lumo-spacing"]),
      css``,
    ];
  }
  render() {
    return html`
      <div id="header" class="header" part="header"></div>
      <div id="content" class="content" part="content"></div>
      <div id="footer" class="footer" part="footer"></div>
    `;
  }

  static get is() {
    return "v-stepper";
  }
}

window.customElements.define("v-stepper", VStepper);
