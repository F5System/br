// fancybox-override.js - настройки Fancybox для iframe

// Функция для применения кастомных настроек
function initFancyboxIframe() {
    // Уничтожаем существующие инстансы (если есть)
    if (typeof Fancybox !== 'undefined') {
        // Закрываем все открытые
        Fancybox.close();
        
        // Применяем настройки для iframe
        Fancybox.defaults.iframe = {
            preload: false,
            css: {
                width: '60vw',
                height: 'auto',
                minWidth: '300px'
            }
        };
        
        // Основные настройки
        Fancybox.defaults.iframeAttr = {
            allow: 'autoplay; fullscreen',
            scrolling: 'auto',
            frameborder: '0'
        };
        
        // Настройка для HTML-контента
        Fancybox.defaults.Html = {
            defaultDisplay: 'block'
        };
    }
}

// Ждём загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    initFancyboxIframe();
});

// Инициализация для динамически создаваемых ссылок
if (typeof Fancybox !== 'undefined') {
    initFancyboxIframe();
}