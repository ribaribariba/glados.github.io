// 'use strict';

ymaps.ready(init);
function init(){

    var width = document.documentElement.clientWidth;
    var myMap;

    if (width >= 1000) {
        myMap = new ymaps.Map("map", {
            center: [55.043514, 82.710420],
            zoom: 11
        });
    } else {
        myMap = new ymaps.Map("map", {
            center: [55.043514, 82.710420],
            zoom: 9
    });}



    var coords = [
        [55.023496, 82.974670],
        [55.105011, 82.951359],
        [55.026711, 82.443433]

    ];

    var gasStation = [
        ["Нефтесиб: Никитина 107а к2"],
        ["АЗС Родники: Тюленина 2а к1"],
        ["Магистраль: с. Прокудское, ул. Советская 261А"]
    ];

    var myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/cards/marker.png',
        iconImageSize: [49, 71],
        iconImageOffset: [-3, -42]
    });


    for (var i = 0; i < coords.length; i++) {
        // myCollection.add(new ymaps.Placemark(coords[i]));
        let myPlacemark = coords[i];
        console.log(myPlacemark);
        myCollection.add(new ymaps.Placemark(coords[i], {
            balloonContentHeader: "АЗС-партнеры Glados-cards",
            balloonContentBody: gasStation[i],
            hintContent: gasStation[i]
        }));
    }

    myMap.controls.remove('searchControl');
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');

    myMap.geoObjects.add(myCollection);

}
