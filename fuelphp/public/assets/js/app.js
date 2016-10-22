var data = {
    labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00","8:00","9:00","10:00","11:00","12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00","20:00","21:00","22:00","23:00","24:00"],
    datasets: [{
        fillColor: "rgba(100,220,220,0.5)",
        strokeColor: "rgba(100,220,220,1)",
        // ここに
        data: [10,50,41,65,56,65,0,0,0,0,0,0,0,0,0,4,0,54,45,12,10,5,0,6]
    }]
}

var canvas = $('<canvas />');

canvas.attr({
    width: 600,
    height: 450
});

new Chart(canvas[0].getContext('2d')).Line(data, {
    onAnimationComplete: function () {
        $('#img').attr({
            src: canvas[0].toDataURL()
        });
    }
});
