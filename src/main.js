import FilterView from './view/filters-view.js';
import {render} from './render.js';

const filterContainer = document.querySelector('.trip-controls__filters');

render(new FilterView(), filterContainer);
