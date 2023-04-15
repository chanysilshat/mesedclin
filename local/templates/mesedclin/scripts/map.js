
if($('#map').length > 0 || $('#map2').length > 0){
    ymaps.ready(init);
}
var myMap;
var myMap2;
function init(){
    if (document.getElementById('map')) {
        var myMap = new ymaps.Map("map", {
                center: [55.754815, 37.598640],
                zoom: 18,
                controls: [],
                suppressMapOpenBlock: true
            },
            {suppressMapOpenBlock: true});

        // $(window).resize(function(){
        //         myMap.container.fitToViewport();
        // });

        myPlacemarkWithContent = new ymaps.Placemark([55.754815, 37.598640], {
            hintContent: 'Mesed Clinic'
        }, {
            // Тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.svg',
            // Размеры метки.
            iconImageSize: [68, 74],
            iconImageOffset: [-50, -84]
        });


        myMap.controls.add('zoomControl');
        myMap.controls.add('rulerControl', {
            // Отключим отображение масштабного отрезка рядом с линейкой.
            // Подробнее о настройке опций.
            scaleLine: false
        });

        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemarkWithContent);
        $(window).resize(function () {
            myMap.container.fitToViewport();
            if ($(window).width() < 1024) {
                myMap.behaviors.disable('drag');
            } else {
                myMap.behaviors.enable('drag');
            }
            if ($(window).width() < 500) {
                myMap.setCenter([55.754815, 37.598640], 18, "map");
            } else {
                myMap.setCenter([55.754815, 37.598640], 18, "map");
            }
        });

        $(document).ready(function () {
            if ($(window).width() < 500) {
                myMap.setCenter([55.754815, 37.598640], 18, "map");
            } else {
                myMap.setCenter([55.754815, 37.598640], 18, "map");
            }
        });
    }
    if (document.getElementById('map2')) {
        var myMap2 = new ymaps.Map("map2", {
                center: [55.754815, 37.598640],
                zoom: 18,
                controls: [],
                suppressMapOpenBlock: true
            },
            {suppressMapOpenBlock: true});

        // $(window).resize(function(){
        //         myMap.container.fitToViewport();
        // });

        myPlacemarkWithContent = new ymaps.Placemark([55.754815, 37.598640], {
            hintContent: 'Mesed Clinic'
        }, {
            // Тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.svg',
            // Размеры метки.
            iconImageSize: [68, 74],
            iconImageOffset: [-50, -84]
        });


        myMap2.controls.add('zoomControl');
        myMap2.controls.add('rulerControl', {
            // Отключим отображение масштабного отрезка рядом с линейкой.
            // Подробнее о настройке опций.
            scaleLine: false
        });

        myMap2.behaviors.disable('scrollZoom');
        myMap2.geoObjects.add(myPlacemarkWithContent);
        $(window).resize(function () {
            myMap2.container.fitToViewport();
            if ($(window).width() < 1024) {
                myMap2.behaviors.disable('drag');
            } else {
                myMap2.behaviors.enable('drag');
            }
            if ($(window).width() < 500) {
                myMap2.setCenter([55.754815, 37.598640], 18, "map2");
            } else {
                myMap2.setCenter([55.754815, 37.598640], 18, "map2");
            }
        });

        $(document).ready(function () {
            if ($(window).width() < 500) {
                myMap2.setCenter([55.754815, 37.598640], 18, "map2");
            } else {
                myMap2.setCenter([55.754815, 37.598640], 18, "map2");
            }
        });
    }
}