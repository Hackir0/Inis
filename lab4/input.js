document.addEventListener('DOMContentLoaded', function() {
    const targets = document.querySelectorAll('.target');
    let isDragging = false;
    let isStickyDragging = false;
    let currentTarget = null;
    let initialX, initialY;
    let offsetX = 0, offsetY = 0;
    let originalPosition = { x: 0, y: 0 };

    // Обработчики для обычного перетаскивания (ЛКМ + перемещение)
    targets.forEach(target => {
        target.addEventListener('mousedown', startDrag);
        target.addEventListener('dblclick', startStickyDrag);
    });

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('click', endStickyDrag);
    document.addEventListener('keydown', handleEscape);

    function startDrag(e) {
        if (isStickyDragging) return; // Игнорируем, если включено "липкое" перетаскивание
        if (e.button !== 0) return; // Проверяем, что нажата ЛКМ

        isDragging = true;
        currentTarget = e.target;
        initialX = e.clientX - currentTarget.getBoundingClientRect().left;
        initialY = e.clientY - currentTarget.getBoundingClientRect().top;
        originalPosition.x = currentTarget.offsetLeft;
        originalPosition.y = currentTarget.offsetTop;

        currentTarget.style.cursor = 'grabbing';
        currentTarget.style.position = 'absolute'; // Важно для перемещения
        e.preventDefault(); // Предотвращаем выделение текста
    }

    function drag(e) {
        if (isDragging && currentTarget) {
            const x = e.clientX - initialX;
            const y = e.clientY - initialY;
            
            currentTarget.style.left = `${x}px`;
            currentTarget.style.top = `${y}px`;
        } else if (isStickyDragging && currentTarget) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            
            currentTarget.style.left = `${x}px`;
            currentTarget.style.top = `${y}px`;
        }
    }

    function endDrag(e) {
        if (isDragging && currentTarget) {
            isDragging = false;
            currentTarget.style.cursor = 'grab';
            currentTarget = null;
        }
    }

    function startStickyDrag(e) {
        if (isDragging) return; // Игнорируем, если уже идет обычное перетаскивание

        isStickyDragging = true;
        currentTarget = e.target;
        offsetX = e.clientX - currentTarget.getBoundingClientRect().left;
        offsetY = e.clientY - currentTarget.getBoundingClientRect().top;
        originalPosition.x = currentTarget.offsetLeft;
        originalPosition.y = currentTarget.offsetTop;

        currentTarget.style.backgroundColor = getRandomColor();
        currentTarget.style.cursor = 'grabbing';
        currentTarget.style.position = 'absolute'; // Важно для перемещения
    }

    function endStickyDrag(e) {
        if (isStickyDragging && currentTarget && e.target === currentTarget) {
            isStickyDragging = false;
            currentTarget.style.cursor = 'grab';
            currentTarget = null;
        }
    }

    function handleEscape(e) {
        if (e.key === 'Escape' && draggingElement) {
            draggingElement.style.left = `${originalPosition.x}px`;
            draggingElement.style.top = `${originalPosition.y}px`;
    
            if (isStickyDragging) {
                isStickyDragging = false;
                draggingElement.style.backgroundColor = 'red';
            }
    
            draggingElement = null;
            document.removeEventListener('mousemove', moveElementToCursor);
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});