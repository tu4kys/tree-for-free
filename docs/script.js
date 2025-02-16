// Анимация появления элементов при прокрутке
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Когда 10% элемента становится видимым
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Добавляем класс для анимации
                observer.unobserve(entry.target); // Отключаем наблюдение за элементом
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Начинаем наблюдение за каждой секцией
    });
});
