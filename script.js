const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createPalette() {
  palette.innerHTML = ""; // clear previous
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = color;

    const code = document.createElement("div");
    code.className = "color-code";
    code.textContent = color;

    colorBox.appendChild(code);
    colorBox.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      alert(`Copied ${color} to clipboard!`);
    });

    palette.appendChild(colorBox);
  }
}

generateBtn.addEventListener("click", createPalette);

window.onload = createPalette;
