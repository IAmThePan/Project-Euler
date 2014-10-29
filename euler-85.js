// Project Euler 85 in JavaScript
// https://projecteuler.net/problem=85

var numRectangles = function(x, y) {
	return x * y * (x + 1) * (y + 1) / 4;
}

var maxArea = function(maxSquares){
	var gridX = 0;
	while (numRectangles(gridX + 1, gridX + 1) <= maxSquares) gridX++;

	var gridY = gridX;
	var solution = [gridX, gridY, numRectangles(gridX, gridY)];
	var numRect, numRectNext;
	while (gridY > 0) {
		while (numRectangles(gridX + 1, gridY) <= maxSquares) gridX++;
		diffLess = maxSquares - numRectangles(gridX, gridY);
		diffMore = numRectangles(gridX + 1, gridY) - maxSquares;

		if (diffLess < diffMore && diffLess < solution[2]) solution = [gridX, gridY, diffLess];
		else if (diffLess >= diffMore && diffMore < solution[2]) solution = [gridX + 1, gridY, diffMore];

		gridY--;
	}

	return solution[0] * solution[1];
}

maxArea(2000000);