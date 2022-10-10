const list = document.querySelector(".todolist");
// const items = list.querySelectorAll(".todolist-item"); //записываем все элементы, которые находятся внутри list
const items = list.children; // чтобы получить динамическую коллекцию которая будет пропадать из разметки переписываемс помощью children
const emptyList = document.querySelector(".empty-tasks");

const switchEmptyList = function () {
  console.log(items);
  // добавляем проверку что длина коллекции равна нулю
  if (items.length === 0) {
    emptyList.classList.remove("hidden"); // удаляем класс hidden чтобы скрыть элемент
    console.log("Все задачи выполнены!");
  }
};

const addCheckHandler = function (item) {
  const checkbox = item.querySelector(".todolist-input");
  checkbox.addEventListener("change", function () {
    //вешаем обработчик change который отслеживает изменения checkbox
    item.remove(); // удаляем выполненную задачу (checkbox) при клике
    switchEmptyList();
  });
};

for (let i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}
