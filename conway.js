var grid = [];
var height = 25;
var width = 50;

function Cell(h, w){
      this.y = h;
      this.x = w;
      this.isAlive = false;
      this.updateLife = function() {
            console.log("hi from the cell!")
            if(this.isAlive){
                  this.$td.addClass("alive");
            } else {
                  this.$td.removeClass("alive");
            };
      };
};

// Create data/DOM structure of grid - Push cell structure to array
function generateGrid(height, width){
      for(var h = 0; h <= height; h++){
            var $tr = $("<tr>");
            $(".game-grid").append($tr);
            grid[h] =  [];
            for(var w = 0; w <= width; w++){
                var cell = new Cell(h, w);
                var $td = $("<td>");
                $tr.append($td);
                cell.$td = $td;
                grid[h].push(cell);
            };
      };
};

function runGrid(height, width){
      for(var h = 0; h < height; h++){
            for(var w = 0; w < width; w++){
                  var cell = grid[h][w]
                  cell.$td.click(function(){
                        cell.isAlive = !this.isAlive;
                        cell.updateLife;
                        console.log(cell);
                        // $(this).addClass("alive");
                  });
            };
      };
};

$(document).ready(function(){
    generateGrid(height, width);
    runGrid(height, width);
   });
