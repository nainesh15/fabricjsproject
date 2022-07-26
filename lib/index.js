document.getElementById('imgLoader').onchange = function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) { console.log('fdsf');
        var imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function () {
            // start fabricJS stuff
            
            var image = new fabric.Image(imgObj);
            image.set({
                left: 250,
                top: 250,
                angle: 20,
                padding: 10,
                cornersize: 10
            });
            //image.scale(getRandomNum(0.1, 0.25)).setCoords();
            canvas.add(image);
            
            // end fabricJS stuff
        }
        
    }
    reader.readAsDataURL(e.target.files[0]);
}

var canvas = window._canvas = new fabric.Canvas('c');

// Do some initializing stuff
canvas.backgroundColor = '#3f8fd2';

fabric.Image.fromURL('https://s3-eu-west-1.amazonaws.com/kienzle.dev/img/image-with-cors.png', function (oImg) {
    // scale image down
    oImg.scale(0.4).setFlipX(false);
    canvas.add(oImg);
}, {
    crossOrigin: 'Anonymous'
});

fabric.Object.prototype.set({
    transparentCorners: false,
    cornerColor: 'rgba(102,153,255,0.5)',
    cornerSize: 12,
    padding: 5
});


var text = new fabric.Text('Text inside canvas', {
    left: 200,
    top: 50
});
text.hasRotatingPoint = true;
canvas.add(text);

canvas.add(new fabric.Rect({
    left: 200,
    top: 200,
    width: 50,
    height: 50,
    fill: '#ffc400'
}));

// Multiplier dataURL + Crop
fabric.util.addListener(document.getElementById('data-url'), 'click', function () {
    window.open(canvas.toDataURL({
        multiplier: 5,
        quality: 1,
        left: 0,
        top: 0,
        width: 50,
        height: 50

    }));

});