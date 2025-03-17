document.addEventListener("DOMContentLoaded", function() {
    const addNoteButton = document.getElementById("add-note");
    const notesContainer = document.getElementById("notes-container");

    function loadNotes() {
        notesContainer.innerHTML = "";
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.forEach((note, index) => {
            const noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.innerHTML = `
                <span>${note}</span>
                <button class="edit-note" data-index="${index}">✎</button>
                <button class="delete-note" data-index="${index}">X</button>
            `;
            notesContainer.appendChild(noteElement);
        });
    }

    addNoteButton.addEventListener("click", function() {
        const noteText = prompt("Digite sua anotação:");
        if (noteText) {
            const notes = JSON.parse(localStorage.getItem("notes")) || [];
            notes.push(noteText);
            localStorage.setItem("notes", JSON.stringify(notes));
            loadNotes();
        }
    });

    notesContainer.addEventListener("click", function(event) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const index = event.target.getAttribute("data-index");

        if (event.target.classList.contains("delete-note")) {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            loadNotes();
        }

        if (event.target.classList.contains("edit-note")) {
            const newText = prompt("Edite sua anotação:", notes[index]);
            if (newText) {
                notes[index] = newText;
                localStorage.setItem("notes", JSON.stringify(notes));
                loadNotes();
            }
        }
    });

    loadNotes();
});

document.addEventListener("DOMContentLoaded", function() {
    const addReminderButton = document.getElementById("add-reminder");
    const remindersContainer = document.getElementById("reminders-container");

    function loadReminders() {
        remindersContainer.innerHTML = "";
        const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
        reminders.forEach((reminder, index) => {
            const reminderElement = document.createElement("div");
            reminderElement.classList.add("reminder");
            reminderElement.innerHTML = `
                <input type="text" value="${reminder.text}" readonly>
                <input type="datetime-local" value="${reminder.datetime}" readonly>
                <button class="edit-reminder" data-index="${index}">✎</button>
                <button class="delete-reminder" data-index="${index}">X</button>
            `;
            remindersContainer.appendChild(reminderElement);
        });
    }

    addReminderButton.addEventListener("click", function() {
        const text = prompt("Digite seu lembrete:");
        const datetime = prompt("Escolha a data e hora (AAAA-MM-DDTHH:MM):");
        if (text && datetime) {
            const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
            reminders.push({ text, datetime });
            localStorage.setItem("reminders", JSON.stringify(reminders));
            loadReminders();
        }
    });

    remindersContainer.addEventListener("click", function(event) {
        const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
        const index = event.target.getAttribute("data-index");

        if (event.target.classList.contains("delete-reminder")) {
            reminders.splice(index, 1);
            localStorage.setItem("reminders", JSON.stringify(reminders));
            loadReminders();
        }

        if (event.target.classList.contains("edit-reminder")) {
            const newText = prompt("Edite seu lembrete:", reminders[index].text);
            const newDatetime = prompt("Edite a data e hora:", reminders[index].datetime);
            if (newText && newDatetime) {
                reminders[index] = { text: newText, datetime: newDatetime };
                localStorage.setItem("reminders", JSON.stringify(reminders));
                loadReminders();
            }
        }
    });

    loadReminders();
});


