const card_product = document.getElementById("card_product");

fetch(
  "https://my-json-server.typicode.com/hasananamul/json_data_class_18/products"
).then((product) =>
  product.json().then((product) => {
    let product_items = "";
    product.map((data) => {
      product_items += `
 <div class="col-md-3">
          <div  class="card shadow my-3">
          <div class="card_image">
                <img
                  class="w-100"
                  src="${data.image}"
                  alt="image"
                />
              </div>
               <div class="card-body ">
                <h2 class="card-title">  ${data.title}</h2>
                <h4 class="card-title"> Skill : ${data.price}</h4>
                <h5 class="card-title"> Category : ${data.category}</h5>
                <h5 class="card-title"> Rate : ${data.rating.rate}</h5>
            </div><!--card-body-->
          </div>
        </div>
          `;
      card_product.innerHTML = product_items;
    });
  })
);

let card_devs = document.getElementById("card_devs");
let devs_data = "";
fetch("https://my-json-server.typicode.com/hasananamul/json_data_class_18/devs")
  .then((devs) => devs.json())
  .then((devs) => {
    devs.map((data) => {
      devs_data += `
      
 <div class="col-md-3">
          <div  class="card shadow my-3">
          <div class="card_image">
                <img
                  class="w-100"
                  src="${data.photo}"
                  alt="image"
                />
              </div>
               <div class="card-body ">
                <h2 class="card-title">  ${data.name}</h2>
                <h4 class="card-title"> Skill : ${data.skill}</h4>
                <h5 class="card-title"> Location : ${data.Location}</h5>
                <h5 class="card-title"> Age : ${data.age}</h5>
            
            </div><!--card-body-->
          </div>
        </div>
      `;
    });
    card_devs.innerHTML = devs_data;
  });

const card_student = document.getElementById("table_data");

let student_data = "";
fetch(
  "https://my-json-server.typicode.com/hasananamul/json_data_class_18/student_results"
)
  .then((student) => student.json())
  .then((student) => {
    student.map((data, index) => {
      student_data += `
      
   <tr>
                    <td>${index + 1}</td>
                    <td>${data.name}</td>
                    <td>${data.class}</td>
                    <td>${data.roll_no}</td>
                    <td><img style="width: auto;height: 30px;objectFit: cover" src ="${
                      data.photo
                    }"></td>
                    <td>${data.section}</td>
                    <td>${data.marks.bangla}</td>
                    <td>${data.marks.math}</td>
                    <td>${data.marks.science}</td>
                    <td>${data.marks.s_science}</td>
                    <td>${data.marks.economic}</td>
                    <td>${data.marks.english}</td>
              
                  </tr>
      
      `;
    });
    card_student.innerHTML = student_data;
  });
