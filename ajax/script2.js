 $('.btn').click(function() {
     $('.text').text('loading . . .');

     $.ajax({
         type: "GET",
         url: "https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true",
         success: function(response) {
             $('.text').html('');
             var children = response.data.children;
             for (var i = 0; i < children.length; i++) {
                 var src = children[i].data.thumbnail;
                 var image = "<img src='" + children[i].data.thumbnail + "'/>";
                 $('.text').append(image);
             }

         },
     });
 });
