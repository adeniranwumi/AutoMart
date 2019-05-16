const imgFileInput = document.getElementById("img-file-input");
const chooseFileBtn = document.getElementById("choose-file-btn");
const imgFileText = document.getElementById("img-file-txt");


chooseFileBtn.addEventListener("click", () => {
    imgFileInput.click();
});

imgFileInput.addEventListener("change", () => {
    if(imgFileInput.value){
        imgFileText.innerHTML =  imgFileInput.value.match(/[\/\\]([\w\d\s\. \-\(\)]+)$/)[1];
    }else{
        imgFileText.innerHTML = "No files chosen";
    }
});


