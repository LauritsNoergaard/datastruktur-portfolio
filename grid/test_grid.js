import {Grid} from './Grid.js';

window.addEventListener("load", start);

// ****** CONTROLLER ******
// #region controller

function start() {
  console.log(`Javascript kører`);
  const grid = new Grid(5, 5);
  grid.set(2, 2, 1);
  grid.set(2, 1, 1);
  console.log(grid.get(2, 2)); 
  console.log(grid);
  console.log(grid.indexFor({row: 2, col: 2}));
  console.log(grid.rowColFor(12));
  console.log(grid.neighbours({row: 2, col: 2}));
  console.log(grid.neighbourValues(2, 2))
  console.log(grid.nextInRow(2, 2));
  console.log(grid.nextInCol(2, 2));
  console.log(grid.north(2,2));
  console.log(grid.west(2,2))

}