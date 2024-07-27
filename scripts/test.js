function sendBookDataToServer(bookName,author){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:8080/auth/auth-person',false);
    xhr.onload = () => {
        if(xhr.status>=200 && xhr.status<300){
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            fetch('/books/favorites?name=' + encodeURIComponent(bookName) + '&author=' + encodeURIComponent(author)
                + '&personId=' + encodeURIComponent(data['personId']), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(r => console.log(r.ok));
        } else{
            console.log('Request failed with status: ' + xhr.status);
        }
    }

// TODO при нажатии на иконку избранного мне нужно отправить объекь PersonBook и дальше если
}

sendBookDataToServer('Игры разума','Михаил Петров');