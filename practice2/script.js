const togglevisibility = (name) => {
  const container1 = document.getElementById("formInput")
  const container2 = document.getElementById("list-data")

  if (name == "formIbput") {
    container1.classList.remove("hidden")
    container2.classList.add("hidden")
  } else {
    container1.classList.add("hidden")
    container2.classList.remove("hidden")
  }
}

document.getElementById("btn-list").onclick = function () {
  togglevisibility("list-data")
  showListDataName()
}

document.getElementById("btn-input").onclick = function () {
  togglevisibility("formInput")
}

document.getElementById("btn-save").onclick = function (event) {
  event.preventDefault()

  let name = document.getElementById("input-name").value;
  inputDataArray.push(name)
  document.getElementById("input-name").value = ""
  alert("berhasil disimpan")
}

const showListDataName = () => {
  let nameListDiv = document.getElementById("show-list-data")

  nameListDiv.innerHTML = "";

  if (inputDataArray.length > 0) {
    for (let i = 0; i < inputDataArray.length; i++) {
      let label = document.createElement("label")
      label.className = "lb-item"
      label.textContent = inputDataArray[i]
      nameListDiv.appendChild(label)
    }
  } else {
    let noDataLabel = document.createElement("label")
    noDataLabel.className = "ld-not-found"
    noDataLabel.textContent = "Data Belum Ada...."
    nameListDiv.appendChild(noDataLabel)
  }
}