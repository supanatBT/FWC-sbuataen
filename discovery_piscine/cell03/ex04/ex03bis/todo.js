$(document).ready(function() {
    loadTodos();

    $("button").click(function() {
        const taskText = prompt("Enter a new TO DO:");
        if (taskText !== null && taskText.trim() !== "") {
            addTodoToDOM(taskText, true);
            saveTodos();
        }
    });

    function addTodoToDOM(text, isNew = false) {
        const $todo = $("<div></div>").addClass("todo-item").text(text);
        $todo.click(function() {
            if (confirm("Do you want to remove that to-do item?")) {
                $(this).remove();
                saveTodos();
            }
        });

        if (isNew) {
            $("#ft_list").prepend($todo);
        } else {
            $("#ft_list").append($todo);
        }
    }

    function saveTodos() {
        const todos = [];
        $(".todo-item").each(function() {
            todos.push($(this).text());
        });
        document.cookie = `todos=${encodeURIComponent(JSON.stringify(todos))}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
    }

    function loadTodos() {
        const cookies = document.cookie.split(';');
        let todosStr = "";
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i].trim();
            if (c.startsWith("todos=")) {
                todosStr = decodeURIComponent(c.substring(6));
                break;
            }
        }
        if (todosStr) {
            try {
                const todos = JSON.parse(todosStr);
                $.each(todos, function(index, text) {
                    addTodoToDOM(text, false);
                });
            } catch(e) { console.error("Error parsing cookies"); }
        }
    }
});
