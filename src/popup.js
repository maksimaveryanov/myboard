
export function popupWindow(itemElement) {
  let popup = document.querySelector('.popup');
  let clone = popup.cloneNode(true);
  let title = popup.querySelector("input[name='title']");
  let description = popup.querySelector(".area");
  let color = popup.querySelector('#color');
  let titleOfitem = itemElement.querySelector(".item__head");
  let descriptionOfitem = itemElement.querySelector(".item__body");
  let addItem = popup.querySelector(".control__add");
  let removeItem = popup.querySelector(".control__remove");
  let closeItem = popup.querySelector(".control__close");

  document.body.append(clone);
  popup.style.display = "flex";
  title.value = titleOfitem.textContent;
  description.value = descriptionOfitem.textContent;

  addItem.addEventListener("click", (e) => {
    if (title.value == "") title.value = "Заголовок задачи";
    if (description.value == "") description.value = "Пояснения";
    e.preventDefault();
    titleOfitem.textContent = title.value;
    descriptionOfitem.textContent = description.value;
    itemElement.style.backgroundColor = color.value;
    popup.remove();
  });

  removeItem.addEventListener("click", (e) => {
    e.preventDefault();
    itemElement.remove();
    popup.remove();
  });

  closeItem.addEventListener("click", (e) => {
    e.preventDefault();
    popup.remove();
  });
}

export function changeItem(itemElement) {
  itemElement.addEventListener('click', () => {
    popupWindow(itemElement);
  })
}