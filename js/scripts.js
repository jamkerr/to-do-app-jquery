// Prevent default form submission on enter that refreshes the page
$('form').on('submit', function (event) {
    event.preventDefault();
});

function newItem() {

    //1. Adding a new item to the list of items: 
    let list = $('#list');
    let inputValue = $('#input').val();
    let li = $(`<li>${inputValue}</li>`);
    if (inputValue === '') {
        alert("Write some text");
      } else {
        list.append(li);
      }
    
    //2. Crossing out an item from the list of items:
    function crossOut() {
        li.toggleClass('strike');
    }
    li.on('click', crossOut);

    //3(i). Adding the delete button "X": 
    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    crossOutButton.on('click', function() {
        li.addClass('delete');
    });

    // 4. Reordering the items: 
    list.sortable();

}