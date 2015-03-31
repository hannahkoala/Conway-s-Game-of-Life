function Cell(h, w){
      this.y = h;
      this.x = w;
      this.isAlive = false;
      this.lifeState = function() {
            if(this.isAlive === true){
                  this.$td.addClass("alive");
            } else {
                  this.$td.removeClass("alive");
            };
      };
};

var grid = [];

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

$(document).ready(function(){
    generateGrid(25, 50)

    cell.$td.click(function(){
          cell.alive = !cell.alive
   });
});
