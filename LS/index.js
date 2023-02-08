var form = `<div>
  <div class="form-group">
    <label for="firstname">FirstName</label>
    <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Your FirstName">
  </div>
  <div class="form-group">
    <label for="lastname">LastName</label>
    <input type="text" class="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Your LastName">
  </div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter Your Email">
    <div class="form-group mt-3">
    <label for="phonenumber">PhoneNumber</label>
    <input type="number" class="form-control" id="phonenumber" placeholder="Enter Your PhoneNumber">
    <label for="file">File</label>
    <input type="file" class="form-control" id="file" placeholder="Choose your file">
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="save()">Save</button>
</div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th clsaa="col-1">No.</th>
      <th clsaa="col-3">FirstName</th>
      <th clsaa="col-3">LastName</th>
      <th clsaa="col-4">Email</th>
      <th clsaa="col-3">PhoneNumber</th>
      <th clsaa="col-4">File</th>
      <th clsaa="col-2">Edit</th>
      <th clsaa="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].firstname}</td>
      <td>${details[i].lastname}</td>
      <td>${details[i].email}</td>
      <td>${details[i].phonenumber}</td>
      <td>${details[i].file}</td>

      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let phonenumber = document.getElementById("phonenumber");
    let file = document.getElementById("file");

    if (firstname.value == 0) {
        alert("name is Empty");
        return
    }
    if (lastname.value == 0) {
      alert("name is Empty");
      return
  }
    if (email.value == 0) {
      alert("email is Empty");
      return
  }
  if (phonenumber.value == 0) {
    alert("name is Empty");
    return
}
  if (file.value == 0) {
    alert("file is Empty");
    return
}
    let data = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        phonenumber: phonenumber.value,
        file:file.value
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(email.value)
    table();
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    phonenumber.value = "";
    file.value = "";
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)
};

function edit(index) {
    let editForm = `<div>
  <div class="form-group">
    <label for="firstname">Update firstname</label>
    <input type="text" value="${details[index].firstname}" class="form-control" id="newfirstname" aria-describedby="emailHelp" placeholder="Update Your firstname">
  </div>
  <div class="form-group">
  <label for="lastname">Update lastname</label>
  <input type="text" value="${details[index].lastname}" class="form-control" id="newlastname" aria-describedby="emailHelp" placeholder="Update Your lastname">
</div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="email" value="${details[index].email}" class="form-control" id="newEmail" placeholder="Update Your email">
  </div>
  <div class="form-group mt-3">
    <label for="phonenumber">phonenumber</label>
    <input type="number" value="${details[index].phonenumber}" class="form-control" id="newphonenumber" placeholder="Update Your phonenumber">
  </div>
  <div class="form-group mt-4">
  <label for="newFile">File</label>
  <input type="file" value="${details[index].file}" class="form-control" id="newFile" placeholder="Update Your file">
</div>
  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
    // console.log('edit work');
};

function update(index) {
    let newfirstname = document.getElementById('newfirstname');
    let newlastname = document.getElementById('newlastname');
    let newEmail = document.getElementById('newEmail');
    let newphonenumber = document.getElementById('newphonenumber');
    let newFile = document.getElementById('newFile');



    details[index] = {
        firstname: newfirstname.value,
        lastname: newlastname.value,
        email: newEmail.value,
        phonenumber: newphonenumber.value,
        file: newFile.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;
// console.log('update work')
// console.log(details)
}






