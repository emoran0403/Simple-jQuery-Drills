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
    >> this was annoying, i kept using the wrong input IDs :(
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
    // keys which do not give input, such as caps lock or the arrow keys, will 'trick' this into firing despite there being no input in the box
    // fix this later - use an alert to read the value? if not null is good, null is not bad

    $('#btnSubmit').click(function (event) {
        event.preventDefault(); // This prevents the Submit button from refreshing the page!
        /*
        6: In app.js when the form is submitted, alert the value of the text input field.
        */

        var boxValue = $('#inputBox').val(); //This sets the valueToAlert value as the value of the textbox
        alert(`Submitted! You entered: ${boxValue}`); // This alerts the value from the text box
        console.log(boxValue); //for debugging

        /*
        9: When the user types in the input field and clicks submit, append the text in an h2 element to the div
        */

        myH2.textContent = boxValue; //  sets the text content of h2 to be the value of the input box
    });

    /*
    8: Create a div element and append it to the body.
    */

    let pageDiv = document.createElement("div");  // creates a div element
    //pageDiv.innerHTML ="my div shows up";
    document.body.appendChild(pageDiv); // appends the div from above to the document body

    let myH2 = document.createElement("h2");  // creates the h2
    pageDiv.appendChild(myH2); // appends the h2 to the div



    /*
    10: When the user mouses over the h2 element, assign it a new background color and border radius
    */

    function randomColor() { //this function will return a random rgb color r, g, b
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
    
        return `rgb(${r}, ${g}, ${b})`;
    }

    function randomBorderRadius() { // this function will return random border radii from 1-100 inclusive for each corner
        let tl = Math.floor(Math.random() * 101);
        let tr = Math.floor(Math.random() * 101);
        let bl = Math.floor(Math.random() * 101);
        let br = Math.floor(Math.random() * 101);
        return `${tl}px ${tr}px ${bl}px ${br}px`;

    }

    myH2.onmouseover = function(){ // this changes the background color and border radius of the h2 element on mouse over
        $("h2").css("background-color", randomColor()); // calls the randomColor function
        $("h2").css("border-radius", randomBorderRadius()); // calls the randomBorderRadius function
    };


});