const editPriceInputField = document.getElementById("edit-price-input");
const updatePriceBtn = document.getElementById("update-price-btn");
const editPriceBtn = document.getElementById("edit-price");
const carPrice = document.getElementById("car-price");

editPriceBtn.addEventListener("click", ()=>{
    if(editPriceInputField.className == "hide-content"){
        editPriceInputField.className = " show-content";
        updatePriceBtn.className = " show-content";
    }else{
        editPriceInputField.className = "hide-content";
        updatePriceBtn.className = "hide-content";
    }
});

updatePriceBtn.addEventListener("click", () => {
   if(editPriceInputField.value){
       carPrice.innerHTML = editPriceInputField.value;
       editPriceInputField.className = "hide-content";
       updatePriceBtn.className = "hide-content";
       editPriceInputField.value = "";
   }
});



