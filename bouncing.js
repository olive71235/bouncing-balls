var ball = [ ];
setInterval( animate, 100 );

class balls {
    constructor(x, y){
        this.vx = Math.round(Math.random() * 20 - 10);
        this.vy = Math.round(Math.random() * 20 - 10);
        this.x = x;
        this.y = y;
        this.colour = randColour();
        this.size = Math.round(Math.random() * 50 + 10);
    }
    draw(){
         var canvas = document.getElementById("imgCanvas");
                var ctx = canvas.getContext("2d");
        ctx.fillStyle = this.colour;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 3);
                ctx.fill();
                ctx.strokeStyle =
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 3);
                ctx.stroke();
    }
    update(){
        var canvas = document.getElementById("imgCanvas");
        this.x += this.vx;
        this.y += this.vy;
        if ( this.x < 0 + this.size || this.x > canvas.width - this.size)
        this.vx = -this.vx;
        if ( this.y < 0 +this.size || this.y > canvas.height - this.size)
        this.vy = -this.vy;
    }
}
function randColour(){
                var r = Math.floor(Math.random() *240 + 20);
                var g = Math.floor(Math.random() *240 + 20);
                var b = Math.floor(Math.random() *240 + 20);
                var colour = "#" + r.toString(16) + g.toString(16) + b.toString(16);
                return colour;
            }
            function draw(e){
                var canvas = document.getElementById("imgCanvas");
                var ctx = canvas.getContext("2d");
                var rect = canvas.getBoundingClientRect();
                var posx = e.clientX - rect.left;
                var posy = e.clientY - rect.top;
                var NewBall = new balls(posx, posy);
                NewBall.draw();
                ball.push ( NewBall );
            }
            function animate(){
                var canvas = document.getElementById("imgCanvas");
                var ctx = canvas.getContext("2d");
                ctx.clearRect(0, 0, canvas.width, canvas.height );
                for (var n = 0; n < ball.length ; n++ ){
                    ball [ n ].update();
                    ball [ n ].draw();
                }
            }