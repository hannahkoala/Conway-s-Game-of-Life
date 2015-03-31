function Cell(h, w){
      this.y = h;
      this.x = w;
      this.isAlive = false;
};

var grid = [];
var height = 25;
var width = 50;

// Create data structure of grid - Push cell structure to array
function generateGrid(h, w){
      for(var h = 1; h <= height; h++){
            grid[h] =  [];
            for(var w; w <= width; w++){
                  var cell = new Cell(h, w);
                  grid[h].push(cell);
            };
      };
};

// Create DOM representation of grid
function generateDOM(h, w){
      for(var h = 0; h < height; h++){
            var $row = $("<tr>");
            $(".game-grid").append($row);
            for(var w = 0; w < width; w++){
                var $col = $("<td>");
                $row.append($col);
            };
      };
};

$(document).ready(function(){
    generateGrid(height, width);
    generateDOM(height, width);

    $("<td>").click(function(){
        $(this).addClass("alive");
    });
});
