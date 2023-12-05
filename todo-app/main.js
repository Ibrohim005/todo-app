const form = document.getElementById("form");
const todos = document.getElementById("todos");

const list = [];

const add = (event) => {
  event.preventDefault();
  list.unshift({
    title: event.target.input.value,
    isCompleted: false,
    // status: "removed" | "new" | "done",
  });
  updateDOM();
  event.target.input.value = "";
};

const filterData = () => list.filter((e) => e.status === "new");

function complete(index) {
  list[index].isCompleted = !list[index].isCompleted;
  updateDOM();
}

function deleteTask(index) {
  list.splice(index, 1);
  updateDOM();
}

function clearTasks() {
  todos.innerHTML = "";
}

function updateDOM() {
  todos.innerHTML = "";
  list.forEach((el, index) => {
    todos.innerHTML += `
          <div
          class="py-3 flex items-center justify-between relative after:absolute after:right-6 after:left-[51px] after:h-px after:bg-blue after:bottom-0">
          <div class="flex items-center gap-2 ">
              <span onclick="complete(${index})" class="cursor-pointer transition-color duration-300 ${
      el.isCompleted
        ? "icon-checked text-orange"
        : "icon-checkbox text-gray-100"
    } text-[64px] text-orange"></span>
            <h2 class="text-3.5xl font-normal ${
              el.isCompleted ? "text-gray-200 line-through" : "text-dark"
            }">
                ${el.title}
            </h2>
          </div>
          <button class="group"  onclick="deleteTask(${index})">
              <span class="icon-trash text-[32px] text-red opacity-30 hover:opacity-100 duration-300"></span>
          </button>

          </div>
          `;
  });
}
