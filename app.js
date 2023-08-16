const inputBox = document.getElementById("inputID");
const liste = document.getElementById("listID");

function taskEkle() {
  if (inputBox.value === "") {
    alert("Boş bırakamazsınız.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    liste.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&times;";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

liste.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  let tasks = [];
  const listItems = liste.getElementsByTagName("li");
  for (let i = 0; i < listItems.length; i++) {
    tasks.push(listItems[i].innerHTML);
  }
  localStorage.setItem("data", JSON.stringify(tasks));
}

function showData() {
  const data = localStorage.getItem("data");
  if (data) {
    const tasks = JSON.parse(data);
    liste.innerHTML = ""; // Önceki listeyi temizle
    tasks.forEach((task) => {
      let li = document.createElement("li");
      li.innerHTML = task;
      liste.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "&times;";
      li.appendChild(span);
    });
  }
}

showData();
