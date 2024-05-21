function searchFunction() {
    var input, filter, results;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    results = document.getElementById("searchResults");
    
    // Получаем все элементы, содержащие текст на странице
    var elementsWithText = document.querySelectorAll("body *");
    
    var matches = [];
    elementsWithText.forEach(function(element) {
        var elementText = element.innerText.toUpperCase();
        if (elementText.includes(filter)) {
            matches.push(element);
        }
    });
    
    // Проверяем наличие совпадений
    if (matches.length > 0) {
        // Если совпадения найдены, отобразите их на странице
        results.innerHTML = "Результаты поиска для: " + filter;
        // Очистите содержимое results перед отображением результатов
        results.innerHTML = "";
        matches.forEach(function(match) {
            // Создайте элемент для отображения каждого совпадения
            var matchElement = document.createElement("div");
            matchElement.textContent = match.innerText;
            results.appendChild(matchElement);
        });
    } else {
        // Если совпадения не найдены, сообщите об этом пользователю
        results.innerHTML = "Ничего не найдено для: " + filter;
    }
}