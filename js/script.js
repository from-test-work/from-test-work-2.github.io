jQuery.fn.exists = function () {
    return $(this).length;
};

/* Mobile Menu
 ========================================================*/
;
$(document).ready(function () {
    var mmenu = $('#mmenu');
    var sf_menu = $('.sf-menu');
    mmenu.on('click', function (e) {
        e.preventDefault();
        sf_menu.toggleClass("visible").toggleClass("opened");
        $('.mmenu-overlay_full').toggleClass("invisible");
        $('body').toggleClass("mmenu-overlay_full-nonscroll");
    });
});


/* Responsive Tabs
 ========================================================*/
;
$(document).ready(function () {
    if ($(".resp-tabs").exists()) {
        $('.resp-tabs').easyResponsiveTabs({
            activate: function () {
                //console.log(3);
                setTimeout(function () {
                    //console.log(2);
                    $('.select_style').trigger('refresh');
                }, 1)
            }
        });
    }
});
/* UI Tabs
 ========================================================*/
;
$(document).ready(function () {
    if ($("#lk-tabs").exists()) {
        $("#lk-tabs").tabs({
            activate: function (event, ui) {
                //console.log(1);
                setTimeout(function () {
                    //console.log(2);
                    $('.select_style').trigger('refresh');
                }, 1)
            }
        })
    }

    if ($("#rooms-tabs").exists()) {
        $("#rooms-tabs").tabs({
            activate: function (event, ui) {
                //console.log(1);
                setTimeout(function () {
                    //console.log(2);
                    $('.select_style').trigger('refresh');
                }, 1)
            }
        })
    }
});


/* Fancy Box
 ========================================================*/
;
function showStylePopup(title, text) {
    $("#style_alert .titlePopup").html(title);
    $("#style_alert .textPopup").html(text);
    openPopupStyle('style_alert', 'fancyboxSkin1');
}
function openPopupStyle(id, name) {
    $.fancybox({
        wrapCSS: name,
        href: '#' + id,
        titleShow: false,
        autoScale: true,
        helpers: {
            overlay: {
                closeClick: true,
                locked: true
            }
        }
    });
}

$(document).ready(function () {
    $(".various").fancybox({
        maxWidth: 580,
        maxHeight: 336,
        fitToView: false,
        width: '100%',
        height: '100%',
        autoSize: true,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none',
        padding: 0,
        onStart: true,
        onClosed: false
    });
});


/* Right Nav_menu
 ========================================================*/
;
$(document).ready(function () {
    $(".plus").on("click", function () {
        $(this).toggleClass("opened");
        $(this).parent("li").children(".sublevel").toggleClass("opened");
    });
});

/* Filter choice-element
 ========================================================*/
$(document).ready(function () {
    var rooms_count = $('#rooms-count.choice-element span');
    rooms_count.on('click', function (e) {
        e.preventDefault();
        rooms_count.removeClass('active');
        $(this).addClass('active');
    });

    var floor_count = $('#floor-count.choice-element span');
    floor_count.on('click', function (e) {
        e.preventDefault();
        floor_count.removeClass('active');
        $(this).addClass('active');
    });

    var otdelka = $('#otdelka.choice-element span');
    otdelka.on('click', function (e) {
        e.preventDefault();
        otdelka.removeClass('active');
        $(this).addClass('active');
    });

    var ipoteka = $('#ipoteka.choice-element span');
    ipoteka.on('click', function (e) {
        e.preventDefault();
        ipoteka.removeClass('active');
        $(this).addClass('active');
    });

    var material = $('#material.choice-element span');
    material.on('click', function (e) {
        e.preventDefault();
        material.removeClass('active');
        $(this).addClass('active');
    });


    var material = $('#sorted-parametr.sort-by li');
    material.on('click', function (e) {
        e.preventDefault();
        material.removeClass('active');
        $(this).addClass('active');
    });

    var type_layout = $('.type-layout li');
    type_layout.on('click', function (e) {
        e.preventDefault();
        type_layout.removeClass('active');
        $(this).addClass('active');
    });

    var number_house = $('.number-house li');
    number_house.on('click', function (e) {
        e.preventDefault();
        number_house.removeClass('active');
        $(this).addClass('active');
    });

    var number_porch = $('.number-porch li');
    number_porch.on('click', function (e) {
        e.preventDefault();
        number_porch.removeClass('active');
        $(this).addClass('active');
    });

    var lk_tabs = $('.lk-tabs li');
    lk_tabs.on('click', function (e) {
        e.preventDefault();
        lk_tabs.removeClass('active');
        $(this).addClass('active');
    });


//    --------------------------------------------------------------!!!!!!!!!!!!!
});


/* LK tab1 close
 ========================================================*/
