
'use strict';

class XexeuCarouselItem extends HTMLElement {
  static get ELEMENT_NAME() {
    return 'xexeu-carousel-item';
  }

  connectedCallback() {
    console.log('element is in the DOM');
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {

  }
}

export default XexeuCarouselItem;