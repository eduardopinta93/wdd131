let input = document.querySelector("#favchap");
let button = document.querySelector('button');
let list = document.querySelector("ul");





button.addEventListener('click', function(){
    if(input.value.trim() === ''){
        alert("Please enter a valid scripture");
        input.focus();
        return;
    }
    let li = document.createElement("li");
    li.textContent = input.value;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function(){
        list.removeChild(li);
        input.focus();
    });

    input.value = '';
    input.focus();
});

