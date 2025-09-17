// === Reckoning Solver ===
const periodicTable = {
  'h': 1, 'he': 2, 'li': 3, 'be': 4, 'b': 5, 'c': 6, 'n': 7, 'o': 8, 'f': 9, 'ne': 10,
  'na': 11, 'mg': 12, 'al': 13, 'si': 14, 'p': 15, 's': 16, 'cl': 17, 'ar': 18,
  'k': 19, 'ca': 20, 'sc': 21, 'ti': 22, 'v': 23, 'cr': 24, 'mn': 25, 'fe': 26,
  'co': 27, 'ni': 28, 'cu': 29, 'zn': 30, 'ga': 31, 'ge': 32, 'as': 33, 'se': 34,
  'br': 35, 'kr': 36, 'rb': 37, 'sr': 38, 'y': 39, 'zr': 40, 'nb': 41, 'mo': 42,
  'tc': 43, 'ru': 44, 'rh': 45, 'pd': 46, 'ag': 47, 'cd': 48, 'in': 49, 'sn': 50,
  'sb': 51, 'te': 52, 'i': 53, 'xe': 54, 'cs': 55, 'ba': 56, 'la': 57, 'ce': 58,
  'pr': 59, 'nd': 60, 'pm': 61, 'sm': 62, 'eu': 63, 'gd': 64, 'tb': 65, 'dy': 66,
  'ho': 67, 'er': 68, 'tm': 69, 'yb': 70, 'lu': 71, 'hf': 72, 'ta': 73, 'w': 74,
  're': 75, 'os': 76, 'ir': 77, 'pt': 78, 'au': 79, 'hg': 80, 'tl': 81, 'pb': 82,
  'bi': 83, 'po': 84, 'at': 85, 'rn': 86, 'fr': 87, 'ra': 88, 'ac': 89, 'th': 90,
  'pa': 91, 'u': 92, 'np': 93, 'pu': 94, 'am': 95, 'cm': 96, 'bk': 97, 'cf': 98,
  'es': 99, 'fm': 100, 'md': 101, 'no': 102, 'lr': 103, 'rf': 104, 'db': 105,
  'sg': 106, 'bh': 107, 'hs': 108, 'mt': 109, 'ds': 110, 'rg': 111, 'cn': 112,
  'nh': 113, 'fl': 114, 'mc': 115, 'lv': 116, 'ts': 117, 'og': 118
};

const solveBtn = document.getElementById("solve-btn");
const letter1Input = document.getElementById("letter1");
const letter2Input = document.getElementById("letter2");
const resultElement = document.getElementById("result");

if (solveBtn && letter1Input && letter2Input && resultElement) {
  solveBtn.addEventListener("click", () => {
    const letter1 = letter1Input.value.trim().toLowerCase();
    const letter2 = letter2Input.value.trim().toLowerCase();

    if (letter1 && letter2) {
      const elementKey = letter1 + letter2;
      const atomicNumber = periodicTable[elementKey];

      if (atomicNumber !== undefined) {
        resultElement.textContent = `Atomic number for ${elementKey.toUpperCase()}: ${atomicNumber}`;
      } else {
        let found = false;
        for (const key in periodicTable) {
          if (key.includes(letter1) || key.includes(letter2)) {
            resultElement.textContent = `Related element: ${key.toUpperCase()} (Atomic number: ${periodicTable[key]})`;
            found = true;
            break;
          }
        }
        if (!found) {
          resultElement.textContent = `No element found for ${letter1.toUpperCase()} / ${letter2.toUpperCase()}`;
        }
      }
    } else {
      resultElement.textContent = "Please enter two letters";
    }
  });

  [letter1Input, letter2Input].forEach(input =>
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-Z]/g, "");
    })
  );
}



document.addEventListener("DOMContentLoaded", () => {
  // === Sidebar toggle (only if exists) ===
  const toggleBtn = document.querySelector(".toggle-btn");
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");

  if (toggleBtn && sidebar && mainContent) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      mainContent.classList.toggle("collapsed");
      toggleBtn.classList.toggle("collapsed");
    });
  }

  // === Shattered Veil Solver ===
  const shatteredMap = {
    "E": {
      "Crab": 9729,
      "Yeti": 3192,
      "Moth": 7394,
      "Worm": 9377
    },
    "BCDEF": {
      "Crab": 5775,
      "Yeti": 3576,
      "Moth": 1676,
      "Worm": 7671
    },
    "OSTUHJLD": {
      "Crab": 4664,
      "Yeti": 5482,
      "Moth": 1888,
      "Worm": 5861
    },
    "AIOUY": {
      "Crab": 7857,
      "Yeti": 5785,
      "Moth": 8587,
      "Worm": 8588
    }
  };

  const solveBtn = document.getElementById("solveBtn");
  if (solveBtn) {
    solveBtn.addEventListener("click", () => {
      const board = document.getElementById("boardSelect").value;
      const word = document.getElementById("wordSelect").value;
      const result = document.getElementById("result");

      if (board && word && shatteredMap[board] && shatteredMap[board][word]) {
        result.textContent = `Correct number: ${shatteredMap[board][word]}`;
      } else {
        result.textContent = "Please select both board and word.";
      }
    });
  }

  // === Terminus Solver ===
  const images = [
    { code: 0,  url: "https://raw.githubusercontent.com/8zj/bo6-bs/main/Img/0.png" },
    { code: 10, url: "https://raw.githubusercontent.com/8zj/bo6-bs/main/Img/10.png" },
    { code: 11, url: "https://raw.githubusercontent.com/8zj/bo6-bs/main/Img/11.png" },
    { code: 20, url: "https://raw.githubusercontent.com/8zj/bo6-bs/main/Img/20.png" },
    { code: 21, url: "https://raw.githubusercontent.com/8zj/bo6-bs/main/Img/21.png" },
    { code: 22, url: "https://raw.githubusercontent.com/8zj/bo6-bs/main/Img/22.png" }
  ];

  const selections = { X: null, Y: null, Z: null };

  function createImageGrid(containerId, axis) {
    const container = document.getElementById(containerId);
    if (!container) return;

    images.forEach(img => {
      const image = document.createElement("img");
      image.src = img.url;
      image.dataset.code = img.code;

      image.addEventListener("click", () => {
        selections[axis] = parseInt(img.code);
        container.querySelectorAll("img").forEach(i => i.classList.remove("selected"));
        image.classList.add("selected");
        showResults();
      });

      container.appendChild(image);
    });
  }

  function terminus_solver(X, Y, Z) {
    if (X === null || Y === null || Z === null) return ["--", "--", "--"];
    let eq1 = Math.abs(2 * X + 11);
    let eq2 = Math.abs((2 * Z + Y) - 5);
    let eq3 = Math.abs((Y + Z) - X);
    return [eq1, eq2, eq3];
  }

  function formatCode(val) {
    return val.toString().padStart(2, "0");
  }

  function showResults() {
    const { X, Y, Z } = selections;
    const [eq1, eq2, eq3] = terminus_solver(X, Y, Z);
    const boxes = document.querySelectorAll(".code-box");
    if (!boxes.length) return;

    [eq1, eq2, eq3].forEach((v, i) => {
      boxes[i].textContent = v === "--" ? "--" : formatCode(v);
    });
  }

  // Build grids if Terminus page
  if (document.getElementById("x-images")) {
    createImageGrid("x-images", "X");
    createImageGrid("y-images", "Y");
    createImageGrid("z-images", "Z");
  }
});
