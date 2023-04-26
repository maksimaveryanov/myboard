import {createColumns, createItem, changeTitle} from "./createElements.js";
import { changeItem, popupWindow } from "./popup.js";
import {dragItem} from "./dragAndDrop.js";

let kanbanBtn = document.querySelector('.kanban__btn');

let itemElements = document.querySelectorAll('.item');
for (let element of itemElements) {
  changeItem(element);
}

kanbanBtn.addEventListener('click', () => {
  let newColumns = createColumns();
  let kanbanColumns = document.querySelector(".kanban__columns")
  kanbanColumns.append(newColumns);
  let columnHead = newColumns.querySelector(".column__head");
  let columnBody = newColumns.querySelector('.column__body');
  dragItem();
  columnBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("column__body")) {
      let newItem = createItem();
      columnBody.append(newItem);
      newItem.draggable = true;
      dragItem();
    }
  });
  changeTitle(columnHead);
});


let columnHead = document.querySelectorAll(".column__head");
for (let elem of columnHead) {
  changeTitle(elem);
}


let columnBodyAll = document.querySelectorAll('.column__body');
for (let columnBody of columnBodyAll) {
  columnBody.addEventListener('click', (e) => {
    if (e.target.classList.contains("column__body")) {
      let newItem = createItem();
      columnBody.append(newItem);
      newItem.draggable = true;
    }
    dragItem();
  })
}

dragItem();