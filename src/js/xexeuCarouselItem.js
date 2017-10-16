
'use strict';

class XexeuCarouselItem extends HTMLElement {
  static get ELEMENT_NAME() {
    return 'xexeu-carousel-item';
  }

  static get observedAttributes() {
    return ['displaying'];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.style.cssText = `
      display: none;
      position: relative;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      transition: transform ${this.transitionTime}s ${this.transitionType};
    `;

    if (this.hasAttribute('displaying')) {
      this.showObject();
    }
  }

  showObject() {
    this.style.display = 'flex';
  }

  hideObject() {
    this.style.display = 'none';
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    switch (attributeName) {
      case 'displaying':
        if (newValue === "") {
          this.showObject();
        } else {
          this.hideObject();
        }
    }
  }

  get transitionTime() {
    return (
      this.getAttribute('transition-time') ||
      this.parentElement.getAttribute('transition-time') ||
      .3
    );
  }

  get transitionType() {
    return (
      this.getAttribute('transition-type') ||
      this.parentElement.getAttribute('transition-type') ||
      'ease-in-out'
    );
  }
}

export default XexeuCarouselItem;