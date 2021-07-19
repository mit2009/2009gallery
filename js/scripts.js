/*

Laser Kites
kite game
Petra
repelling device
Trellis
IV pole
Vantage
camera toy
			
Letter Bug
Braille teacher
Orion
light tracking system
SleepTight
back brace
touchLess
door opener

*/



$(function() {
    var baseUrl = "http://designed.mit.edu/gallery/data/"
    var colors = ['blue', 'orange', 'red', 'pink', 'silver', 'purple', 'green', 'yellow'];
    var years = [2015, 2014, 2013, 2012];
    var themes = ['Magic', 'Adventure', 'Be Well', 'Outdoors'];

    for (j in years) {
        year = years[j];
        theme = themes[j]

        var $h2 = $('<h2>'+year+'</h2>')
        var $h3 = $('<h3>'+theme+'</h3>')

        $thumbnailContainer = $('<div class="thumbnail-container"></div>')
        for (i in colors) {
            var url = baseUrl + year + '/final/photos/small/' + colors[i] + '1.jpg';
            var $thumbnail = $('<a href=""></a>')
            var $thumbnailBg = $('<div class="thumbnail-bg"></div>')
            
            $thumbnailBg.append(`
            <div class="product-info">
                <h4>Name of Product</h4>
                <p>Description of Product</p>
            </div>
            `);

            $thumbnailBg.css('background-image', 'url(' + url + ')');
            $thumbnail.append($thumbnailBg);
            $thumbnailContainer.append($thumbnail);
        }
        $('.gallery-container').append($h2).append($h3).append($thumbnailContainer);
    }
})