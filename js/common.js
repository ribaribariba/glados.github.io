$(function() {

    $(window).on("load",function(){

        $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
            highlightSelector:".pure-menu-list a"
        });

    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $(".menu-position-fixed").addClass("menu-bg-y");
            $(".pure-menu-contacts").removeClass("d-none");
            $(".pure-menu-button").removeClass("d-none");
        } else {
            $(".menu-position-fixed").removeClass("menu-bg-y");
            $(".pure-menu-contacts").addClass("d-none");
            $(".pure-menu-button").addClass("d-none");
        }
    });

    $('#responsive-tabs').responsiveTabs({
	    startCollapsed: 'accordion'
	});

    $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
                loop:false
            }
        }
    })

});

// menu

(function (window, document) {
    var menu = document.getElementById('menu'),
        WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

    function toggleHorizontal() {
        [].forEach.call(
            document.getElementById('menu').querySelectorAll('.custom-can-transform'),
            function(el){
                el.classList.toggle('pure-menu-horizontal');
            }
        );
    };

    function toggleMenu() {
        // set timeout so that the panel has a chance to roll up
        // before the menu switches states
        if (menu.classList.contains('open')) {
            setTimeout(toggleHorizontal, 500);
        }
        else {
            toggleHorizontal();
        }
        menu.classList.toggle('open');
        document.getElementById('toggle').classList.toggle('x');
    };

    function closeMenu() {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }

    document.getElementById('toggle').addEventListener('click', function (e) {
        toggleMenu();
        e.preventDefault();
    });

    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
    })(this, this.document);


    // SVG map
    window.onload=function() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[135].setAttribute("class", "active-area");   // Красноярский край *
        svgb1[136].setAttribute("class", "active-area");   // Томская область *
        svgb1[18].setAttribute("class", "active-area");    // Республика Тыва *
        svgb1[14].setAttribute("class", "active-area");    // Омская область *
        svgb1[15].setAttribute("class", "active-area");    // Новосибирская область *
        svgb1[137].setAttribute("class", "active-area");   // Кемеровская область *
        svgb1[138].setAttribute("class", "active-area");   // Республика Хакасия *
        svgb1[16].setAttribute("class", "active-area");    // Алтайский край *
        svgb1[17].setAttribute("class", "active-area");    // Республика Алтай *
        svgb1[114].setAttribute("class", "active-area");   // Иркутская область *
        svgb1[148].setAttribute("class", "active-area");   // Республика Саха (Якутия) *
      };

    // Республика Алтай
    document.getElementById("altai-republic").onmouseover = function() {altaiRepublicMouseOver()};
    document.getElementById("altai-republic").onmouseout = function() {altaiRepublicMouseOut()};

    function altaiRepublicMouseOver() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[17].setAttribute("class", "active-area-hover");
    }

    function altaiRepublicMouseOut() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[17].setAttribute("class", "active-area");
    }

    // Алтайский край
    document.getElementById("altai-region").onmouseover = function() {altaiRegionMouseOver()};
    document.getElementById("altai-region").onmouseout = function() {altaiRegionMouseOut()};

    function altaiRegionMouseOver() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[16].setAttribute("class", "active-area-hover");
    }

    function altaiRegionMouseOut() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[16].setAttribute("class", "active-area");
    }

    // Иркутская область
    document.getElementById("irkutsk-region").onmouseover = function() {irkutskRegionMouseOver()};
    document.getElementById("irkutsk-region").onmouseout = function() {irkutskRegionMouseOut()};

    function irkutskRegionMouseOver() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[114].setAttribute("class", "active-area-hover");
    }

    function irkutskRegionMouseOut() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[114].setAttribute("class", "active-area");
    }

    // Кемеровская область
    document.getElementById("kemerovo-region").onmouseover = function() {kemerovoRegionMouseOver()};
    document.getElementById("kemerovo-region").onmouseout = function() {kemerovoRegionMouseOut()};

    function kemerovoRegionMouseOver() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[137].setAttribute("class", "active-area-hover");
    }

    function kemerovoRegionMouseOut() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[137].setAttribute("class", "active-area");
    }

    // Красноярский край
    document.getElementById("krasnoyarsk-region").onmouseover = function() {krasnoyarskRegionMouseOver()};
    document.getElementById("krasnoyarsk-region").onmouseout = function() {krasnoyarskRegionMouseOut()};

    function krasnoyarskRegionMouseOver() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[135].setAttribute("class", "active-area-hover");
    }

    function krasnoyarskRegionMouseOut() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[135].setAttribute("class", "active-area");
    }

    // Новосибирск край
    document.getElementById("novosibirsk-region").onmouseover = function() {novosibirskRegionMouseOver()};
    document.getElementById("novosibirsk-region").onmouseout = function() {novosibirskRegionMouseOut()};

    function novosibirskRegionMouseOver() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[15].setAttribute("class", "active-area-hover");
    }

    function novosibirskRegionMouseOut() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[15].setAttribute("class", "active-area");
    }

    // Омская область
    document.getElementById("omsk-region").onmouseover = function() {omskRegionMouseOver()};
    document.getElementById("omsk-region").onmouseout = function() {omskRegionMouseOut()};

    function omskRegionMouseOver() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[14].setAttribute("class", "active-area-hover");
    }

    function omskRegionMouseOut() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[14].setAttribute("class", "active-area");
    }

    // Томская область
    document.getElementById("tomsk-region").onmouseover = function() {tomskRegionMouseOver()};
    document.getElementById("tomsk-region").onmouseout = function() {tomskRegionMouseOut()};

    function tomskRegionMouseOver() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[136].setAttribute("class", "active-area-hover");
    }

    function tomskRegionMouseOut() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[136].setAttribute("class", "active-area");
    }

    // Республика Тыва
    document.getElementById("tyva-republic").onmouseover = function() {tyvaRepublicMouseOver()};
    document.getElementById("tyva-republic").onmouseout = function() {tyvaRepublicMouseOut()};

    function tyvaRepublicMouseOver() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[18].setAttribute("class", "active-area-hover");
    }

    function tyvaRepublicMouseOut() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[18].setAttribute("class", "active-area");
    }

    // Республика Хакассия
    document.getElementById("khakassia-republic").onmouseover = function() {khakassiaRepublicMouseOver()};
    document.getElementById("khakassia-republic").onmouseout = function() {khakassiaRepublicMouseOut()};

    function khakassiaRepublicMouseOver() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[138].setAttribute("class", "active-area-hover");
    }

    function khakassiaRepublicMouseOut() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[138].setAttribute("class", "active-area");
    }

    // Республика Саха (Якутия)
    document.getElementById("yakutiya").onmouseover = function() {yakutiyaMouseOver()};
    document.getElementById("yakutiya").onmouseout = function() {yakutiyaMouseOut()};

    function yakutiyaMouseOver() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[148].setAttribute("class", "active-area-hover");
    }

    function yakutiyaMouseOut() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[148].setAttribute("class", "active-area");
    }

