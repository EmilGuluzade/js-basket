  const allAddBtn = document.getElementsByClassName("btn-primary");
 

  let basketCount = document.querySelector(".basketcount");
  let table = document.querySelector(".table");

  let basket = JSON.parse(localStorage.getItem("basket"));

  if (localStorage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
 
  for (const btn of allAddBtn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      let Id = btn.parentElement.parentElement.getAttribute("data-id");
      let Name = btn.previousElementSibling.previousElementSibling.innerText;
      let Image = btn.parentElement.previousElementSibling.getAttribute("src");

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
  

  // function attachDelete() {
  //   let allDelBtn = document.querySelectorAll(".btn-danger");
  //   for (const btnDel of allDelBtn) {
  //     btnDel.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       console.log("slaam");
  //       let Name =
  //         btnDel.parentElement.previousElementSibling.previousElementSibling
  //           .innerText;
  
  //       let basket = JSON.parse(localStorage.getItem("basket"));
  
  //       let target = basket.find((p) => p.name == Name);
  //       let indexOfTarget = basket.indexOf(target);
  
  //       if (target.count > 1) {
  //         target.count--;
  //       } else {
  //         basket.splice(indexOfTarget, 1);
  //       }
  // console.log(target.count)
  //       localStorage.setItem("basket", JSON.stringify(basket));
  //       basket = JSON.parse(localStorage.getItem("basket"));
  //       getBasketCount(basket);
  //     });
  //   }
  // }
 function getBasketCount() {
    if (localStorage.getItem("basket") != null) {
      let basket = JSON.parse(localStorage.getItem("basket"));
      let countSum = basket.reduce((acc, el) => acc + el.count, 0);
      basketCount.innerText = countSum;
    }
  }
  getBasketCount();

  
  for (const product of basket) {
    table.innerHTML += `
      <tr>
        <td>
        <img width="50px" src="${product.image}"   alt="">
        </td>
        <td>${product.name}</td>
        <td> ${product.count}</td>
        <td> <button  class="btn btn-danger">delete</button></td>
      </tr>
      `;
        
  }
attachDelete();


