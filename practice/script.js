// let a = 200;
// let b = 10;
// let result = 0;
// bandingkan nilai a dan b , jika a lebih besar daripada b maka consol.log(lumos). tampilkan nilai result dimana result b dibagi a
// result = b / a;

// if (a > b) {
//   console.log("Lumoshive Academy");
// } else {
//   console.log("kamu jago golang");
// }

// console.log(result);

const product = [{
  name: "Baju",
  stock: 10,
  price: 300.000,
  description: "baju lumoshive"
}, {
  name: "Tas",
  stock: 5,
  price: 100.000,
  description: "Tas Lumoshive"
}, {
  name: "Celana",
  stock: 7,
  price: 200.000,
  description: "Celana lumoshive"
}]

for (let i = 0; i < product.length; i++) {
  if (product[i].name === "Tas") {
    product[i].price = 300000;
    product[i].stock = 7;
    console.log(`Name: ${product[i].name}, Price: ${product[i].price}, Stock: ${product[i].stock}`);
    break;
  }
}

// let clickCount = 0;

// const message = document.getElementById("message");
// const button = document.getElementById("btn");

// button.onclick = function () {
//   clickCount++;

//   if (clickCount === 1) {
//     message.innerText = "Lumoshice Academy!";
//   } else if (clickCount === 2) {
//     message.innerText = "Programmer handal!";
//   } else if (clickCount === 3) {
//     message.innerText = "Aku Pasti Bisa Menjadi Programmer!";
//     button.disabled = true;
//   }
// };

const button = document.getElementById('btn');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

button.onclick = function () {
  const itemText = itemInput.value.trim();
  if (itemText) {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';

    deleteButton.onclick = function () {
      itemList.removeChild(listItem);
    }

    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);

    itemInput.value = '';
  } else {
    alert('Inputan Harus Di isi, jangan ya dek ya!!!');
  }
}