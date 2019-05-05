function random_storeId(storeIds)
{
return storeIds[Math.floor(Math.random()*storeIds.length)];
}
function random_transactionId(transactionIds)
{
return transactionIds[Math.floor(Math.random()*transactionIds.length)];
}
var storeIds = [175, 42, 0, 9];
var transactionIds = [9675, 23, 123, 7];
//console.log(random_storeId(storeIds));
//console.log(random_transactionId(transactionIds));

// int combine(int a, int b) {
//    int times = 1;
//    while (times <= b)
//       times *= 10;
//    return a*times + b;
// }
// console.log(combine(123, 145));

// TODO: Modify this function
function generateShortCode(storeId, transactionId) {
    // Logic goes here
    var date = new Date().getTime();
    var uuid = 'x'.replace(/[xy]/g, function(c) {
        var r = (date + Math.random()*16)%16 | 0;
        console.log("R"+r);
        console.log("Below is math random")
        console.log((Math.random()*16)%16 | 0);
        date = Math.floor(date/16);
        console.log(date);
      return r+date;
      //  return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
console.log(generateShortCode());

// TODO: Modify this function
function decodeShortCode(shortCode) {
    // Logic goes here

    return {
        storeId: 0, // store id goes here,
        shopDate: new Date(), // the date the customer shopped,
        transactionId: 0, // transaction id goes here
    };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {

    var storeIds = [175, 42]//, 0, 9
    var transactionIds = [9675, 23]//, 123, 7

    storeIds.forEach(function (storeId) {
        transactionIds.forEach(function (transactionId) {
            var shortCode = generateShortCode(storeId, transactionId);
            var decodeResult = decodeShortCode(shortCode);
            $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
            AddTestResult("Length <= 9", shortCode.length <= 9);
            AddTestResult("Is String", (typeof shortCode === 'string'));
            AddTestResult("Is Today", IsToday(decodeResult.shopDate));
            AddTestResult("StoreId", storeId === decodeResult.storeId);
            AddTestResult("TransId", transactionId === decodeResult.transactionId);
        })
    })
}

function IsToday(inputDate) {
    // Get today's date
    var todaysDate = new Date();
    // call setHours to take the time out of the comparison
    return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
}

function AddTestResult(testName, testResult) {
    var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
}

function clearDIV()
{
    document.getElementById("test-results").innerHTML = "";
}

// ===== Scroll to Top ====
$(document).ready(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 250px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);                                // Scroll delay time
        return false;
    });
});
