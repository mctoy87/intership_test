'use strict';

//при загрузке страницы
window.onload = () =>{

  //получаем элемент, куда потом будет выводиться время
  let h3 = document.getElementById('timer');
  
  // переменная для секунд, минут и часов
  // загружает значения из сессии, а при отсутствии - установка значения 0
  let sec = sessionStorage.getItem('sec') || 0;
  let min = sessionStorage.getItem('min') || 0;
  let hours = sessionStorage.getItem('hrs') || 0;
  
  //задаем для интервала времени, который будет передаваться
  let count;
  
  //переводит время в минуты и часы и сохраняет значения в сессии
  function countTime() {
    sec++;
    if (sec >=60) {
      sec = 0;
      min++;
      if (min>=60) {
        min=0;
        hours++;
      }
    }
    // сохранение значений времени в сессииs
    sessionStorage.setItem('sec', sec);
    sessionStorage.setItem('min', min);
    sessionStorage.setItem('hours', hours);
  }
  
  function addTime () {
    countTime();
  
    //присваиваем таймеру значения при переходе с 9 на 10
    h3.textContent = (hours > 9 ? hours : "0" + hours)
      //конкатенируем минуты и секунды
      + ":" + (min > 9 ? min : "0" + min)
      + ":" + (sec > 9 ? sec : "0" + sec);
  
    startTimer();
  };
  
  //сам таймер
  function startTimer() {
    //вызывает функцию addTime каждую секунду
    count = setTimeout(addTime, 1000);
  }
  
  startTimer();
};

//обнуляет таймер
function resetTimer() {
  // обнуление значений времени в сессии
  sessionStorage.setItem('sec', 0);
  sessionStorage.setItem('min', 0);
  sessionStorage.setItem('hours', 0);

  // обнуление значений времени на странице
  h1.textContent = "00:00:00";

  // остановка таймера
  clearTimeout(count);
}