const list = document.querySelector(".todolist");
// const items = list.querySelectorAll(".todolist-item"); //записываем все элементы, которые находятся внутри list
const items = list.children; // чтобы получить динамическую коллекцию которая будет пропадать из разметки переписываемс помощью children
const emptyList = document.querySelector(".empty-tasks");
const newItemForm = document.querySelector(".form-add"); //нашли элемент с классом для добавления формы (новой задачи)
const newItemTitle = newItemForm.querySelector('.form-add-input');
const templateTask = document.querySelector('#template-task').content;//достаём шаблон и записываем его в переменную (шаблон не виден при отрисовке)
const newItemTemplate = templateTask.querySelector('.todolist-item');

const switchEmptyList = function () {
  // добавляем проверку что длина коллекции равна нулю
  if (items.length === 0) {
    emptyList.classList.remove("hidden"); // удаляем класс hidden чтобы показать элемент
  } else {
    emptyList.classList.add('hidden'); // добавляем ... что бы скрыть 
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
  const task = newItemTemplate.cloneNode(true)//клонируем шаблон
  //добавляем новую задачу c отрисовкой на странице
  const taskDescription = task.querySelector('span');
  taskDescription.textContent = taskText; //устанавливаем тексовое содержимое новой задачи
  addCheckHandler(task);// удаление новой задачи - передаём task в функцию addCheckHandler до того, как будем добавлять этот элемент на страницу. 
  list.appendChild(task);//добавляем нов.задачу в конец списка list 
  switchEmptyList();
  newItemTitle.value = ''; // сбрасываем текст в поле ввода

});
