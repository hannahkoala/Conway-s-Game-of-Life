var grid = [];
var height = 25;
var width = 50;

function Cell(h, w){
      this.y = h;
      this.x = w;
      this.isAlive = false;
      this.updateLife = function() {
            if(this.isAlive){
                  this.$td.addClass("alive");
            } else {
                  this.$td.removeClass("alive");
            };
      };
      this.setupOnclick = function() {
            var cell = this;
            cell.$td.click(function(){
                  cell.isAlive = !this.isAlive;
                  cell.updateLife();
            });
      };
};

// Create data/DOM structure of grid - Push cell structure to array
function generateGrid(height, width){
      for(var h = 0; h < height; h++){
            var $tr = $("<tr>");
            $(".game-grid").append($tr);
            grid[h] =  [];
            for(var w = 0; w < width; w++){
                var cell = new Cell(h, w);
                var $td = $("<td>");
                $tr.append($td);
                cell.$td = $td;
                grid[h][w] = cell;
            };
      };
};

function runGrid(height, width){
      for(var h = 0; h < height; h++){
            for(var w = 0; w < width; w++){
                  grid[h][w].setupOnclick();
            };
      };
};

$(document).ready(function(){
    generateGrid(height, width);
    runGrid(height, width);
   });
