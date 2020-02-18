// $ means very likely that its jQuery
// asses the class by its name (caption-text)
$('.caption-text').text('Magic!');
// chaining
$('.caption-text').text('Magic!').css('background-color', 'orange');
// eventough you would assign the code to a variable it would still be executed

$('.alert-btn').click(function() {
    alert('Hey there!');
})

// .val to get the value out of there
// .val can also set the input string
$('.alert-btn').click(function() {
        var name = $('.name-input').val();
        alert("Hey " + name);
        $('.name-input').val('');
    })
    // get the input, save it in a variable and make it the new paragraph text
$('.user-btn').click(function() {
        var val = $('.user-input').val();
        alert("Hey " + name);
        $('.user-text').text(val);
    })
    // short cut, to make it nested $('.user-text').text($('.user-input').val());