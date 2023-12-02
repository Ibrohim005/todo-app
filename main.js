const playground = document.getElementById("playground");
const input = document.getElementById("input");

const list = [];

input.onkeyup = (event) => {
  if (event.key === "Enter") {
    add();
  }
};

function add() {
  if (input.value) {
    list.push(input.value);
    updateUI();
    input.value = "";
  } else {
    alert("Fill input brat");
  }
  input.focus();
}

function deleteItem(index) {
  // Remove the item from the list
  list.splice(index, 1);
  // Update the UI
  updateUI();
}

function updateUI() {
  // Clear the playground
  playground.innerHTML = "";
  // Re-render the list
  list.forEach((item, index) => {
    const newItem = `
      <div class="flex items-center justify-between">
        <li class="text-red-600 text-lg font-semibold cursor-pointer">${item}</li>
        <button class="text-xl leading-5 text-red font-bold text-red-600" onclick="deleteItem(${index})">X</button>
      </div>
    `;
    playground.innerHTML += newItem;
  });
}

function clearList() {
  playground.innerHTML = "";
  list.length = 0; // Clear the list array
  document.getElementById("clearButton").style.display = "none";
}
