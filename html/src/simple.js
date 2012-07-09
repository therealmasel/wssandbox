var canvasElement;
var canvasContext;
var board;
        var boardWidth = 10;
        var boardHeight = 10;
        var cellWidth = 50;
        var cellHeight = 50;
        var canvasWidth = 5 + (boardWidth * cellWidth);
        var canvasHeight = 5 + (boardHeight * cellHeight);
        function initialize() {
            canvasElement = document.createElement("canvas");
            canvasElement.id = "sam_canvas";
            document.body.appendChild(canvasElement);


            canvasElement.width = canvasWidth;
            canvasElement.height = canvasHeight;

            canvasContext = canvasElement.getContext("2d");
            board = new Board(
                cellWidth,
                cellHeight,
                boardWidth,
                boardHeight
            );
            board.generateCells();
            board.drawBoard(canvasContext);
            canvasElement.addEventListener("click", onClick, false);

        }

        function getMousePosition(e) {

            var x;
            var y;
            if (e.pageX != undefined && e.pageY != undefined) {
                x = e.pageX;
                y = e.pageY;
            }
            x -= canvasElement.offsetLeft;
            y -= canvasElement.offsetTop;
            cellIndex = Math.floor(x/cellWidth)*boardWidth + Math.floor(y/cellHeight);
            return cellIndex;
        }

        function onClick(e) {

            var cellIndex = getMousePosition(e);
            cell = board.cells[cellIndex];
            alert(cell.cellType);
            cell.cellType = "asd";
            //newCell = new board(cell.positionX, cell.positionY, "FFFF");
            //board.cells[5] = newCell;
            //board.cells[cellIndex] = newCell;
            //alert(cell.cellType);

            board.drawBoard(canvasContext);
        }