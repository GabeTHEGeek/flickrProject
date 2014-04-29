$(document).on("pagecreate", "#photolist", function()
{
     var theData = [];       

     jsonFlickrFeed(theData);
});

function jsonFlickrFeed(theData) {
   var output = '';
   for (var i = 0; i < theData.items.length; i++) {
        var title = theData.items[i].title;
        var lastIndex = theData.items[i].media.m.lastIndexOf("."); 
        var link = theData.items[i].media.m.substring(0, lastIndex - 2);
        
        var blocktype = ((i % 4) === 3) ? 'd' : ((i % 4) === 2) ? 'c' : ((i % 4) === 1) ? 'd' :
            'a';
        output += '<div class="ui-block-' + blocktype + '">';
        output += '<a href="#showphoto" data-transition="fade" onclick="showPhoto(\'' + link + '\', \'' + title + '\')">';
        console.log(link);
        output += '<img src="' + link + '_q.jpg" alt="' + title + '">';
        output += '</a>';
        output += '</div>';
    }
    $('#photolist').html(output);
}

function showPhoto(link, title) {
    var output = '<a href="#photos" data-transition="fade">';
    output += '<img src="' + link + '_b.jpg" alt="' + title + '">';
    output += '</a>';
    $('#myphoto').html(output);
}

