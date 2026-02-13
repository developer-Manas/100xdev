const todoList = document.getElementById("todo-list");

fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(response => response.json())
    .then(data => {
        data.forEach(todo => {
            const div = document.createElement("div");
            div.classList.add("tod");

            if (todo.completed) {
                div.classList.add("completed");
                div.textContent = "✅ " + todo.title;
            } else {
                div.classList.add("not-completed");
                div.textContent = "❌ " + todo.title;
            }

            todoList.appendChild(div);
        });
    })

    .catch(error => {
        console.log("Error:", error);
    });