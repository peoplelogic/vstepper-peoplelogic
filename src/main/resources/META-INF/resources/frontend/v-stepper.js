import { unsafeCSS } from "lit";
import { html, LitElement, css } from "lit";

import { ThemableMixin } from "@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js";
import "@vaadin/vaadin-lumo-styles/color.js";
import "@vaadin/vaadin-lumo-styles/spacing.js";

class VStepper extends ThemableMixin(LitElement) {
  static styles = css`
  :host {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

.header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--lumo-contrast-10pct);
    margin: var(--lumo-space-m) var(--lumo-space-m) 0 var(--lumo-space-m);
    padding-bottom: var(--lumo-space-s);
    overflow-x: auto;
}

.content {
    display: flex;
    flex-grow: 1;
    margin: var(--lumo-space-s) var(--lumo-space-m);
    overflow-y: auto;
}

.footer {
    display: flex;
    justify-content: space-between;
    margin: var(--lumo-space-s) var(--lumo-space-m);
}

.step-header {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    align-items: center;
}

.step-header:after {
    height: 1px;
    background: var(--lumo-primary-color);
    content: "";
    position: absolute;
    top: 18px;
    left: 0px;
    right: 0px;
}

.step-header:first-child:after {
    left: 50%;
    width: 50%;
}

.step-header:last-child:after {
    width: 50%;
}

.number-wrapper {
    padding-left: 10px;
    padding-right: 10px;
    background-color: var(--lumo-tint);
    z-index: 1;
}

.step-number {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--lumo-primary-color);
    border-radius: 100%;
    background: var(--lumo-tint);
    color: var(--lumo-primary-color);
    margin: var(--lumo-space-xs) 0;
}

.step-title {
    font-size: 14px;
    max-width: 200px;
    overflow-wrap: break-word;
}

.step-header.completed .step-number {
    background: var(--lumo-primary-color);
    color: var(--lumo-tint);
}

.step-header.active .step-number:after {
    content: "";
    position: absolute;
    height: 34px;
    width: 34px;
    border: 1px solid var(--lumo-primary-color);
    border-radius: 100%;
    -webkit-animation: current-step 1s infinite;
    -moz-animation: current-step 1s infinite;
    -o-animation: current-step 1s infinite;
    animation: current-step 1s infinite;
    animation-direction: alternate;
    animation-fill-mode: both;
}

@-webkit-keyframes current-step {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
}

@-moz-keyframes current-step {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
}

@-o-keyframes current-step {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
}

@keyframes current-step {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
}
  `
  // static get styles() {
  //   const includedStyles = {};
  //   includedStyles["stepper-styles"] =
  //     document.querySelector("dom-module[id='stepper-styles']")
  //       ?.firstElementChild?.content?.firstElementChild?.innerText ?? "";
  //   includedStyles["step-header-styles"] =
  //     document.querySelector("dom-module[id='step-header-styles']")
  //       ?.firstElementChild?.content?.firstElementChild?.innerText ?? "";
  //   includedStyles["lumo-color"] =
  //     document.querySelector("dom-module[id='lumo-color']")?.firstElementChild
  //       ?.content?.firstElementChild?.innerText ?? "";
  //   includedStyles["lumo-spacing"] =
  //     document.querySelector("dom-module[id='lumo-spacing']")?.firstElementChild
  //       ?.content?.firstElementChild?.innerText ?? "";
  //   return [
  //     unsafeCSS(includedStyles["stepper-styles"]),
  //     unsafeCSS(includedStyles["step-header-styles"]),
  //     unsafeCSS(includedStyles["lumo-color"]),
  //     unsafeCSS(includedStyles["lumo-spacing"]),
  //     css``,
  //   ];
  // }
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