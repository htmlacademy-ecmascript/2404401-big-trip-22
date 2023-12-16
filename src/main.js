import TripPresenter from './presenter/trip-presenter.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');
const mainContainer = document.querySelector('.trip-main');

const tripPresenter = new TripPresenter({
  mainContainer: mainContainer,
  filterContainer: filtersContainer,
  tripContainer: eventsContainer
});


tripPresenter.init();
