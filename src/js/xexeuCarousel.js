'use strict';
import XexeuCarouselItem from './xexeuCarouselItem.js';

class XexeuCarousel extends HTMLElement {
  static get ELEMENT_NAME() {
    return 'xexeu-carousel';
  }

  constructor() {
    super();
    this.style.cssText = `
      display: block;
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 100%;
    `;
  }

  connectedCallback() {
    this.startupCarousel();
    setInterval(() => {
      this.nextCarouselItem();
    }, 3000)
  }

  startupCarousel() {
    const children = Array.from(this.children);
    const validChildren = children.filter(this.isValidChild);
    this.carouselItems = validChildren;
    this.currentDisplayingItem = validChildren[0];
    const invalidChildren = children.filter((child) => !this.isValidChild(child));
    invalidChildren.forEach((child) => {
      console.warn('XexeuCarousel: a invalid child is found and will be removed. Only xexeu-carousel-item is allowed as a top-level child.')
      return this.removeChild(child);
    });
  }

  nextCarouselItem() {
    const nextItem = this.currentDisplayingItem.nextElementSibling || this.carouselItems[0];
    this.currentDisplayingItem = nextItem;
  }

  previousCarouselItem() {
    const previousItem = this.currentDisplayingItem.previousElementSibling || this.carouselItems[this.carouselItems.length-1];
    this.currentDisplayingItem = previousItem;
  }

  isValidChild(child) {
    return child.tagName.toLowerCase() === XexeuCarouselItem.ELEMENT_NAME;
  }

  set currentDisplayingItem(item) {
    this.carouselItems.forEach(item => item.removeAttribute('displaying'));
    item.setAttribute('displaying', '');
  }

  get currentDisplayingItem() {
    return this.carouselItems.find(item => item.hasAttribute('displaying'));
  }
}

export default XexeuCarousel;