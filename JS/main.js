let burger = document.querySelector("#burger"); // бургер
let nav = document.querySelector(".nav"); // меню
burger.addEventListener("click", () => { // при клике на бургер
  if (!burger.classList.contains("change")) { // если бургер не имет класс cgange
    burger.classList.add("change"); // добавляем класс change
    nav.classList.add("active"); // добавляем класс active
    document.body.style.overflow = "hidden"; // запрещаем прокрутку страницы
  } else { // если бургер имеет класс change
    burger.classList.remove("change"); // удаляем класс change
    nav.classList.remove("active"); // удаляем класс active
    document.body.style.overflow = "visible"; // разрешаем прокрутку страницы 
  }
});

let title_about_us = document.querySelector(".title_about_us"); // заголовок о нас
let btn_about_us = document.querySelectorAll(".btn_about_us"); // кнопка о нас


btn_about_us.forEach((elem)=>{
elem.addEventListener("click", () => { // при клике на кнопку о нас
  burger.classList.remove("change"); // удаляем класс change
  nav.classList.remove("active"); // удаляем класс active
  document.body.style.overflow = "visible"; // разрешаем прокрутку страницы
  title_about_us.scrollIntoView({ // прокручиваем до заголовка о нас
    behavior: "smooth", // анимация прокрутки
    block: "start",// прокручиваем до начала блока
  });
});
})

let btn_app = document.querySelectorAll(".btn_app"); // кнопка приложения
let title_app = document.querySelector(".title_app"); // заголовок приложения

btn_app.forEach((elem)=>{
  elem.addEventListener("click", () => { // при клике на кнопку приложения
    burger.classList.remove("change"); // удаляем класс change
    nav.classList.remove("active"); // удаляем класс active
    document.body.style.overflow = "visible"; // разрешаем прокрутку страницы
    title_app.scrollIntoView({ // прокручиваем до заголовка приложения
      behavior: "smooth",// анимация прокрутки
      block: "start",// прокручиваем до начала блока
    });
  });
  
})
