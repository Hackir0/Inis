document.addEventListener("DOMContentLoaded", () => {
    const shirtContainer = document.getElementById("shirt-container");

    shirts.forEach(shirt => {
        const availableColors = Object.keys(shirt.colors);
        const primaryColor = availableColors.length > 0 ? availableColors[0] : null;
        const displayImage = primaryColor ? shirt.colors[primaryColor].front : shirt.default.front;

        const shirtCard = document.createElement("div");
        shirtCard.classList.add("shirt-card");

        shirtCard.innerHTML = `
            <img src="${displayImage}" alt="${shirt.name}" class="shirt-image">
            <h2>${shirt.name}</h2>
            <p>Доступно цветов: ${availableColors.length}</p>
            <button class="quick-view">Быстрый просмотр</button>
            <button class="see-page">Подробнее</button>
        `;

        shirtContainer.appendChild(shirtCard);
    });
});