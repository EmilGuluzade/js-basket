let allAddBtn = document.querySelectorAll(".btn-primary");

let basketCount = document.querySelector(".basketcount");
let table = document.querySelector(".table");

let basket = JSON.parse(localStorage.getItem("basket"));

if (localStorage.getItem("basket") == null) {
  localStorage.setItem("basket", JSON.stringify([]));
}
function getBasketCount() {
  if (localStorage.getItem("basket") != null) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basketCount.innerText = basket.length;
  }
}

for (const btn of allAddBtn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let Id = btn.parentElement.parentElement.getAttribute("data-id");
    let Name = btn.previousElementSibling.previousElementSibling.innerText;
    let Image = btn.parentElement.previousElementSibling.getAttribute("src");

    if (localStorage.getItem("basket") == null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }

    let basket = JSON.parse(localStorage.getItem("basket"));

    let selectProduct = basket.find((p) => p.id == Id);

    if (selectProduct === undefined) {
      basket.push({
        id: Id,
        count: 1,
        name: Name,
        image: Image,
      });
    } else {
      selectProduct.count++;
    }

    localStorage.setItem("basket", JSON.stringify(basket));
    getBasketCount();
  });
}
for (const product of basket) {
  table.innerHTML += `
    <tr>
      <td>
       <img width="50px" src="${product.image}"   alt="">
      </td>
      <td>${product.name}</td>
      <td> ${product.count}</td>
    </tr>
    `;
}
