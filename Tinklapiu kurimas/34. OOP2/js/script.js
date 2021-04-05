class Book {

    constructor(title, author, totalPages, readPages, rating) {
        this.title = title;
        this.author = author;
        this.totalPages = totalPages;
        this.readPages = readPages;
        this.rating = rating;
    }

    countPagesLeft() {
        return this.totalPages - this.readPages;
    }

}

let bookList = [];

document.querySelector("#addBookForm").onsubmit = function() {
    event.preventDefault();
    let formInputs = document.querySelectorAll("#addBookForm input");
    addBookFormInputs = Array.from(formInputs).reduce((field, input) => ({...field, [input.id]: input.value}), {});
    addBookFormInputs["rating"] = document.querySelector("#addBookForm .rating:checked").value;
    let newBook = new Book(addBookFormInputs["title"], addBookFormInputs["author"], addBookFormInputs["totalPages"], addBookFormInputs["readPages"], addBookFormInputs["rating"]);
    bookList.push(newBook);
    clearInputFields(formInputs);
    printBookTable(bookList);
}

function clearInputFields(formInputs) {
    for (let input of formInputs) {
        if (input.type != "submit" && input.type != "radio") {
            input.value = "";
        }
        if (input.type == "radio") {
            input.checked = false;
        }
    }
}

function printBookTable(books) {
    const tableRows = document.querySelectorAll("#bookTable tbody tr");
    for (row of tableRows) {
        row.remove();
    }
    for (book of books) {
        const bookTable = document.querySelector("#bookTable tbody");
        const tableField = document.createElement("td");
        const tableRow = document.createElement("tr");
        bookTable.appendChild(tableRow);
        for (field in book) {
            if (field == "title" || field == "author") {
                const tableField = document.createElement("td");
                tableRow.appendChild(tableField);
                tableField.textContent = book[field];
            }
        }
        const pagesLeftField = document.createElement("td");
        tableRow.appendChild(pagesLeftField);
        pagesLeftField.textContent = book.countPagesLeft();
        
        const ratingField = document.createElement("td");
        tableRow.appendChild(ratingField);
        ratingField.textContent = book["rating"];
        
        // const deleteButtonField = document.createElement("td");
        // tableRow.appendChild(deleteButtonField);
        const deleteButton = document.createElement("button");
        ratingField.appendChild(deleteButton);
        deleteButton.onclick = function() {
            deleteBook(this, bookTable);
        }
        deleteButton.textContent = "Delete me!"

        // const editButtonField = document.createElement("td");
        // tableRow.appendChild(editButtonField);
        const editButton = document.createElement("button");
        ratingField.appendChild(editButton);
        editButton.onclick = function() {
            editBook(this, bookTable);
        }
        editButton.textContent = "Edit me!"
    }
}

function deleteBook(action, table) {
    let row = action.parentNode.parentNode;
    table.removeChild(row);
}

function editBook(action, table) {
    let row = action.parentNode.parentNode;
    let rowBookTitle = row.firstChild.innerText;

    let titleField = document.querySelector("#addBookForm #title");
    let authorField = document.querySelector("#addBookForm #author");
    let totalPagesField = document.querySelector("#addBookForm #totalPages");
    let readPagesField = document.querySelector("#addBookForm #readPages");
    let ratingFields = document.querySelectorAll("#addBookForm .rating");

    for (book of bookList) {
        if (book["title"] == rowBookTitle ) {
            titleField.value = book["title"];
            authorField.value = book["author"];
            totalPagesField.value = book["totalPages"];
            readPagesField.value = book["readPages"];
            for (rating of ratingFields) {
                if (rating.value == book["rating"]) {
                    rating.checked = true;
                    break;
                }
            }
            const submitButton = document.querySelector("#submitBook");
            submitButton.remove();
            const form = document.querySelector("#addBookForm");
            const editBookButton = document.createElement("input");
            form.appendChild(editBookButton);
            editBookButton.type = "button";
            editBookButton.value = "Edit book!"
            editBookButton.onclick = function() {
                submitEditBookForm(book);
                let formInputs = document.querySelectorAll("#addBookForm input");
                clearInputFields(formInputs);
                editBookButton.remove();
                const submitInput = document.createElement("input");
                submitInput.type = "submit";
                form.appendChild(submitInput);
                submitInput.setAttribute("id", "submitBook");
                printBookTable(bookList); 
            }
        }
    }
}

function submitEditBookForm(book) {
    let newTitleField = document.querySelector("#addBookForm #title").value;
    let newAuthorField = document.querySelector("#addBookForm #author").value;
    let newTotalPagesField = document.querySelector("#addBookForm #totalPages").value;
    let newReadPagesField = document.querySelector("#addBookForm #readPages").value;
    let newRatingField = document.querySelector("#addBookForm .rating:checked").value;
    book["title"] = newTitleField;
    book["author"] = newAuthorField;
    book["totalPages"] = newTotalPagesField;
    book["readPages"] = newReadPagesField;
    book["rating"] = newRatingField;
}
