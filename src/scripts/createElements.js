import { changeItem, popupWindow } from "./popup.js";

export function createColumns() {

  let columnCreated = document.createElement('div');
  let columnHead = document.createElement('div');
  let columnBody = document.createElement('div');

  columnBody.classList.add('column__body');
  columnHead.classList.add('column__head');
  columnCreated.classList.add('column');

  columnCreated.prepend(columnHead);
  columnCreated.append(columnBody);

  columnHead.textContent = "Заголовок";

  return columnCreated;
}

export function createItem() {

  let item = document.createElement('div');
  let itemHead = document.createElement('div');
  let itemBody = document.createElement('div');

  item.classList.add('item');
  itemHead.classList.add('item__head');
  itemBody.classList.add('item__body');

  item.append(itemHead);
  item.append(itemBody);

  itemHead.textContent = "Заголовок задачи";
  itemBody.textContent = "Пояснения"
  item.style.backgroundColor = '#30d5c8';

  changeItem(item);
  popupWindow(item);

  item.draggable = true;

  return item;
}

export function changeTitle(elem) {
  elem.addEventListener("click", () => {
    let input = document.createElement("input");

    input.classList.add("input__title");
    input.value = elem.textContent;

    elem.style.display = "none";
    elem.parentNode.insertBefore(input, elem);

    input.focus();
    input.addEventListener("blur", () => {
      if (input.value == "") 
      input.value = "Заголовок задачи"; 
      elem.textContent = input.value;
      elem.style.display = "flex";
      input.remove();
    });
  });
}