$(document).ready(function () {
    var close_tab2 = $('.specification .lk-section1 .img-wrap .img-wrap_image-state .close');
    close_tab2.on("click", function () {
        $('.img-wrap_default-state').removeClass('hidden');
        $('.img-wrap_image-state').addClass('hidden');
    });
});


/* Filter hide/open filter detail
 ========================================================*/
$(document).ready(function () {
    var hide_filter = $('.hide-filter');
    var filter_detail = $('.filter .filter__container .filter__container-invisible');
    hide_filter.on('click', function (e) {
        e.preventDefault();
        hide_filter.toggleClass('open').toggleClass('close');
        filter_detail.toggleClass('hidden').toggleClass('show');
        setTimeout(function () {
            $('.search_select').trigger('refresh');
        }, 1)
    });
});


/* Range Slider
 ========================================================*/
;
$(document).ready(function () {
    $("#filter-slider").ionRangeSlider({
        type: "single",
        step: 1,
        values: ['Сдан', 2015, 2016, 2017, 'Позже'],
        prettify_separator: "",
        grid: true,
        grid_margin: false,
        grid_num: 5,
        grid_snap: true,
        hide_min_max: true
    });
});

$(document).ready(function () {
    $("#money-slider").ionRangeSlider({
        type: "single",
        min: 1000000,
        max: 30000000,
        step: 100000,
        values: ['1 млн', '10 млн', '20 млн', '30 млн'],
        grid: true,
        grid_num: 4,
        grid_margin: false,
        grid_snap: true,
        hide_min_max: true,
        force_edges: true,

        onStart: function (data) {
            $(".request-term").text(data.from);
        },
        onChange: function (data) {
            $(".request-term").text(data.from);
        }
    });

    $("#persent-slider").ionRangeSlider({
        min: 20,
        max: 100,
        type: "single",
        step: 20,
        values: ['20%', '40%', '60%', '80%', '100%'],
        prettify_separator: "",
        grid: true,
        grid_margin: false,
        grid_num: 5,
        grid_snap: true,
        hide_min_max: true,
        force_edges: true,

        onStart: function (data) {
            $(".request-term").text(data.from);
        },
        onChange: function (data) {
            $(".request-term").text(data.from);
        }
    });

    $("#year-slider").ionRangeSlider({
        min: 20,
        max: 100,
        type: "single",
        step: 1,
        values: ['1 год', '5 лет', '10 лет', '20 лет', '30 лет'],
        //prettify_separator: "1, 5, 10, 20, 30",
        grid: true,
        grid_margin: false,
        grid_num: 5,
        grid_snap: true,
        hide_min_max: true,
        force_edges: true,

        onStart: function (data) {
            $(".request-term").text(data.from);
        },
        onChange: function (data) {
            $(".request-term").text(data.from);
        }
    });

    $("#year-persent-slider").ionRangeSlider({
        min: 5,
        max: 40,
        type: "single",
        step: 5,
        values: [5, 10, 15, 20, 25, 30, 35, 40],
        //prettify_separator: "5, 10, 15, 20, 25, 30, 35, 40",
        grid: true,
        grid_margin: false,
        //grid_num: 8,
        grid_snap: true,
        hide_min_max: true,
        force_edges: true,

        onStart: function (data) {
            $(".request-term").text(data.from);
        },
        onChange: function (data) {
            $(".request-term").text(data.from);
        }
    });
});

/* Select FormStyller
 ========================================================*/
;
$(document).ready(function () {
    $('.select_style').styler({
        selectVisibleOptions: 6
    });
    $('.search_select').styler({
        selectSearch: true,
        selectVisibleOptions: 6
    });


});

///* Equalheight
// ========================================================*/
equalheight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};

$(window).load(function () {
    equalheight('.customScroll__list-li');
    equalheight('.similar-list1 li');
    equalheight('.similar-list2 li');
});

$(window).resize(function () {
    equalheight('.customScroll__list-li');
    equalheight('.similar-list1 li');
    equalheight('.similar-list2 li');
});

///* jQuery custom content scroller
// ========================================================*/
$(document).ready(function () {
    $(window).load(function () {
        $(".customScroll").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            theme: "dark",
            horizontalScroll: true,
            advanced: {updateOnContentResize: true, updateOnBrowserResize: true},
            axis: "yx",
            setHeight: 'auto',
            setWidth: "auto",
            autoDraggerLength: false
        });
    });
});

/* popularItems
 ========================================================*/
