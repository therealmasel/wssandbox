var canvasElement;
var board;

function initialize() {
    canvasElement = document.createElement("canvas");
    canvasElement.id = "sam_canvas";
    document.body.appendChild(canvasElement);
    var boardWidth = 10;
    var boardHeight = 10;
    var cellWidth = 50;
    var cellHeight = 50;
    var canvasWidth = 5 + (boardWidth * cellWidth);
    var canvasHeight= 5 + (boardHeight * cellHeight);
    canvasElement.width = canvasWidth;
    canvasElement.height = canvasHeight;

    gCanvas = canvasElement.getContext("2d");
    board = new Board(
        cellWidth,
        cellHeight,
        boardWidth,
        boardHeight
    );
    board.generateCells();
    board.drawBoard(gCanvas);

    //cell = new Cell()
    //cell = new Cell (10,10, 11);
    //cell.drawCell(gCanvas);
    /*
    gCanvas.strokeStyle = "green";
    gCanvas.fillStyle = "green";
    gCanvas.strokeRect(50,50,100,100);
    gCanvas.fillRect(200,50,100,100);
    gCanvas.rect(350,50,100,100);
    gCanvas.stroke();
    */

}