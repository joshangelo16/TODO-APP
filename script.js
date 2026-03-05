let currentSpan = null;

function addTask() {
    const input = document.getElementById("input-box");
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        li.classList.toggle("done", checkbox.checked);
    };

    const span = document.createElement("span");
    span.textContent = text;

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = function() {              
        currentSpan = span;
        document.getElementById("modal-input").value = span.textContent;
        document.getElementById("modal").style.display = "flex";
    };                                         

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("task-list").appendChild(li);
    input.value = "";
}

function saveEdit() {
    const newText = document.getElementById("modal-input").value.trim();
    if (newText !== "" && currentSpan) {
        currentSpan.textContent = newText;
    }
    closeModal();
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    currentSpan = null;
}

