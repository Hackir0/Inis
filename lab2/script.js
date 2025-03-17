document.addEventListener("DOMContentLoaded", () => {
    const shirtContainer = document.getElementById("shirt-container");

    shirts.forEach(shirt => {
        // Получаем доступные цвета и изображение для отображения
        const availableColors = Object.keys(shirt.colors);
        const primaryColor = availableColors.length > 0 ? availableColors[0] : null;
        const displayImage = primaryColor ? shirt.colors[primaryColor].front : shirt.default.front;

        // Создаем карточку для футболки
        const shirtCard = document.createElement("div");
        shirtCard.classList.add("shirt-card");

        // Заполняем карточку содержимым
        shirtCard.innerHTML = `
            <img src="${displayImage}" alt="${shirt.name}" class="shirt-image">
            <h2>${shirt.name}</h2>
            <p>Доступно цветов: ${availableColors.length}</p>
            <button class="quick-view">Быстрый просмотр</button>
            <button class="see-page">Подробнее</button>
        `;

        // Добавляем карточку в контейнер
        shirtContainer.appendChild(shirtCard);
    });
});