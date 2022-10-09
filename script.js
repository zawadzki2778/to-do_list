const list = document.querySelector(".todolist");
const items = document.querySelectorAll(".todolist-item"); //записываем все элементы, которые находятся внутри list

const addCheckHandler = function (item) {
  const checkbox = item.querySelector(".todolist-input");
  checkbox.addEventListener("change", function () {
    //вешаем обработчик change который отслеживает изменения checkbox
    console.log("проверка");
  });
};

for (let i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}