$(document).ready(function () {
    //mouseover, moutheleave
    $(".popularItems__wraper img").hover(
        function () {
            $(this).closest('.popularItems').find('.popularItems__hover').addClass('visible')
        }, function () {
            //$(this).closest('.objects').find('.objects__hover').removeClass('visible');
        }
    );
    $(".popularItems__hover").hover(
        function () {
            //$(this).closest('.objects').find('.objects__hover').addClass('visible')
        }, function () {
            $(this).removeClass('visible');
        }
    );

    $(".popularItems__wraper img").hover(
        function () {
            $(this).closest('.popularItems').find('.popularItems__lk-overlay').addClass('visible')
        }, function () {
            //$(this).closest('.objects').find('.objects__hover').removeClass('visible');
        }
    );
    $(".popularItems__lk-overlay").hover(
        function () {
            //$(this).closest('.objects').find('.objects__hover').addClass('visible')
        }, function () {
            $(this).removeClass('visible');
        }
    );
});


/* Plitka View
 ========================================================*/
$(document).ready(function () {
    var $plitka = $('.plitka');
    var $plitka_cnt = $('.plitka_cnt');
    var $poloska = $('.poloska');
    var $poloska_cnt = $('.poloska_cnt');
    var $work_days = $('.work-days li a');

    $plitka.on('click', function () {
        $poloska_cnt.addClass('hide').removeClass('show');
        $plitka_cnt.addClass('show').removeClass('hide');
        $('.wiew_type_list li').removeClass('active');
        $(this).parent().addClass('active');
    });
    $poloska.on('click', function () {
        $poloska_cnt.removeClass('hide').addClass('show');
        $plitka_cnt.removeClass('show').addClass('hide');
        $('.wiew_type_list li').removeClass('active');
        $(this).parent().addClass('active');
    });


    $work_days.on('click', function () {
        $work_days.closest('.work-days li').removeClass('active');
        $(this).closest('li').addClass('active');
    });
});


/* Show Phone
 ========================================================*/
$(document).ready(function () {
    $(".show-phone-on").on('click', function (e) {
        e.preventDefault();
        $(this).hide();
        $(this).parent().find(".show-phone-of").removeClass('hidden');
    });
});


$(document).ready(function () {
    $(".add").on('click', function () {
        //alert('.add clicked!');
        $(this).hide();
        $(this).closest('.region-list')
            .find('.hidden')
            .removeClass('hidden');
    });
});

/* Add and Remove Class
 ========================================================*/
;
$(document).ready(function () {
    var $show_info_on = $('.show-info-on');
    var $show_info_off = $('.show-info-off');

    $show_info_on.on('click', function () {
        $show_info_off.addClass('hide').removeClass('show');
        $(this).closest('.kvartira-type').find('.show-info-off').removeClass('hide').addClass('show');

    });
    $(document).on("click", function (e) {
        if ($(e.target).closest($show_info_on).length || $(e.target).closest($show_info_off).length) return;
        $show_info_off.addClass('hide').removeClass('show');
        e.stopPropagation();
    });
});


/* Swiper Carousel
 ========================================================*/
;
$(document).ready(function () {
    if ($(".swiper-container").exists()) {
        var swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            slidesPerView: 3,
            spaceBetween: 15,
            //paginationClickable: true,
            mousewheelControl: true,
            autoplayStopOnLast: true,
            //uniqueNavElements: true,
            //autoplayStopOnLast: true,
            //autoplayDisableOnInteraction: true,
        });
    }

});

/* init jqte
 ========================================================*/
$(document).ready(function () {
    if (typeof ($.fn.jqte) != 'undefined') {
        if ($(".editable-area").exists()) {
            $(".editable-area").jqte({
                format: false,
                color: false,
                fsize: false,
                u: false,
                center: false,
                sub: false,
                sup: false,
                indent: false,
                outdent: false,
                left: false,
                right: false,
                strike: false,
                unlink: false,
                remove: false,
                rule: false,
                source: false,
                ul: true,
                ol: false,
                link: false
            });
        }
    }
});


/* Yandex Map
 ========================================================*/
