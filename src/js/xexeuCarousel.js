'use strict';

class XexeuCarousel extends HTMLElement {
  static get ELEMENT_NAME() {
    return 'xexeu-carousel';
  }

  connectedCallback() {
    console.log('element is in the DOM');
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {

  }
}

export default XexeuCarousel;