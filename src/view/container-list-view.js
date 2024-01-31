
import {createElement} from '../render.js';

function createContainerList() {
  return `
  <ul class="trip-events__list"></ul>`;
}

export default class ContainerListView {
  getTemplate() {
    return createContainerList();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
