//preloader close
// $(window).on('load', function() {
$(document).ready(()=>{
    $('.preloader').fadeOut('slow', function() {
        $(this).remove();
    });
    
});
setTimeout(function() {
    $('.preloader').fadeOut('slow', function() {
        $(this).remove();
    });
}, 3000);

//dark and light mode change
$(document).ready(()=>{
    $('.turnsun').click(()=> {
        $('.body').addClass('white')
    })
    $('.turnmoon').click(()=> {
        $('.body').removeClass('white')
    })
})

//open and close calculator modal
if ($('.calc').length) {
    function openCalc() {
        $('.calc').addClass('show');
        $('body').css('overflow', 'hidden'); 
    }  
    function closeCalc() {
        $('.calc').removeClass('show');
        $('body').css('overflow', 'unset'); 
    }   
}
$('.calc__wrapper').click(()=> {
    closeCalc()
})

// open and close callback modal
if ($('.modal').length) {
    function openModal() {
        $('.modal').addClass('show');
        $('body').css('overflow', 'hidden'); 
    }  
    function closeModal() {
        $('.modal').removeClass('show');
        $('body').css('overflow', 'unset'); 
    }   
    $('.modal__wrapper').click(()=> {
        closeModal()
    })
}


// custom select function in forms
$(document).ready(function() {
    $('.main-select').each(function() {
        var $select = $(this);
        var $current = $select.find('.main-current');
        var $others = $select.find('.main-others');
        var $hiddenInput = $select.find('.main-hidden');
        var $bTag = $current.find('b');

        // Переключение класса "show" при клике на main-current
        $current.click(function() {
            $select.toggleClass('show');
        });

        // Обработка выбора элемента в main-others
        $others.find('p').click(function() {
            var selectedText = $(this).text();
            $bTag.text(selectedText); // Обновляем текст внутри тега <b>
            $hiddenInput.val(selectedText); // Устанавливаем значение hidden input
            $select.removeClass('show'); // Убираем класс "show" после выбора
        });

        // Закрытие выпадающего списка при клике вне его
        $(document).click(function(e) {
            if (!$select.is(e.target) && $select.has(e.target).length === 0) {
                $select.removeClass('show');
            }
        });
    });
});

//sending process and show thanks in modal
if($('.modal__info').length) {
    function openThanks() {
        $('.modal__form').css('display', 'none');
        $('.modal--con1').css('display', 'flex');
        setTimeout(function() {
            $('.modal--con1').css('display', 'none');
            $('.modal--con2').css('display', 'flex');
        }, 2000)
        setTimeout(function() {
            $('.modal--con2').css('display', 'none');
            $('.modal__form').css('display', 'block');
        }, 4000)
    }  
}

// show thanks in blocks form
$(document).ready(function() {
    $('.submit-btn').click(function() {
        // Найти ближайший родительский контейнер .form-container
        var $container = $(this).closest('.thanks-container');
        var $form = $container.find('.thanks-hidden');
        var $thanks = $container.find('.thankstype');

        // Скрыть форму и показать блок благодарности
        $form.hide();
        $thanks.css('display', 'flex');

        // Вернуть все обратно через 3 секунды
        setTimeout(function() {
            $form.show();
            $thanks.css('display', 'none');
        }, 3000); // 3000 миллисекунд = 3 секунды
    });
});

//projects block tab in service page
$(document).ready(function() {
    // Убедимся, что все элементы с классом .projects__content--item активны на старте
    $('.projects__content--item').addClass('active');
    
    // Задержка 1 секунда, чтобы изменить состояние активных элементов
    setTimeout(function() {
        // Убираем класс active у всех элементов с классом .projects__content--item
        $('.projects__content--item').removeClass('active');
        
        // Оставляем класс active только у первого элемента
        $('.projects__content--item').first().addClass('active');
    }, 1000); // 1000 миллисекунд = 1 секунда

    // Обработка клика на элементы навигации
    $('.projects__nav--item').click(function() {
        // Удаляем класс active у всех элементов навигации
        $('.projects__nav--item').removeClass('active');
        
        // Удаляем класс active у всех элементов контента
        $('.projects__content--item').removeClass('active');
        
        // Добавляем класс active к нажатому элементу навигации
        $(this).addClass('active');
        
        // Получаем индекс нажатого элемента
        var index = $(this).index();
        
        // Добавляем класс active к соответствующему элементу контента
        $('.projects__content--item').eq(index).addClass('active');

        switchMoreLink();
    });

    if ($(".servicesPage .projects").length > 0) {
        switchMoreLink();
        function switchMoreLink() {
            var contentItem = $(".projects__content .projects__content--item.active"),
                contentKey = contentItem.data('key');
            if (contentItem.data('count') <= contentItem[contentKey].children.length) {
                $(".ProjectMoreLink").hide();
            } else {
                $(".ProjectMoreLink").show();
            }
        }
    }
});

