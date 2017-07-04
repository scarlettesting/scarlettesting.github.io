webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _wow = __webpack_require__(5);
	
	__webpack_require__(6);
	
	__webpack_require__(75);
	
	__webpack_require__(76);
	
	__webpack_require__(77);
	
	__webpack_require__(79);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
	    (0, _svg4everybody2.default)();
	});
	(0, _jquery2.default)('#fixmenu').hide();
	(0, _jquery2.default)(window).scroll(function () {
	    if ((0, _jquery2.default)(this).scrollTop() > 100) {
	        (0, _jquery2.default)('#fixmenu').show(200);
	    } else {
	        (0, _jquery2.default)('#fixmenu').hide(200);
	    }
	});
	
	// включить/выключить анимацию
	new _wow.WOW().init();
	
	// плавный скрол на стрелку вниз на главном экране
	(0, _jquery2.default)(document).ready(function () {
	    (0, _jquery2.default)("a.scrollto").click(function (event) {
	        event.preventDefault();
	        var elementClick = (0, _jquery2.default)(this).attr("href");
	        var destination = (0, _jquery2.default)(elementClick).offset().top;
	        jQuery("html:not(:animated),body:not(:animated)").animate({
	            scrollTop: destination
	        }, 800);
	        return false;
	    });
	});
	
	// включили ползунок до-после на диване
	(0, _jquery2.default)("#cont1").twentytwenty({
	    default_offset_pct: 0.5
	});
	
	(0, _jquery2.default)("#cont2").twentytwenty({
	    default_offset_pct: 0.58
	});
	
	// ползунок до-после при ресайзе ломает высоту блока, фиксим
	(0, _jquery2.default)(window).resize(function () {
	    var hg = (0, _jquery2.default)('#old-js').height();
	    (0, _jquery2.default)('#cont1').height(hg);
	});
	
	// а ещё плагин ползунка не хочет работать с анимацией и тупо не отрисовывается, фиксим
	(0, _jquery2.default)(document).ready(function () {
	    setTimeout(function () {
	        var ft = (0, _jquery2.default)('#old-js').height();
	        (0, _jquery2.default)('#cont1').height(ft);
	    }, 500);
	});
	
	// слайдер галереи
	// Оригинал
	// $(document).ready(function() {
	//     $('.events >span').hide();
	//     $('.events >span').click(function() {
	//         $('.events >span').hide();
	//         $('img.mage_big').slideUp(500);
	//     });
	//     $('.sliderItem img, a.prev, a.next').click(function() {
	//         $('img.mage_big').slideDown(500);
	//         $('.events >span').show(200);
	//         var destination2 = $('.js-scrooll-gal').offset().top;
	//         jQuery("html:not(:animated),body:not(:animated)").animate({
	//             scrollTop: destination2
	//         }, 500);
	//     });
	//     var index = 1;
	//     $('.mixSlider >div >div >img').click(function() {
	//         const attrImg = $(this).attr('src');
	//         $('.mixSlider >div >div.controls >.bigImage >img').attr('src', attrImg);
	//         index = $(this).attr('data-index');
	//     });
	//     $('.mixSlider >div >div.controls >.events >.prev').click(function(event) {
	//         event.preventDefault();
	//         if (index == 1) {
	//             index = 6;
	//             const attrImg = $('#slideImg' + index).attr('src');
	//             $('.mixSlider >div >div.controls >.bigImage >img').attr('src', attrImg);
	//         } else {
	//             index--;
	//             const attrImg = $('#slideImg' + index).attr('src');
	//             $('.mixSlider >div >div.controls >.bigImage >img').attr('src', attrImg);
	//         }
	//     });
	//     $('.mixSlider >div >div.controls >.events >.next').click(function(event) {
	//         event.preventDefault();
	//         if (index == 6) {
	//             index = 1;
	//             const attrImg = $('#slideImg' + index).attr('src');
	//             $('.mixSlider >div >div.controls >.bigImage >img').attr('src', attrImg);
	//         } else {
	//             index++;
	//             const attrImg = $('#slideImg' + index).attr('src');
	//             $('.mixSlider >div >div.controls >.bigImage >img').attr('src', attrImg);
	//         }
	//     });
	// });
	
	
	(0, _jquery2.default)(document).ready(function () {
	    (0, _jquery2.default)('.events >span').hide();
	    (0, _jquery2.default)('.events >span').click(function () {
	        (0, _jquery2.default)('.events >span').hide();
	        (0, _jquery2.default)('img.mage_big').slideUp(500);
	        // $('.mixSlider .controls').removeClass('is-active');
	        // $('.events >span').removeClass('is-active');
	    });
	    (0, _jquery2.default)('.sliderItem img, a.prev, a.next').click(function () {
	        // $('.mixSlider .controls').addClass('is-active');
	        // $('.events >span').addClass('is-active');
	        (0, _jquery2.default)('img.mage_big').slideDown(500);
	        (0, _jquery2.default)('.events >span').show(200);
	        var destination2 = (0, _jquery2.default)('.js-scrooll-gal').offset().top - 300;
	        jQuery("html:not(:animated),body:not(:animated)").animate({
	            scrollTop: destination2
	        }, 500);
	    });
	    var index = 1;
	    var slCount = (0, _jquery2.default)('.mixSlider >div .sliderItem').length;
	    (0, _jquery2.default)('.mixSlider >div .sliderItem').click(function () {
	        var attrImg = (0, _jquery2.default)(this).children('img:first').attr('src');
	        var attrImg2 = (0, _jquery2.default)(this).children('img:last').attr('src');
	        (0, _jquery2.default)('.mixSlider >div >div.controls >.bigImage >img:first').attr('src', attrImg);
	        (0, _jquery2.default)('.mixSlider >div >div.controls >.bigImage >img:last').attr('src', attrImg2);
	        index = (0, _jquery2.default)(this).children('img:first').attr('data-index');
	    });
	    (0, _jquery2.default)('.mixSlider >div >div.controls >.events >.prev').click(function (event) {
	        event.preventDefault();
	        if (index == 1) {
	            index = slCount;
	            var attrImg = (0, _jquery2.default)('#slideImg' + index).attr('src');
	            var attrImg2 = (0, _jquery2.default)('#slideImg' + index).next().attr('src');
	            (0, _jquery2.default)('.mixSlider >div >div.controls >.bigImage >img:first').attr('src', attrImg);
	            (0, _jquery2.default)('.mixSlider >div >div.controls >.bigImage >img:last').attr('src', attrImg2);
	        } else {
	            index--;
	            var _attrImg = (0, _jquery2.default)('#slideImg' + index).attr('src');
	            var _attrImg2 = (0, _jquery2.default)('#slideImg' + index).next().attr('src');
	            (0, _jquery2.default)('.mixSlider >div >div.controls >.bigImage >img:first').attr('src', _attrImg);
	            (0, _jquery2.default)('.mixSlider >div >div.controls >.bigImage >img:last').attr('src', _attrImg2);
	        }
	    });
	    (0, _jquery2.default)('.mixSlider >div >div.controls >.events >.next').click(function (event) {
	        event.preventDefault();
	        if (index == slCount) {
	            index = 1;
	            var attrImg = (0, _jquery2.default)('#slideImg' + index).attr('src');
	            var attrImg2 = (0, _jquery2.default)('#slideImg' + index).next().attr('src');
	            (0, _jquery2.default)('.mixSlider >div >div.controls >.bigImage >img:first').attr('src', attrImg);
	            (0, _jquery2.default)('.mixSlider >div >div.controls >.bigImage >img:last').attr('src', attrImg2);
	        } else {
	            index++;
	            var _attrImg3 = (0, _jquery2.default)('#slideImg' + index).attr('src');
	            var _attrImg4 = (0, _jquery2.default)('#slideImg' + index).next().attr('src');
	            (0, _jquery2.default)('.mixSlider >div >div.controls >.bigImage >img:first').attr('src', _attrImg3);
	            (0, _jquery2.default)('.mixSlider >div >div.controls >.bigImage >img:last').attr('src', _attrImg4);
	        }
	    });
	});
	
	// это блок наших услуг
	var idThis;
	var idShow;
	(0, _jquery2.default)('.whatWeCan .wrapper-whatWeCan .for-text ul li').mouseenter(function () {
	    if ((0, _jquery2.default)(window).width() > '760') {
	        idThis = (0, _jquery2.default)(this).attr('id');
	        idShow = '#info-' + idThis;
	        (0, _jquery2.default)('.for-info').removeClass('active');
	        (0, _jquery2.default)('#info-' + [idThis]).addClass('active');
	        console.log(idShow);
	    }
	});
	(0, _jquery2.default)('.whatWeCan .wrapper-whatWeCan .for-text ul li').click(function () {
	    idThis = (0, _jquery2.default)(this).attr('id');
	    idShow = '#info-' + idThis;
	    (0, _jquery2.default)('.for-info').removeClass('active');
	    (0, _jquery2.default)('#info-' + [idThis]).addClass('active');
	    console.log(idShow);
	});
	(0, _jquery2.default)('.for-info span').click(function (event) {
	    (0, _jquery2.default)('.for-info').removeClass('active');
	});
	
	// это открывание-закрывание мобильного меню
	(0, _jquery2.default)('.burger-button').click(function () {
	    (0, _jquery2.default)('.mobil-menu').show(200);
	});
	(0, _jquery2.default)('.mobil-menu span').click(function () {
	    (0, _jquery2.default)('.mobil-menu').hide(200);
	});
	
	//изменение материалов по селектору
	(0, _jquery2.default)('.mat').hide();
	(0, _jquery2.default)('#mat1').show();
	(0, _jquery2.default)(document).ready(function selectedCam(n) {
	    console.log('вошли');
	    var labelX = n.value;
	    if (labelX == 1) {
	        (0, _jquery2.default)('.mat').hide(200);
	        (0, _jquery2.default)('#mat1').show(200);
	    } else if (labelX == 2) {
	        (0, _jquery2.default)('.mat').hide(200);
	        (0, _jquery2.default)('#mat2').show(200);
	    } else if (labelX == 3) {
	        (0, _jquery2.default)('.mat').hide(200);
	        (0, _jquery2.default)('#mat3').show(200);
	    } else {
	        (0, _jquery2.default)('.mat').hide(200);
	        (0, _jquery2.default)('#mat1').show(200);
	    }
	});
	// Аккордеон
	(0, _jquery2.default)(".labelBtn").click(function () {
	    (0, _jquery2.default)(this).toggleClass('active');
	});
	
	// Наверх батон
	(0, _jquery2.default)(window).scroll(function () {
	    if ((0, _jquery2.default)(this).scrollTop() > 100) {
	        (0, _jquery2.default)('.toTopBtn').fadeIn();
	    } else {
	        (0, _jquery2.default)('.toTopBtn').fadeOut();
	    }
	});
	
	(0, _jquery2.default)('.toTopBtn').click(function () {
	    (0, _jquery2.default)("html, body").animate({
	        scrollTop: 0
	    }, 600);
	    return false;
	});
	
	//карты яндекс
	ymaps.ready(function () {
	    var myMap = new ymaps.Map('map', {
	        center: [55.868900, 37.572333],
	        zoom: 13
	    }, {
	        searchControlProvider: 'yandex#search'
	    }),
	
	
	    // Создаём макет содержимого.
	    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
	        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	        hintContent: 'Собственный значок метки',
	        balloonContent: 'Это красивая метка'
	    }, {
	        // Опции.
	        // Необходимо указать данный тип макета.
	        iconLayout: 'default#image',
	        // Своё изображение иконки метки.
	        iconImageHref: '/pict/geotag.png',
	        // Размеры метки.
	        iconImageSize: [30, 42],
	        // Смещение левого верхнего угла иконки относительно
	        // её "ножки" (точки привязки).
	        iconImageOffset: [-5, -38]
	    });
	
	    myMap.geoObjects.add(myPlacemark);
	});
	
	(0, _jquery2.default)('.clothBlock2 .top').magnificPopup({
	    delegate: '.itm a', // child items selector, by clicking on it popup will open
	    type: 'image',
	    removalDelay: 500,
	    callbacks: {
	        beforeOpen: function beforeOpen() {
	            // just a hack that adds mfp-anim class to markup
	            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
	            this.st.mainClass = this.st.el.attr('data-effect');
	        }
	    },
	    gallery: {
	        enabled: true,
	        tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
	    }
	});

/***/ })
])
//# sourceMappingURL=0.808f7a60b0dce917d94a.hot-update.js.map