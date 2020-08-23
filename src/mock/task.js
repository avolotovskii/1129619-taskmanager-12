import {COLORS} from "../const.js";
import {getRandomInteger} from "../utils/common.js";
import {getCurrentDate} from "../utils/task.js";

const generateDescription = () => {
  const descriptions = [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateRepeating = () => {
  return {
    mo: Boolean(getRandomInteger(0, 1)),
    tu: Boolean(getRandomInteger(0, 1)),
    we: Boolean(getRandomInteger(0, 1)),
    th: Boolean(getRandomInteger(0, 1)),
    fr: Boolean(getRandomInteger(0, 1)),
    sa: Boolean(getRandomInteger(0, 1)),
    su: Boolean(getRandomInteger(0, 1)),
  };
};

const getRandomColor = () => {
  const randomIndex = getRandomInteger(0, COLORS.length - 1);

  return COLORS[randomIndex];
};

export const generateTask = () => {
  const dueDate = getCurrentDate();
  const repeating = dueDate === null
    ? generateRepeating()
    : {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false
    };

  return {
    description: generateDescription(),
    dueDate,
    repeating,
    color: getRandomColor(),
    isArchive: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};
