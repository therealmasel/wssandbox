/**
 * Created with JetBrains WebStorm.
 * User: smaslov
 * Date: 7/9/12
 * Time: 11:57 AM
 * To change this template use File | Settings | File Templates.
 */

function Board (cellWidth, cellHeight, cellsX, cellsY) {
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.cellsX = cellsX;
    this.cellsY = cellsY;
    this.generateCells = function () {
        var cells = new Array();
        for (var i = 0; i < cellsX; i ++) {
            for (var j = 0; j < cellsY; j ++) {
                cells.push(new Cell(i, j, i*cellsX + j));
            }
        }
        this.cells = cells;
    }

    this.drawBoard = function (canvasContext) {
        for (var i = 0; i < cellsX; i ++) {
            for (var j = 0; j < cellsY; j ++) {
                this.cells[i*cellsX + j].drawCell(canvasContext);
            }
        }
    }


    function Cell (positionX, positionY, cellType) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.cellType = cellType;
        this.drawCell = function (canvasContext) {
            canvasContext.strokeStyle = "green";
            canvasContext.strokeRect(positionX*cellWidth,positionY*cellHeight,cellHeight,cellWidth);
            canvasContext.fillStyle = "yellow";
            canvasContext.font="12px Arial";
            canvasContext.fillText(cellType, positionX*cellWidth, positionY*cellHeight);


            //canvasContext.fillRect(200,50,100,100);
            //canvasContext.rect(350,50,100,100);
            canvasContext.stroke();
        }
    }

}

