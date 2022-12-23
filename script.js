function makeGrid(n) {
    gridContainer.style.setProperty("--grid-rows", n);
    gridContainer.style.setProperty("--grid-cols", n);
    for (let i = 0; i < n * n; i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", () => cell.classList.add("grid-fill"));
        gridContainer.appendChild(cell);
    }
}


gridContainer = document.querySelector(".grid-container");

makeGrid(16)