//tarif block item show more in service page
$(document).ready(function() {
    if($('.tarif__items').length){
        for (let i = 0; i < $('.tarif__item').length; i++) {
            $('.tarif__item').eq(i).children('.tarif__btn').click(()=> {
                $('.tarif__item').eq(i).toggleClass('show')
            })
            
        }
    }
})

//questions accordion block show in service page
$(document).ready(function() {
    if($('.faq__items').length){
        for (let i = 0; i < $('.faq__item').length; i++) {
            $('.faq__item').eq(i).children('.faq__right').click(()=> {
                $('.faq__item').eq(i).toggleClass('show')
            })
            
        }
    }
})

//video frame open/close
if($('.video').length) {
    function openVideo() {
        $('.video').addClass('show');
        $('body').css('overflow', 'hidden'); 
    }  
    function closeVideo() {
        $('.video').removeClass('show');
        $('body').css('overflow', 'unset'); 
    }   
    $('.video__wrapper').click(()=> {
        closeVideo()
    })
}

//calculator modal content change function
$(document).ready(function() {
    const $rowItems = $(".calc__row--item");
    const $chooseItems = $(".calc__choose--item");
    const $btnBack = $(".calc__back");
    const $btnForw = $(".calc__forw");
    const $btnPrice = $(".calc__price");

    let currentIndex = 0;

    function updateSteps() {
        // Обновляем активный элемент в верхней и нижней группах
        $rowItems.removeClass("active").eq(currentIndex).addClass("active");
        $chooseItems.removeClass("active").eq(currentIndex).addClass("active");

        // Показываем или скрываем кнопки "Назад", "Далее" и "Узнать стоимость"
        $btnBack.toggleClass("show", currentIndex > 0);
        $btnForw.toggleClass("show", currentIndex < $rowItems.length - 1);
        $btnPrice.toggleClass("show", currentIndex === $rowItems.length - 1);
    }

    $btnForw.on("click", function() {
        if (currentIndex < $rowItems.length - 1) {
            currentIndex++;
            updateSteps();
        }
    });

    $btnBack.on("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSteps();
        }
    });

    updateSteps(); // Инициализация при загрузке страницы
});

//burger open/close
if($('.burger').length) {
    function toggleBurger() {
        $('.burger').toggleClass('open');   
    }  

    $('.burger__wrapper').click(()=> {
        toggleBurger()
    })
}

// width for projects slider idem in mobile in service page
$(document).ready(function() {
    function adjustItemWidth() {
        if ($(window).width() < 576) {
            $('.projects__item').css('width', ($(window).width() - 30) + 'px');
        } else {
            $('.projects__item').css('width', ''); // Сбрасываем ширину, если экран больше 576 пикселей
        }
    }

    // Вызываем функцию при загрузке страницы
    adjustItemWidth();

    // Вызываем функцию при изменении размера окна
    $(window).resize(function() {
        adjustItemWidth();
    });
});

//fixed header func
$(window).scroll(function(){
    if ($(window).scrollTop() >= 150) {
      $('.header').addClass('sticky');
    }
    else {
      $('.header').removeClass('sticky');
    }
  });

// main banner in main page arrows margin
$(document).ready(function() {
    console.log('ss');
    
    let ww = $(window).width()
    let cw = $('.container').width()
    let rl = (ww - cw) / 2 + 'px'
    let rrl = '-' + rl
    $('.banner .arrowLeft').css('left', rl)
    $('.banner .arrowRight').css('right', rl)
    $('.dust1').css('left', rrl)
    $('.dust2').css('right', rrl)
    $('.dust3').css('right', rrl)
    $('.dust5').css('right', rrl)
    $('.dust8').css('right', rrl)
    $('.dust4').css('left', rrl)
    $('.dust7').css('left', rrl)
    $('.dust9').css('left', rrl)
    $('.dust10').css('left', rrl)
})

// open and close rekvizit modal
if ($('.rekviz').length) {
    function openReks() {
        $('.rekviz').addClass('show');
        $('body').css('overflow', 'hidden'); 
    }  
    function closeReks() {
        $('.rekviz').removeClass('show');
        $('body').css('overflow', 'unset'); 
    }   
    $('.rekviz__wrapper').click(()=> {
        closeReks()
    })
}

//methods items grid class
if ($('.method__item').length == 14) {
    $('.method__items').addClass('grid14')
}

//own var show
$('.calc__item--body input[type=radio]').on('change', function() {
    var parentBody = $(this).closest('.calc__item--body');
    
    parentBody.siblings('.calc__item--bot').removeClass('show');
    
    if ($(this).closest('.other-var').length) {
        parentBody.siblings('.calc__item--bot').addClass('show');
    }
});