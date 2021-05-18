// 'use strict';

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.043514, 82.710420],
        zoom: 9
    });

    var coords = [
        [55.023496, 82.974670],
        [55.105011, 82.951359],
        [55.026711, 82.443433]
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
            balloonContentBody: "Роснефть",
            hintContent: "Роснефть"
        }));
    }

    myMap.controls.remove('searchControl');
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');

    myMap.geoObjects.add(myCollection);

}
