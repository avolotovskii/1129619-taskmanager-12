import {createSiteMenuTemplate} from "./view/menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createTaskTemplate} from "./view/task.js";
import {createTaskEditTemplate} from "./view/task-edit.js";
import {createLoadMoreButtonTemplate} from "./view/more-button.js";
import {createBoardTemplate} from "./view/board.js";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());

render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate());

Array(TASK_COUNT).fill(``).forEach(() => {
  render(taskListElement, createTaskTemplate());
});

render(boardElement, createLoadMoreButtonTemplate());
