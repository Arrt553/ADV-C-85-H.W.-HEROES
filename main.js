var canvas = new fabric.canvas("myCanvas");

var block_image_width = 10;
var block_image_height = 10;

var player_x = 30;
var player_y = 30;

var player_objects = "";
var block_image_objects = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_objects = Img;
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top:player_y,left:player_x
        });
        canvas.add(player_objects);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function (img){
        block_image_objects = Img;
        block_image_objects.scaleToWidth(block_image_width);
        block_image_objects.scaleToHeight(block_image_height);
        block_image_objects.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_objects);
    });
}


