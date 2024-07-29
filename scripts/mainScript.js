document.addEventListener("DOMContentLoaded", function() {
    let bookNames = document.querySelectorAll('.review-book-name');
    let bookAuthors = document.querySelectorAll(".review-book-author");
    bookNames.forEach(bookName => {
        if(bookName.innerHTML.length>47){
            bookName.textContent = bookName.innerHTML.slice(0, 47) + "...";
        }
    })
    bookAuthors.forEach(bookAuthor => {
        if(bookAuthor.innerHTML.length>20){
            bookAuthor.textContent = bookAuthor.innerHTML.slice(0, 20) + "...";
        }
    })
});
