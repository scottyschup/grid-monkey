(function () {
  function divStyle (idx, listSize) {
    var gridSize = Math.ceil(Math.sqrt(listSize));
    var rowNum = Math.floor(idx / gridSize);
    var colNum = idx % gridSize;
    var scale = 1 / gridSize * 0.95;
    var x = (colNum * 2 - (gridSize - 1)) * 50 / 0.95;
    var y = (rowNum * 2 - (gridSize - 1)) * 50 / 0.95;
    return {
      "transform": "scale(" + scale + ") translate(" + x + "%, " + y + "%)"
    };
  }

  var numGrids = $(".grid-container").children('.content').length;
  $(".grid-container").each(function (i, grid) {
    $(grid).css(divStyle(i, numGrids));
    $(grid).click(function (ev) {
      $(ev.currentTarget).toggleClass('focus');
    });
    var content = $(grid).children('.content')[0];
    var numCells = $(content).children('.cell').length;
    $(content).children('.cell').each(function (j, cell) {
      $(cell).css(divStyle(j, numCells));
      $(cell).click(function (ev) {
        ev.stopPropagation();
        $(ev.currentTarget).toggleClass('focus');
      });
    });
  });
})();
