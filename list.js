class Novel{
    constructor(title,author,isbn) {
        this.author = author;
        this.author = author;
        this.isbn = isbn;
    }
   
}

class UI {
    addNovelToList(book) {

        const list = document.getElementById('novel-list')
        const row = document.createElement('tr')
        row.innerHTML =

        <td>${novel.title}</td>
        <td>${novel.author}</td>
        <td>${novel.isbn}</td>
        <td><a href="" class="delete">X</a></td>

        

        list.appendChild(row);


}


showAlert(message, className){
    const div = documement.createElement('div');

    //Add className

    div.className = 'alert ${className}';

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');

    //insert alert

    container.insertBefore(div, form);

    //Timeout after 3 sec

    setTimeout(function(){

        document.querySelector('.alert').remove();
    }, 3000);



}

deleteNovel(target) {

    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

clearFields(){

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}
}

//Event Listening

document.getElementById('novel-form').addEventListener('submit' ,function(e){

    //Get form values

    const title = document.getElementById('title').value;
    const title = document.getElementById('author').value;
    const title = document.getElementById('isbn').value;

    //Instantiate book

    const novel = new Novel(title, author, isbn);

    //Instantiate UI

    const ui = new UI();

    //Validate

    if(title === '' || author === '' || isbn === '') {

        //Error alert

        ui.showAlert('please fill in all fields', 'error');
    }

    else{

        //Add novel to list

        ui.addNovelToList(book);

        //show success

        ui.showAlert('Book Added', 'success');

        //Clear Fields

        ui.clearFields();
    }

    e.preventDefault();
})