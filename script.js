function deleteGrid() {
  const container = document.querySelector(".container");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function newGrid(size) {
  deleteGrid();
  const container = document.querySelector(".container");
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.toggle("row");
    for (let n = 0; n < size; n++) {
      const square = document.createElement("div");
      square.classList.toggle("square");
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

newGrid(4);
const squares = document.querySelectorAll('.square');
squares.forEach(item => {
  item.addEventListener('mouseenter', e => {
    const target = e.target;
    target.style.backgroundColor = "blue";
  })
});
