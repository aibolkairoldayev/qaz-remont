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
}
$('.modal__wrapper').click(()=> {
    closeModal()
})

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
    });
});
