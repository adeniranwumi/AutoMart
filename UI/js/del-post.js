document.getElementById('del-post-btn').addEventListener('click', () =>{
    document.querySelector('.del-modal').style.display = 'flex';
});

const btnArray = document.getElementsByClassName('cancel-btn');

for(let i = 0; i<btnArray.length; i++){
    btnArray[i].addEventListener("click", () =>{
        document.querySelector('.del-modal').style.display = 'none';
    });
}    

