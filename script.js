function makeGrid(n) {
    n = n || 16;
    console.log(n);
    n = Math.max(Math.min(n, 100), 10);
    gridContainer.replaceChildren();
    gridContainer.style.setProperty("--grid-rows", n);
    gridContainer.style.setProperty("--grid-cols", n);
    for (let i = 0; i < n * n; i++) {
        const cell = document.createElement("div");
        cell.addEventListener("mouseover", () => cell.classList.add("grid-fill"));
        gridContainer.appendChild(cell);
    }
}

const gridContainer = document.querySelector(".grid-container");
makeGrid(16);

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => makeGrid(parseInt(prompt("Enter the size of the grid:"))));