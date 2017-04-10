<img src="http://drvfacialplastics.com/wp-content/uploads/2012/11/face.jpg" id="img"/>

<script>
    window.onload = function(){
        var canvas = document.getElementById("canvas"),
            c = canvas.getContext("2d");

        var image = document.getElementById("img");

        c.drawImage(image, 0, 0);

        c.fillStyle = "";
        c.fillRect(0,0, canvas.width, canvas.height);
    };<!--The first two values are where to postion the rectangle-->
    c.fillstyle = "green";
    c.fillRect(20, 20, 50, 50);

    c.strokeStyle = "white";
    c.lineWidth = 5;
    c.strokeRect(20, 20, 50, 50);

    <!--To draw a line-->

    c.strokeStyle = "#7e9fc2";
    c.lineWidth = 5;

    c.beginPath();
    c.moveTo(100, 100);

    <!--To draw a circle-->
    c.beginPath();
    c.arc(200, 300,50, 0, Math.PI * 2, false);
    c.fill();


</script>