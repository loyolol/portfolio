function changeImage(newSrc, element) {
    if (!element.dataset.origSrc) {
        element.dataset.origSrc = element.src; // сохранить исходный путь в data-атрибуте
    }
    
    // Получаем только имя файла из путей к изображениям для сравнения
    let currentSrc = element.src.split('/').pop();
    let newSrcFileName = newSrc.split('/').pop();

    element.src = currentSrc === newSrcFileName ? element.dataset.origSrc : newSrc;
}