document.addEventListener("DOMContentLoaded", () => {
    loadTodos(); // โหลดข้อมูลจากคุกกี้เมื่อเปิดหน้าเว็บ
});

function createTodo() {
    // ใช้ฟังก์ชัน prompt เพื่อรับข้อความ
    const taskText = prompt("Enter a new TO DO:");
    
    // ถ้าผู้ใช้กรอกข้อมูลและไม่ได้กดยกเลิก
    if (taskText !== null && taskText.trim() !== "") {
        addTodoToDOM(taskText, true);
        saveTodos(); // อัปเดตคุกกี้
    }
}

// ฟังก์ชันสร้าง div และใส่เข้าไปใน DOM
function addTodoToDOM(text, isNew = false) {
    const ft_list = document.getElementById("ft_list");
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";
    todoDiv.textContent = text;
    
    // ฟังก์ชันลบเมื่อคลิกที่ TO DO
    todoDiv.onclick = function() {
        // ใช้ฟังก์ชัน confirm เพื่อยืนยันการลบ
        if (confirm("Do you want to remove that to-do item?")) {
            this.remove(); // ลบออกจาก DOM อย่างถาวร
            saveTodos(); // อัปเดตคุกกี้
        }
    };

    // ถ้ารายการใหม่ ให้เพิ่มไว้บนสุด (prepend)
    if (isNew) {
        ft_list.prepend(todoDiv);
    } else {
        // ถ้าโหลดจากคุกกี้ ให้ต่อท้าย (appendChild) เพื่อรักษาลำดับเดิม
        ft_list.appendChild(todoDiv);
    }
}

// ฟังก์ชันบันทึก TO DO ลง Cookie
function saveTodos() {
    const ft_list = document.getElementById("ft_list");
    const todos = [];
    const items = ft_list.children;
    
    // ดึงข้อความจาก DOM ตามลำดับปัจจุบัน
    for (let i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }
    
    // แปลงเป็น JSON string และบันทึกลงคุกกี้ (ตั้งอายุ 1 ปี)
    const jsonStr = encodeURIComponent(JSON.stringify(todos));
    document.cookie = `todos=${jsonStr}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

// ฟังก์ชันโหลดข้อมูลจาก Cookie
function loadTodos() {
    const name = "todos=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    let todosStr = "";
    
    for(let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i].trim();
        if (c.indexOf(name) === 0) {
            todosStr = c.substring(name.length, c.length);
        }
    }
    
    if (todosStr) {
        try {
            // แปลงกลับจาก JSON เป็น Array
            const todos = JSON.parse(todosStr);
            // สร้างรายการใน DOM
            for (let i = 0; i < todos.length; i++) {
                addTodoToDOM(todos[i], false);
            }
        } catch(e) {
            console.error("Error parsing cookies", e);
        }
    }
}
