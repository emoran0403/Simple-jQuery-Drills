/*
1: In app.js, make sure all the HTML has loaded before using jQuery.
>> $(document).ready(function () {everythingGoesHere});
*/

$(document).ready(function () {
    
    //console.log('document has loaded');
    /*
    3: In app.js and use jQuery to select the <input> element you just created by the id.
    >> $('#idNameHere')
    */

    /*
    4: Add a click event handler to the <input> button that will alert a message in the browser when the button is clicked.
    >> $('selector').click(function () {functionToRunOnClickGoesHere}),
    */

    $('#btnSubmit').click(function (event) {
        event.preventDefault(); // This prevents the Submit button from refreshing the page!
        /*
        6: In app.js when the form is submitted, alert the value of the text input field.
        */

        var valueToAlert = $('#inputBox').val(); //This sets the valueToAlert value as the value of the textbox
        alert(`Submitted! You entered: ${valueToAlert}`); // This alerts the value from the text box
        console.log(valueToAlert); //for debugging
    });






});