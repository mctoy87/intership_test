
/* инициализируем функцию загрузки местоположения по требованию */
function init() {
  let myMap = new ymaps.Map('map-test', {
    center: [59.924159318995876,30.24113793946679],
    zoom: 14,
  });
  myGeoObject = new ymaps.GeoObject ({
    geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [59.924159318995876,30.24113793946679] // координаты точки
    },
    // Свойства.
    properties: {
      // Контент метки.
      iconContent: 'Я здесь',
    },
  }, {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#blackStretchyIcon',
      // Метку можно перемещать.
      draggable: true
  });
  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject); 
}

ymaps.ready(init);

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}