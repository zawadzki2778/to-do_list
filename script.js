const list = document.querySelector(".todolist");
// const items = list.querySelectorAll(".todolist-item"); //записываем все элементы, которые находятся внутри list
const items = list.children; // чтобы получить динамическую коллекцию которая будет пропадать из разметки переписываемс помощью children
const emptyList = document.querySelector(".empty-tasks");
const newItemForm = document.querySelector(".form-add"); //нашли элемент с классом для добавления формы (новой задачи)
const newItemTitle = newItemForm.querySelector('.form-add-input');
const templateTask = document.querySelector('#template-task').content;//достаём шаблон и записываем его в переменную (шаблон не виден при отрисовке)
console.log(templateTask); 
const newItemTemplate = templateTask.querySelector('.todolist-item');
console.log(newItemTemplate);

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

newItemForm.addEventListener("submit", function (evt) {
  evt.preventDefault();//отменяем отправку формы по умолчанию
  const taskText = newItemTitle.value;
  console.log(taskText);
  const task = newItemTemplate.cloneNode(true)//клонируем шаблон
  //добавляем новую задачу c отрисовкой на странице
  const taskDescription = task.querySelector('span');
  taskDescription.textContent = taskText;
  list.appendChild(task);
  console.log(task);
});