if (typeof(ymaps) == "object") {
    function init() {
        function Map1() {
            var myMap = new ymaps.Map('map1', {
                center: [57.638374, 39.853246],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            });
            myMap.behaviors.disable('scrollZoom'); // запрет зума колесом
            myMap.controls.add(
                new ymaps.control.ZoomControl()
            );
            var myCollection = new ymaps.GeoObjectCollection();
            myCollection.add(new ymaps.Placemark([57.638374, 39.853246], {
                balloonContent: '<div class="mappoint-detail"><img src="images/house/house.jpg" alt=""><div class="mappoint-detail__cnt"><h3><a href="">ЖК «Life-Митин<wbr>ская»</a></h3><p>Цена: от <span>2 000 000 </span>руб.</p><p>Цена за м&sup2: от <span>154 000 </span>руб.</p><p>Готовность объекта: <span class="status status__finish">Готов</span></p></div></div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map-icon.png',
                iconImageSize: [18, 23],
                iconImageOffset: [0, 0]
            }));
            myCollection.add(new ymaps.Placemark([57.637352, 39.847442], {
                balloonContent: '<div class="mappoint-detail"><img src="images/house/house.jpg" alt=""><div class="mappoint-detail__cnt"><h3><a href="">ЖК «Life-Митин<wbr>ская»</a></h3><p>Цена: от <span>2 000 000 </span>руб.</p><p>Цена за м&sup2: от <span>154 000 </span>руб.</p><p>Готовность объекта: <span class="status status__building">Строительство</span></p></div></div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map-icon.png',
                iconImageSize: [18, 23],
                iconImageOffset: [0, 0]
            }));
            myCollection.add(new ymaps.Placemark([57.638017, 39.851449], {
                balloonContent: '<div class="mappoint-detail"><img src="images/house/house.jpg" alt=""><div class="mappoint-detail__cnt"><h3><a href="">ЖК «Life-Митин<wbr>ская»</a></h3><p>Цена: от <span>2 000 000 </span>руб.</p><p>Цена за м&sup2: от <span>154 000 </span>руб.</p><p>Готовность объекта: <span class="status status__start">Котлован</span></p></div></div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map-icon.png',
                iconImageSize: [18, 23],
                iconImageOffset: [0, 0]
            }));
            myCollection.add(new ymaps.Placemark([57.639395, 39.848269], {
                balloonContent: '<div class="mappoint-detail"><img src="images/house/house.jpg" alt=""><div class="mappoint-detail__cnt"><h3><a href="">ЖК «Life-Митин<wbr>ская»</a></h3><p>Цена: от <span>2 000 000 </span>руб.</p><p>Цена за м&sup2: от <span>154 000 </span>руб.</p><p>Готовность объекта: <span class="status status__finish">Готов</span></p></div></div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map-icon.png',
                iconImageSize: [18, 23],
                iconImageOffset: [0, 0]
            }));

            myMap.geoObjects.add(myCollection);
            //myMap.setBounds(myCollection.getBounds());
        }

        if ($("div").is("#map1")) {
            Map1();
        }
    }

    ymaps.ready(init);
}


/* Select2 select
 ========================================================*/
;
$(document).ready(function () {
    if ($(".js-example-data-array").exists()) {
        $(".js-example-data-array").select2({});
    }
});

///* Owl carousel
//========================================================*/
;
$(document).ready(function () {

    $('.thumbs').on('change.owl.carousel changed.owl.carousel', function (e) {
        if (e.property.name != 'position') return;

        var current = e.relatedTarget.current();
        var items = $(this).find('.owl-stage').children();
        var add = e.type == 'changed';

        items.eq(e.relatedTarget.normalize(current)).toggleClass('current', add)
    });


    function initcarousel() {
        console.log('init stat');
        var $sync1 = $(".big-images"),
            $sync2 = $(".thumbs"),
            flag = false,
            duration = 300;

        $sync1
            .owlCarousel({
                items: 1,
                //margin: 10,
                nav: true,
                dots: false,
                singleItem: true,
                scrollPerPage: true,
                //startPosition: 3,
                animateOut: 'fadeOut'
            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync2
            .owlCarousel({
                margin: 0,
                //items: 5,
                nav: true,
                center: true,
                URLhashListener: true,
                dots: false,
                //startPosition: 3,
                //autoplay: true,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 0
                    },
                    300: {
                        items: 0
                    },
                    400: {
                        items: 4
                    },
                    500: {
                        items: 5
                    },
                    700: {
                        items: 5
                    },
                    990: {
                        items: 5
                    },
                    1000: {
                        items: 5
                    }
                }
            })
            .on('click', '.owl-item', function () {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;
                    $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });
    }

    $(document).ready(function () {
        if ($(".big-images").exists()) {
            initcarousel();
        }
    });



});

$(document).ready(function () {
    $('.owl-carousel2').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        //autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        },
        navText: ['Предыдущие','Следующие']
    })
});


/* Tabs News
 ========================================================*/
$(document).ready(function () {
    if ($("#tabs-modal.tabs-modal").exists()) {
        $("#tabs-modal.tabs-modal").tabs({
            collapsible: false
        });
    }
});


$(document).ready(function () {
    $(".fancybox-thumb").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        helpers: {
            title: {
                type: 'outside'
            },
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });
});


/* Datepicker
 ========================================================*/
$(".datepicker").datepicker({
    showOn: "button",
    buttonImage: "images/datepicker.png",
    buttonImageOnly: true,
    buttonText: "Select date"
});

$(function () {
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '',
        nextText: '',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
});



