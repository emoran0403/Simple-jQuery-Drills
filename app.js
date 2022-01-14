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

    /*
    7: If the user has typed in the input field then the button should be enabled, otherwise the button should be disabled.
    >> this was annoying, i kept using the wrong input IDs
    */
       // Below will work, but it requires the user to click off the text box before enabling the button

       /*
        $("#inputBox").change(function(){
            $("#btnSubmit").removeAttr("disabled");
            console.log('textbox has been changed');
        });
        */

    function enableBtn() { //  This function will remove the 'disabled' attribute from the submit button
        $("#btnSubmit").removeAttr("disabled");
    }

    $("#inputBox").on('keyup', enableBtn); // attaches an event handler to the input box that fires after a key is released and triggers the enableBtn function

    $('#btnSubmit').click(function (event) {
        event.preventDefault(); // This prevents the Submit button from refreshing the page!
        /*
        6: In app.js when the form is submitted, alert the value of the text input field.
        */

        var boxValue = $('#inputBox').val(); //This sets the valueToAlert value as the value of the textbox
        alert(`Submitted! You entered: ${boxValue}`); // This alerts the value from the text box
        console.log(boxValue); //for debugging



    });








});