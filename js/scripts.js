function newItem() {
    //1. Adding a new item to the list of items: 
    let list = $('#list');
    let inputValue = $('#input').val();
    let li = $(`<li>${inputValue}</li>`);
    list.append(li);

    //2. Crossing out an item from the list of items:
    li.on('click', function() {
        li.addClass('strike')
    });

    //3(i). Adding the delete button "X": 

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

    // 4. Reordering the items: 


}