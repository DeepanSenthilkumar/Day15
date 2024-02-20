
  
document.getElementById("myForm").addEventListener("submit", function(event) {   
    event.preventDefault();   // prevents reset of the form
    
    var formData = new FormData(this);  
    var foodValues = [];
    formData.getAll("food").forEach(function(food) {
      foodValues.push(food);
    });// taking the values from the (radio) food choosen and saving in the array named foodvalues
  
    if (foodValues.length < 2) {
      alert("Please select at least 2 choices of food.");
      return;
    }// if we choose lessthan 2 items then it will show an alert to the users
  
    var pincode = formData.get("pincode");
    if (!/^\d+$/.test(pincode)) {
      alert("Pincode must contain only numbers.");
      return;
    }// validating the data for numbers only.
  
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${formData.get("firstname")}</td>
      <td>${formData.get("lastname")}</td>
      <td>${formData.get("address")}</td>
      <td>${pincode}</td>
      <td>${formData.get("gender")}</td>
      <td>${foodValues.join(", ")}</td>
      <td>${formData.get("state")}</td>
      <td>${formData.get("country")}</td>
    `;
    document.querySelector("tbody").appendChild(newRow);
  
    this.reset();
  });
  