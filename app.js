/*
1: In app.js, make sure all the HTML has loaded before using jQuery.
>> $(document).ready(function () {everythingGoesHere});
*/

$(document).ready(function () {
    console.log('document has loaded');
    /*
    3: In app.js and use jQuery to select the <input> element you just created by the id.
    >> $('#idNameHere')
    */

    /*
    4: Add a click event handler to the <input> button that will alert a message in the browser when the button is clicked. (hint)
    >> 
    */
    $('#btnSubmit').click(function () {
        alert('The button has been clicked!');
        console.log('button has been clicked');
    })









});