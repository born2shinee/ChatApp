$(function(){
    var form = $('#input-form');
    // Response sheet

    var url = "https://script.google.com/macros/s/AKfycbxgEh_B6hac24xSqByrYmXK3SGaY4r6YHynbvdhKe8ut6eoOfNQQ0NfZThAzisBBds2/exec"
    
    form.submit(function(e)
    {
        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: form.serialize(),
            success:function()
            {
                $('#successbox').fadeIn('slow').delay(1300).fadeOut('slow');
                $('#inp').val('');
                console.log('entered')
            }
        });

        e.preventDefault();
    });
    
    
});
