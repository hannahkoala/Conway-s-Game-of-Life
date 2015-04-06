var grid = [];
var height = 10;
var width = 10;

function Cell(h, w) {
    this.y = h;
    this.x = w;
    this.isAlive = false;
    this.updateLife = function () {
        if (this.isAlive) {
            this.$td.addClass("alive");
        } else {
            this.$td.removeClass("alive");
        };
    };
    this.setupOnclick = function () {
        var cell = this;
        cell.$td.click(function () {
            cell.isAlive = !this.isAlive;
            cell.updateLife();
        });
    };
    this.findNeighbors = function () {
        this.neighbors = [];
        for (var i = -1; i <= 1; i++) {
            var h1 = this.y + i;
            if (h1 < 0) {
                h1 += height;
            };
            if (h1 >= height) {
                h1 -= height;
            };
            var row = grid[h1];
            for (var j = -1; j <= 1; j++) {
                var w1 = this.x + j;
                if (w1 < 0) {
                    w1 += width;
                };
                if (w1 >= width) {
                    w1 -= height;
                };
                var cell = row[w1];
                if (cell != this) {
                    this.neighbors.push(cell);
                }
            }
        }
    };
    this.countNeighbors = function () {
        this.aliveNeighbors = 0;
        for (var i = 0; i < this.neighbors.length; i++) {
            var neighbor = this.neighbors[i];
            if (neighbor.alive) {
                this.aliveNeighbors++;
            };
        };
    };
    this.changeLifeState = function () {
        if (this.alive) {
            if (this.aliveNeighbors < 2) {
                this.alive = false;
                this.updateLife();
            } else if (this.aliveNeighbors > 3) {
                this.alive = false;
                this.updateLife();
            }
        } else if (this.aliveNeighbors == 3) {
            this.alive = true;
            this.updateLife();
        }
    };
};

function createCell(h, w) {
    var cell = new Cell(h, w);
    var $td = $("<td>");
    cell.$td = $td;
    grid[h][w] = cell;
    return cell.$td;
};

function createDom(height, width) {
    for (var h = 0; h < height; h++) {
        var $tr = $("<tr>");
        $(".game-grid").append($tr);
        grid[h] = [];
        for (var w = 0; w < width; w++) {
            $tr.append(createCell(h, w));
        };
    };
};

function runGrid(height, width) {
    for (var h = 0; h < height; h++) {
        for (var w = 0; w < width; w++) {
            var cell = grid[h][w];
            cell.setupOnclick();
            cell.findNeighbors();
            cell.countNeighbors();
            cell.changeLifeState();
        };
    };
};

$(document).ready(function () {
    createDom(height, width);
    setInterval(runGrid(height, width), 100)
});
