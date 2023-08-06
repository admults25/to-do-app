const inputBox = document.getElementById("inputID");
const liste = document.getElementById("listID");

function taskEkle(){
  if(inputBox.value == ""){
      alert("Boş bırakamazsınız.");
      }
  else{
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      liste.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML ="&times";
      li.appendChild(span);
    }

  inputBox.value="";
  saveData();
}

liste.addEventListener("click", function(e){
  if(e.target.tagName == "LI"){
      e.target.classList.toggle("checked");
      saveData();
    } else if(e.target.tagName ==="SPAN"){
      e.target.parentElement.remove();
      saveData();
    }
}, false);

function saveData(){
  localStorage.setItem("data",listID.innerHTML);

}
function showData(){
  listID.innerHTML = localStorage.getItem("data");
}
showData();