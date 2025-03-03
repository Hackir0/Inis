document.addEventListener("DOMContentLoaded", function() {
    const shirtsContainer = document.getElementById("shirts-container");

    shirts.forEach(shirt => {
        const shirtCard = document.createElement("div");
        shirtCard.className = "shirt-card";

        // Создаем изображение
        const image = document.createElement("img");
        // Используем путь из shirts.js
        image.src = shirt.image; // Предполагаем, что shirt.image содержит полный URL или путь
        image.alt = shirt.name;
        image.onerror = function() {
            this.src = "placeholder.jpg"; // Запасное изображение, если основное не загрузилось
        };

        // Название майки
        const name = document.createElement("h2");
        name.textContent = shirt.name;

        // Цена
        const price = document.createElement("p");
        price.textContent = `$${shirt.price.toFixed(2)}`;

        // Описание
        const description = document.createElement("p");
        description.textContent = shirt.description;

        // Кнопка "See Page"
        const seePageButton = document.createElement("button");
        seePageButton.textContent = "See Page";
        seePageButton.disabled = true; // Кнопка пока не активна

        // Добавляем элементы в карточку
        shirtCard.appendChild(image);
        shirtCard.appendChild(name);
        shirtCard.appendChild(price);
        shirtCard.appendChild(description);
        shirtCard.appendChild(seePageButton);

        // Добавляем карточку в контейнер
        shirtsContainer.appendChild(shirtCard);
    });
});